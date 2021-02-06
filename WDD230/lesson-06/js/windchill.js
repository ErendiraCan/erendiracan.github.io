// Getting Wind Chill >>Based on this code: https://codepen.io/mintnerknown/pen/aQbORY

function getWindChill() {
    // 1 Getting the variables values: Input
    var temp = document.getElementById("temp").textContent;
    var windspeed = document.getElementById("speed").textContent;
    
    // 2 Formula to calculate the wind chill
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));
    
    // 3 Round the output value
    var windChill= Math.round(windChill);
    
    // 4 Input requirements: Windchill temperature is below 50 °F and wind speeds above 3.0 mph
    if (temp <= 50 && windspeed >= 3) {
        document.getElementById("windChill").textContent = windChill;
    } else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
    }