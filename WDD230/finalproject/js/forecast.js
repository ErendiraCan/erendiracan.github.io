//Selecting city
forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';

//Usign fetch to feed the argument
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  if (jsObject.list[37].dt_txt.includes('12:00:00')){

    document.getElementById('day').textContent = new Date(jsObject.list[37].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
    document.getElementById('ftemp').textContent = jsObject.list[37].main.temp;
    document.getElementById('pic').setAttribute('src', 'https://openweathermap.org/img/wn/' + jsObject.list[37].weather[0].icon + '@2x.png');
    document.getElementById('pic').setAttribute('alt', 'Icon: ' + jsObject.list[37].weather[0].description);
}

});