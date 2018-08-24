import { peerSocket } from "messaging";
import { geolocation } from "geolocation";

import { WEATHER_MESSAGE_KEY, Conditions } from './common.js';

export default class Weather {
  
  constructor() {
    this._apiKey = '';
    this._provider = 'yahoo';
    this._feelsLike = true;
    this._weather = undefined;
    this._maximumAge = 0;

    this.onerror = undefined;
    this.onsuccess = undefined;
    
    peerSocket.addEventListener("message", (evt) => {
      // We are receiving a request from the app
      if (evt.data !== undefined && evt.data[WEATHER_MESSAGE_KEY] !== undefined) {
        let message = evt.data[WEATHER_MESSAGE_KEY];
        prv_fetchRemote(message.provider, message.apiKey, message.feelsLike);
      }
    });
  }
  
  setApiKey(apiKey) {
    this._apiKey = apiKey;
  }
  
  setProvider(provider) {
    this._provider = provider;
  }
  
  setFeelsLike(feelsLike) {
    this._feelsLike = feelsLike;
  }
  
  setMaximumAge(maximumAge) {
    this._maximumAge = maximumAge;
  }
  
  fetch() {
    let now = new Date().getTime();
    if(this._weather !== undefined && this._weather.timestamp !== undefined && (now - this._weather.timestamp < this._maximumAge)) {
      // return previous weather if the maximu age is not reached
      if(this.onsuccess) this.onsuccess(this._weather);
      return;
    }
    
    geolocation.getCurrentPosition(
      (position) => {
        //console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
        prv_fetch(this._provider, this._apiKey, this._feelsLike, position.coords.latitude, position.coords.longitude, 
              (data) => {
                this._weather = data;
                if(this.onsuccess) this.onsuccess(data);
              }, 
              this.onerror);
      }, 
      (error) => {
        if(this.onerror) this.onerror(error);
      }, 
      {"enableHighAccuracy" : false, "maximumAge" : 1000 * 1800});
  }
};

/*******************************************/
/*********** PRIVATE FUNCTIONS  ************/
/*******************************************/

function prv_fetchRemote(provider, apiKey, feelsLike) {
  geolocation.getCurrentPosition(
    (position) => {
      prv_fetch(provider, apiKey, feelsLike, position.coords.latitude, position.coords.longitude,
          (data) => {
            if (peerSocket.readyState === peerSocket.OPEN) {
              let answer = {};
              answer[WEATHER_MESSAGE_KEY] = data;
              peerSocket.send( answer );
            } else {
              console.log("Error: Connection is not open with the device");
            }
          },
          (error) => { 
            if (peerSocket.readyState === peerSocket.OPEN) {
              let answer = {};
              answer[WEATHER_MESSAGE_KEY] = { error : error };  
              peerSocket.send( answer );
            }
            else {
              console.log("Error : " + JSON.stringify(error) + " " + error); 
            }
          }
      );
    }, 
    (error) => {
      if (peerSocket.readyState === peerSocket.OPEN) {
        let answer = {};
        answer[WEATHER_MESSAGE_KEY] = { error : error };  
        peerSocket.send( answer );
      }
      else {
        console.log("Location Error : " + error.message); 
      }
    }, 
    {"enableHighAccuracy" : false, "maximumAge" : 1000 * 1800});
}

function prv_fetch(provider, apiKey, feelsLike, latitude, longitude, success, error) {
  // console.log("Latitude: " + latitude + " Longitude: " + longitude);
  if( provider === "owm" ) {
    prv_queryOWMWeather(apiKey, latitude, longitude, success, error);
  }
  else if( provider === "wunderground" ) {
    prv_queryWUWeather(apiKey, feelsLike, latitude, longitude, success, error);
  }
  else if( provider === "darksky" ) {
    prv_queryDarkskyWeather(apiKey, feelsLike, latitude, longitude, success, error);
  }
  else 
  {
    prv_queryYahooWeather(latitude, longitude, success, error);
  }
}

function prv_queryYahooWeather(latitude, longitude, success, error) {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select astronomy, location.city, item from weather.forecast where woeid in '+
          '(select woeid from geo.places(1) where text=\'(' + latitude+','+longitude+')\') and u=\'c\'&format=json';

  fetch(encodeURI(url))
  .then((response) => {
    response.json()
    .then((data) => {
      
      if(data.query === undefined || data.query.results === undefined || data.query.results.channel === undefined) {
        if(error) error(data);
        return;
      }

      var condition = parseInt(data.query.results.channel.item.condition.code);
      switch(condition){
        case 31 :
        case 32 :
        case 33 :
        case 34 :
          condition = Conditions.ClearSky;  break;
        case 29 :
        case 30 :
        case 44 :
          condition = Conditions.FewClouds;  break;
        case 8 :
        case 9 :
          condition = Conditions.ShowerRain;  break;
        case 6 :
        case 10 :
        case 11 :
        case 12 :
        case 35 :
        case 40 :
          condition = Conditions.Rain; break;
        case 1 :
        case 3 :
        case 4 :
        case 37 :
        case 38 :
        case 39 :
        case 47 :
          condition = Conditions.Thunderstorm; break;
        case 5 :
        case 7 :
        case 13 :
        case 14 :
        case 15 :
        case 41 :
        case 42 :
        case 43 :
          condition = Conditions.Snow; break;
        case 20 :
          condition = Conditions.Mist; break;
        case 26 :
        case 27 :
        case 28 :
          condition = Conditions.BrokenClouds; break;
        default : condition = Conditions.Unknown; break;
      }

      var current_time = new Date();
      var sunrise_time = prv_timeParse(data.query.results.channel.astronomy.sunrise);
      var sunset_time  = prv_timeParse(data.query.results.channel.astronomy.sunset);
      let weather = {
        //temperatureK : (parseInt(data.query.results.channel.item.condition.temp) + 273.15),
        temperatureC : parseInt(data.query.results.channel.item.condition.temp),
        temperatureF : (parseInt(data.query.results.channel.item.condition.temp) * 9/5 + 32),
        location : data.query.results.channel.location.city,
        description : data.query.results.channel.item.condition.text,
        isDay : current_time >  sunrise_time && current_time < sunset_time,
        conditionCode : condition,
        sunrise : sunrise_time.getTime(),
        sunset : sunset_time.getTime(),
        timestamp : current_time.getTime(),
        tempLow : parseInt(data.query.results.channel.item.forecast[0].low),
        tempHigh : parseInt(data.query.results.channel.item.forecast[0].high),
       
               
      };
      // Send the weather data to the device
      if(success) success(weather);
    });
  })
  .catch((err) => {
    if(error) error(err);
  });
};

function prv_timeParse(str) {
  var buff = str.split(" ");
  if(buff.length === 2) {
    var time = buff[0].split(":");
    if(buff[1].toLowerCase() === "pm" && parseInt(time[0]) !== 12) {
      time[0] = (parseInt(time[0]) + 12) + "";
    }
  }

  var date = new Date();
  date.setHours(parseInt(time[0]));
  date.setMinutes(parseInt(time[1]));

  return date;
}
