window.onload = getWindChill();
 function getWindChill() {
    let temp = parseFloat( document.getElementById('current-temp').textContent);
    let windSpeedMPH = parseFloat(document.getElementById('windSpeedMPH').textContent);
    let windChill = document.getElementById("wind-chill").innerHTML = "";

    if ((temp <= 50) && (windSpeedMPH > 3.0)) {
        windChill = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windSpeedMPH, 0.16))) + (0.4275 * temp * (Math.pow(windSpeedMPH, 0.16)))).toFixed(0);
       let windChill = document.getElementById('wind-chill').innerHTML = windChill + "&#176; F";
    } 
    else {
        let windChill = document.getElementById("wind-chill").innerHTML = "N/A" ;
    }
}

var temp= document.getElementById("current-temp").textContent;
var speed= document.getElementById("windSpeedMPH").textContent;
function windChill(temp,speed) {
  if((temp<=60) && (speed>=0)){
    var output = Math.round((35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(speed,0.16))) + (0.4275 * (temp*(Math.pow(speed,0.16))))) + " F";
  } else{
    var output = "N/A";
  }
  return output;
}
document.getElementById("wind-chill").textContent = windChill(temp,speed);