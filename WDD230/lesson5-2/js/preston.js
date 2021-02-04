//Weather site API with my Key
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';

//Usign fetch to feed the argument
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

//Calling the JS in the <span> tag in the HTML to print the current data
document.getElementById('description').textContent = jsObject.weather[0].description;
document.getElementById('temp').textContent = jsObject.main.temp;
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('speed').textContent = jsObject.wind.speed;

});
