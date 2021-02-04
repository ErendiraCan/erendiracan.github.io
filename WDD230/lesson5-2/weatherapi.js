//Weather site API with my Key
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';

//Usign fetch to feed the argument
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

//Calling the JS in the <span> tag in the HTML to print the current temp
document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});
