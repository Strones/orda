export const Conditions = {
  ClearSky        : 0,
  FewClouds       : 1,
  ScatteredClouds : 2,
  BrokenClouds    : 3,
  ShowerRain      : 4,
  Rain            : 5,
  Thunderstorm    : 6,
  Snow            : 7,
  Mist            : 8,
  Unknown         : 1000,
};

export const mapping_codes = {
    200 : Conditions.Thunderstorm,
    201 : Conditions.Thunderstorm,
    202 : Conditions.Thunderstorm,
    210 : Conditions.Thunderstorm,
    211 : Conditions.Thunderstorm,
    212 : Conditions.Thunderstorm,
    221 : Conditions.Thunderstorm,
    230 : Conditions.Thunderstorm,
    231 : Conditions.Thunderstorm,
    232 : Conditions.Thunderstorm,

    300: Conditions.Snow,
    301: Conditions.Snow,
    302: Conditions.Snow,
    310: Conditions.Snow,
    311: Conditions.Snow,
    312: Conditions.Snow,
    313: Conditions.Snow,
    314: Conditions.Snow,
    321: Conditions.Snow,

    500: Conditions.Rain,
    501: Conditions.Rain,
    502: Conditions.Rain,
    503: Conditions.Rain,
    504: Conditions.Rain,
    511: Conditions.Rain,
    520: Conditions.ShowerRain,
    521: Conditions.ShowerRain,
    522: Conditions.ShowerRain,
    531: Conditions.ShowerRain,

    600: Conditions.Snow,
    601: Conditions.Snow,
    602: Conditions.Snow,
    611: Conditions.Snow,
    612: Conditions.Snow,
    615: Conditions.Snow,
    616: Conditions.Snow,
    620: Conditions.Snow,
    621: Conditions.Snow,
    622: Conditions.Snow,

    701: Conditions.Mist,
    711: Conditions.Mist,
    721: Conditions.Mist,
    731: Conditions.Mist,
    741: Conditions.Mist,
    // 751: ,
    // 761: ,
    // 762: ,
    // 771: ,
    // 781: ,

    800: Conditions.ClearSky,

    801: Conditions.FewClouds,
    802: Conditions.ScatteredClouds,
    803: Conditions.BrokenClouds,
    804: Conditions.BrokenClouds
  };

export var WEATHER_MESSAGE_KEY = "MY_AWESOME_WEATHER_MESSAGE";
export var API_KEY = "30e538c070a8907d0ea7545a7fc75fdc";