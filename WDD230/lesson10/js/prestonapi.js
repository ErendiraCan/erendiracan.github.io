const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = jsObject.main.temp;
    const desc = jsObject.weather[0].description;  // note how we reference the weather array

    document.getElementById('current-temp').textContent = temp;
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeedMPH').textContent = jsObject.wind.speed;
    
});
