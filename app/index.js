import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import * as util from "../common/utils";
import { today } from 'user-activity';
import { display } from "display";
import { battery } from "power";
import { charger } from "power";
import * as messaging from "messaging";
import Weather from '../common/weather/device';
import { locale } from "user-settings";
import * as fs from "fs";
import { me } from "appbit";
import { Barometer } from "barometer";
import { me as device } from "device";

// Update the clock every unit
clock.granularity = "minutes";

let weather = new Weather();
var hrm = new HeartRateSensor();
var bar = new Barometer({ frequency: 1 });
let lang = locale.language;
let settings = {};


if (!device.screen) device.screen = { width: 348, height: 250 };



let tempLabel = document.getElementById("tempLabel");
let upperTime= document.getElementById("upperLabel");
let lowerTime = document.getElementById("lowerLabel");
let hrLabel = document.getElementById("hrm");
let dateLabel = document.getElementById("dateLabel");
let stepsLabel = document.getElementById("stepsLabel");
let activeMinutesLabel = document.getElementById("activeMinutesLabel");
let highElement = document.getElementById("sunriseLabel");
let lowElement = document.getElementById("sunsetLabel");
let backgroundElement = document.getElementById("background");
let distanceElement = document.getElementById("distanceLabel");
let baroElement = document.getElementById("baroLabel");

let g_sunriseHours = "--";
let g_sunriseMinutes = "--";
let g_sunsetHours = "--";
let g_sunsetMinutes = "--";
let g_tempLow = "-";
let g_tempHigh = "-";





try {
  

  let stats = fs.statSync("settings.txt");
  let settingsread = fs.readFileSync("settings.txt","cbor");
  
  if (stats) {
  console.log("File size: " + stats.size + " bytes");
  console.log("Last modified: " + stats.mtime);
  console.log("Sucess!");     
  }


} catch (err) {
 
  settings.highCol = '#14D3F5';
  settings.lowCol = '#14D3F5';
  settings.upperTime = 'white';
  settings.lowerTime = 'white';
  settings.hr = '#F80070';
  settings.steps = '#14D3F5';
  settings.date = '#5F9EA0';
  settings.temp = '#708090';
  settings.activeMinutes = '#14D3F5';
  settings.background = 'black';
  settings.tempText = '-';
  settings.g_sunsetHours = "--";
  settings.g_sunsetMinutes = "--";
  settings.g_sunriseHours = "--";
  settings.g_sunriseMinutes = "--";
  settings.g_tempLow = "--";
  settings.g_tempHigh = "--";
  settings.extremes = false;
  settings.fahrenheit = false;
  settings.americanFormat = false;
  settings.miles = false;
  settings.toggle = 0;
  settings.baro = '#14D3F5';
  settings.dist = '#14D3F5';
  settings.seperator = "/";
  
  fs.writeFileSync("settings.txt", settings, "cbor");

}

let settingsread = fs.readFileSync("settings.txt", "cbor");




  settings.highCol = settingsread.highCol;
  settings.lowCol =  settingsread.lowCol;
  settings.upperTime = settingsread.upperTime;
  settings.lowerTime =  settingsread.lowerTime;
  settings.hr =  settingsread.hr;
  settings.steps =  settingsread.steps;
  settings.date =  settingsread.date;
  settings.temp =  settingsread.temp;
  settings.activeMinutes =  settingsread.activeMinutes;
  settings.background = settingsread.background;
  settings.tempHigh = settingsread.tempHigh;
  settings.tempLow = settingsread.tempLow;
  settings.highElement = settingsread.highElement;
  settings.lowElement = settingsread.lowElement;
  settings.extremes = settingsread.extremes;
  settings.fahrenheit = settingsread.fahrenheit;
  settings.toggle = settingsread.toggle;
  settings.baro = settingsread.baro;
  settings.dist = settingsread.dist;
  settings.seperator = settingsread.seperator;

  g_sunriseHours = settingsread.g_sunriseHours;
  g_sunriseMinutes = settingsread.g_sunriseMinutes;
  g_sunsetHours = settingsread.g_sunsetHours;
  g_sunsetMinutes= settingsread.g_sunsetMinutes;
  g_tempLow = settingsread.g_tempLow;
  g_tempHigh = settingsread.g_tempHigh;




