// Getting Wind Chill >>Based on this code: https://codepen.io/mintnerknown/pen/aQbORY

// 1 Getting the variables values: Input
var temp = document.getElementById("temp").innerHTML;
console.log(temp);
var windspeed = document.getElementById("speed").innerHTML;
console.log(windspeed);

// 2 Formula to calculate the wind chill
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

// 3 Round the output value
var windChill= Math.round(windChill);

// 4 Input requirements: Windchill temperature is below 50 °F and wind speeds above 3.0 mph
if (temp <= 50 && windSpeed >= 3) {
    document.getElementById("windchill").innerHTML = windChill;
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}