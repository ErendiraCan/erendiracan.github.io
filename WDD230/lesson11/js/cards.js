const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) { return response.json(); })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if(towns[i].name=="Preston"|| towns[i].name=="Fish Haven" || towns[i].name=="Soda Springs"){
            
            let card = document.createElement('section');
            let image = document.createElement('img');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');


            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);

            document.querySelector('div.cards').appendChild(card);
            }
        }
    });