//Colors
let sunriseCol = settingsread.highCol || '#14D3F5';
let tempCol = settingsread.temp || '#708090';
let sunsetCol = settingsread.lowCol  || '#14D3F5';
let upperTimeCol = settingsread.upperTime || '#FFFFFF';
let lowerTimeCol = settingsread.lowerTime || '#FFFFFF';
let hrCol = settingsread.hr || '#F80070';
let activeMinutesCol = settingsread.activeMinutes || '#14D3F5';
let stepsCol = settingsread.steps || '#14D3F5';
let dateCol = settingsread.date || '#5F9EA0';
let bgCol = settingsread.background || 'black';
let baroCol = settingsread.baro || '#14D3F5';
let distCol = settingsread.dist || '#14D3F5';




let highElementData;
let lowElementData;
let tempText = settingsread.tempText;
let seperator = settingsread.seperator;

//data
let extremes = settingsread.extremes || false;
let toggle = settingsread.toggle || 0;
let fahrenheit = settingsread.fahrenheit;
let miles = settingsread.miles;
let americanFormat = settingsread.americanFormat;

if(extremes){
  highElementData = settingsread.g_sunriseHours +":"+settingsread.g_sunriseMinutes;
  lowElementData = settingsread.g_sunsetHours +":"+settingsread.g_sunsetMinutes;
}else{
  highElementData = settingsread.g_tempHigh;
  lowElementData = settingsread.g_tempLow;
  
}
let highTemp = settingsread.highElementData;
let lowTemp = settingsread.lowElementData;
let tempText = settingsread.tempText;




highElement.style.fill = sunriseCol;
lowElement.style.fill = sunsetCol;
tempLabel.style.fill = tempCol;
upperTime.style.fill = upperTimeCol;
lowerTime.style.fill = lowerTimeCol;
activeMinutesLabel.style.fill = activeMinutesCol;
hrLabel.style.fill = hrCol;
stepsLabel.style.fill = stepsCol;
dateLabel.style.fill = dateCol;
backgroundElement.style.fill = bgCol;

if (device.screen.width == 300){

  distanceElement.style.fill = distCol;
  baroElement.style.fill = baroCol;
}




//initialize with something
highElement.text = g_tempHigh;
lowElement.text = g_tempLow;
tempLabel.text = tempText;
hrLabel.text = "--"; 
if (device.screen.width == 300) {
  baroElement.text = "--";
}

stepsLabel.text = "--";




//distanceLabel.text = "--";
activeMinutesLabel.text = "--";
// Set the provider : yahoo / owm / wunderground / darksky
weather.setProvider("yahoo"); 
// set your api key
weather.setApiKey("mykey");
// set the maximum age of the data
weather.setMaximumAge(50 * 1000); 

let tempVar = true;
let lang = locale.language;


console.log(lang);


 // Display the weather data received from the companion
weather.onsuccess = (data) => {
  let sunriseData = new Date(data.sunrise);
  let sunsetData = new Date(data.sunset);

     
        g_sunriseHours= sunriseData.getHours();
        g_sunriseMinutes = sunriseData.getMinutes();
  
        g_sunsetHours = sunsetData.getHours();
        g_sunsetMinutes = sunsetData.getMinutes();
        
        g_tempLow = data.tempLow.toFixed(0);
        g_tempHigh = data.tempHigh.toFixed(0);
  
        tempText = data.temperatureC.toFixed(0);

} 

weather.onerror = (error) => {
  console.log("Weather error " + JSON.stringify(error));
}



//happens onChange of screen  
  
 function updateStats(){ 
     
   
   if(miles){
     
   if (device.screen.width != 300){
  
      stepsLabel.text = `${today.adjusted.steps}${seperator}${(today.adjsted.distance/1000*0.621371).toFixed(2)}`;
   }else{
      stepsLabel.text = today.adjusted.steps;
      distanceElement.text = (today.adjusted.distance/1000*0.621371).toFixed(2);
     
   }
     
     
     
  }
   else{
      if (device.screen.width != 300){
      stepsLabel.text = `${today.adjusted.steps}${seperator}${(today.adjusted.distance/1000).toFixed(2)}`;
   }else{
     stepsLabel.text = today.adjusted.steps;
     distanceElement.text = (today.adjusted.distance/1000).toFixed(2);
   }
     
     
     
   }
  weatherCheck();
   if (device.screen.width == 300){
       activeMinutesLabel.text=`${today.adjusted.activeMinutes}${seperator}${battery.chargeLevel}`;
   }else{
      activeMinutesLabel.text=`${today.adjusted.activeMinutes}${seperator}${battery.chargeLevel}`;
   }
 
  messaging.peerSocket.onopen = function() {
  // Fetch the weather every 15 sec
  setInterval(() => weather.fetch(), 30 * 1000);
  weather.fetch();
}
 
 } 

//for the initial value
updateStats(); 

//update the clock every tick event
clock.ontick = () => updateClock();

