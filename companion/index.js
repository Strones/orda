// Import the weather module
import Weather from '../common/weather/phone';
import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me } from "companion";

// Create the weather object
// this is always needed to answer the device's requests
let weather = new Weather();
let KEY_COLOR = "myColor";



// Settings have been changed
settingsStorage.onchange = function(evt) {
  sendValue(evt.key, evt.newValue);
}



// Settings were changed while the companion was not running
if (me.launchReasons.settingsChanged) {
  // Send the value of the setting
  sendValue(KEY_COLOR, settingsStorage.getItem(KEY_COLOR));
}




function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}




function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState ==  messaging.peerSocket.OPEN) {
    console.log("PeerSocket Connection active");
    messaging.peerSocket.send(data);
  } else {
    console.log("No peerSocket connection");
  }
}





