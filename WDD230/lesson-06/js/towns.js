//The URL of the JSON file like a const variable
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Usign fetch to feed the argument 
fetch(requestURL)
      .then(function (response) {
        return response.json(); //This returns a Promise
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  //Temporary checking for valid response and data parsing: Check the console to see if it's working.
        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length; i++) {
            if(i == 1||i == 5|| i == 6){ //Looking for indexes [1],[5],[6] in the array
            
            //Creating the HTML elements
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            //Adding data to the HTML elements
            card.id = towns[i].photo.replace(".jpg","");
            h3.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            //The appendChild() method: It appends the new items created to the HTML elements
            //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);

            //Calling the JS in the HTML
            document.querySelector('div.towncard').appendChild(card);
            }
        }
    });