backgroundElement.onclick = function(e){
    if(extremes){
    extremes = false;
    weatherCheck();
  }else{
    extremes = true;
    weatherCheck();
  }
}

hrLabel.onclick = function(e){
    if(extremes){
    extremes = false;
    weatherCheck();
  }else{
    extremes = true;
    weatherCheck();
  }
}

//update all the activity data
display.onchange = () => updateStats();
if(!display.on){
   hrm.stop();
   bar.stop();
   
}

me.onunload = () => {
         
  fs.writeFileSync("settings.txt", settings, "cbor");
}


function weatherCheck(){
  
  let tempsunsetHours;
  if(extremes){
 
  if(fahrenheit){
    
   highElement.text = (g_tempHigh * 9/5 +32).toFixed(0)+"°F";
   lowElement.text = (g_tempLow * 9/5 +32).toFixed(0)+"°F";
   tempLabel.text = (tempText* 9/5 +32).toFixed(0)+"°F";
    settings.g_tempHigh =  g_tempHigh;
    settings.g_tempLow = g_tempLow;
    settings.tempText = tempText;
  }else{
    highElement.text = g_tempHigh +"°C";
    lowElement.text = g_tempLow +"°C";
    tempLabel.text = tempText+"°C";
    settings.g_tempHigh =  g_tempHigh;
    settings.g_tempLow = g_tempLow;
    settings.tempText = tempText;
  }
  
 

}else{
 
    if(fahrenheit){
      tempLabel.text = (tempText* 9/5 +32).toFixed(0)+"°F";
    
    }else{
      tempLabel.text = tempText+"°C";
          
    }
   
    if(toggle && g_sunsetHours >12){
        tempsunsetHours = g_sunsetHours -12;
        lowElement.text =util.zeroPad(tempsunsetHours)+":"+util.zeroPad(g_sunsetMinutes);
       
    }else{  
       lowElement.text =util.zeroPad(g_sunsetHours)+":"+util.zeroPad(g_sunsetMinutes);
    }
      
      highElement.text = util.zeroPad(g_sunriseHours)+":"+util.zeroPad(g_sunriseMinutes);     
  
        settings.g_sunriseHours = g_sunriseHours;
        settings.g_sunriseMinutes = g_sunriseMinutes;
        settings.g_sunsetHours = g_sunsetHours;
        settings.g_sunsetMinutes = g_sunsetMinutes;
        settings.g_tempHigh =  g_tempHigh;
        settings.g_tempLow = g_tempLow;
        settings.tempText = tempText;
        settings.toggle = toggle;
        settings.fahrenheit = fahrenheit;
        settings.extremes = extremes;
}
}

//settings
messaging.peerSocket.onmessage = function(evt) {
 console.log(evt.data.key);
  
    if(evt.data.key == "toggle"){     
         if(evt.data.value){
        toggle = true;
     }else{
      toggle = false;
     }    
  }
  
      if(evt.data.key == "americanFormat"){     
         if(evt.data.value){
        americanFormat = true;
     }else{
      americanFormat = false;
     }    
  }
  
  if(evt.data.key == "miles"){     
         if(evt.data.value){
        miles = true;
     }else{
      miles = false;
     }
  }
    
   if(evt.data.key == "fahrenheit"){     
         if(evt.data.value){
        fahrenheit = true;
     }else{
      fahrenheit = false;
     }
   }
  
  if(evt.data.key == "sunriseColor"){     
      highElement.style.fill = evt.data.value;
   
  }

   if(evt.data.key == "baroColor"){     
      baroElement.style.fill = evt.data.value;   
  }

   if(evt.data.key == "entfernungColor"){     
      distanceElement.style.fill = evt.data.value;    
  }

   if(evt.data.key == "backgroundColor"){     
      backgroundElement.style.fill = evt.data.value;  
  }

  if(evt.data.key == "sunsetColor"){
     lowElement.style.fill = evt.data.value;    
  }

  if(evt.data.key == "dateColor"){
    dateLabel.style.fill = evt.data.value;  
  }
  
  if(evt.data.key == "hoursColor"){
    upperTime.style.fill = evt.data.value;
  }
  
  if(evt.data.key == "minutesColor"){
    lowerTime.style.fill = evt.data.value; 
  }
  
  if(evt.data.key =="weatherColor"){
    tempLabel.style.fill = evt.data.value;
  }
  
  if(evt.data.key =="heartrateColor"){
    hrLabel.style.fill = evt.data.value;
  }
  
   if(evt.data.key =="activityLineColor"){
    activeMinutesLabel.style.fill = evt.data.value;
  }
  
   if(evt.data.key =="distanceColor"){
    stepsLabel.style.fill = evt.data.value;  
  }
  if(evt.data.key == "seperator"){
    
    switch(JSON.stringify(evt.data.value.values[0].value)){
      case "0": seperator = "|"
              break;
      case "1": seperator = "/"
              break;
      case "2": seperator = " "
              break;
      case "3": seperator = "\\"
              break;    
              
    console.log("Seperator:"+seperator);

    } 
    
    console.log("SettingsValueSep:"+seperator);
    
  }

  else{}

  saveIt(evt);
}  
 
