//Weather site API with my Key
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';

//Usign fetch to feed the argument
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


});