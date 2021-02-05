//Selecting city
if (document.getElementById("preston")) {
    forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=49a941896ac322f17786b22ffb8b1fec&units=imperial';
}

//Usign fetch to feed the argument
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

const days = jsObject.list;
for (let i = 0; i < days.length; i++) {
//days[i].dt_txt == '2021-02' + new Date().getDay() + '18:00:00';

  //Creating the HTML elements
  let box = document.createElement('div');
  let day = document.createElement('span');
  let icon = document.createElement('img');
  let temp = document.createElement('span');

  //Adding data to the HTML elements
  day.textContent = new Date().toLocaleDateString('en-US', {weekday: 'long'});
  icon.setAttribute('src', 'https://openweathermap.org/img/wn/' + days[i].weather[0].icon + '@2x.png');
  icon.setAttribute('alt', 'Icon: ' + days[i].weather[0].description);
  temp.textContent = days[i].main.temp;

  //The appendChild() method: It appends the new items created to the HTML elements
  //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
  box.appendChild(day);
  box.appendChild(icon);
  box.appendChild(temp);

  //Calling the JS in the HTML
  document.querySelector('div.forecastbox').appendChild(box);
}

});