function saveIt(element) {

  
  if(element.data.key == "sunriseColor"){
   settings.highCol = element.data.value;
  }
  
   if(element.data.key == "fahrenheit"){
     if(element.data.value){
        settings.fahrenheit = true;
     }else{
        settings.fahrenheit = false;
     }
   }
  
   if(element.data.key == "americanFormat"){
     if(element.data.value){
        settings.americanFormat = true;
     }else{
        settings.americanFormat = false;
     }
   }
  
   if(element.data.key == "miles"){
     if(element.data.value){
        settings.miles = true;
     }else{
        settings.miles = false;
     }
   }
     
  if(element.data.key == "toggle"){
     if(element.data.value == true){
        settings.toggle = 1;
     }else{
        settings.toggle = 0;
     }
  

  }
  if(element.data.key == "backgroundColor"){
   settings.background = element.data.value;
  }
  
  if(element.data.key == "entfernungColor"){
   settings.dist = element.data.value;
  }
  
  
  if(element.data.key == "baroColor"){
   settings.baro = element.data.value;
  }
  
  if(element.data.key == "sunsetColor"){
    settings.lowCol = element.data.value;
  }
  
  if(element.data.key == "dateColor"){
    settings.date = element.data.value;
  }
  
  if(element.data.key == "hoursColor"){
    settings.upperTime = element.data.value;
  }
  
  if(element.data.key == "minutesColor"){
    settings.lowerTime = element.data.value;
  }
  
  if(element.data.key == "weatherColor"){
    settings.temp = element.data.value;
  }
  
  if(element.data.key == "heartrateColor"){
    settings.hr = element.data.value;
  }
  
  if(element.data.key == "activityLineColor"){
    settings.activeMinutes = element.data.value; 
  }
  
  
  if(element.data.key == "distanceColor"){
    settings.steps = element.data.value;
  }
  
  if(element.data.key == "seperator"){
    console.log("Saving:"+JSON.stringify(element.data.value.values[0].value)); 
    switch(JSON.stringify(element.data.value.values[0].value)){
      

      case "0": settings.seperator = "|"
              break;
      case "1": settings.seperator = "/"
              break;
      case "2": settings.seperator = " "
              break;
      case "3": settings.seperator = "\\"
              break;    
          
    

    } 
  }
  
  else{}
  console.log("SEPERATOR:"+seperator);
}

function updateClock() {
  
  let today = new Date(); 
  let hours = util.zeroPad(today.getHours());
  let mins = util.zeroPad(today.getMinutes());
  let date = today.getDate();
  let wday = today.getDay();
  let m = today.getMonth() +1;
  let timeLeft =  battery.timeUntilFull || "--";
  let prefix = lang.substring(0,2);

  
  if(timeLeft == 'infinity' ){
    timeLeft = "oo";
  }

    if(toggle == 1){
    if(hours > 12){
      hours = hours -12;
      hours= util.zeroPad(hours);
    }
  }else{}
  
  upperTime.text = hours;
  lowerTime.text = mins;
 
  if(americanFormat){
    dateLabel.text = `${m}${seperator}${date}${seperator}${util.weekday[prefix][wday]}`;
  
  }
else{
   dateLabel.text = `${date}${seperator}${m}${seperator}${util.weekday[prefix][wday]}`;
}

  if(charger.connected){
    hrLabel.text = timeLeft;
   }
   
}

  //start the hrmonitoring
hrm.onreading = function() {
      hrLabel.text = hrm.heartRate;    
}


bar.onreading = function() {
  
  
  let p = parseInt(bar.pressure);
  let equationTop = -7684*Math.pow(5,(1702/1051))*(Math.pow(3,(851/1051))*Math.pow(p,(200/1051))-3*Math.pow(5,(400/1051))*Math.pow(7,(200/1051))*Math.pow(193,(200/1051)));
  let equationBottom = 13*Math.pow(7,(200/1051))*Math.pow(193,(200/1051));
  
   if(miles){
     baroElement.text = ((equationTop/equationBottom)*3,28084).toFixed(0);
  }
   else{
      baroElement.text = (equationTop/equationBottom).toFixed(0);
     
   }
   
}

hrm.start();
bar.start();

