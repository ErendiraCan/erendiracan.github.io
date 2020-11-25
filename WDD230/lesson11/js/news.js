const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var townname = "";
if (document.getElementById("preston")) { townname = "Preston"; } 
else if (document.getElementById("sodasprings")) { townname = "Soda Springs"; } 
else if (document.getElementById("fishhaven")) { townname = "Fish Haven"; }

fetch(requestURL)
    .then(function (response) { return response.json(); })
    .then(function (jsonObject) { let towns = jsonObject['towns'];
       
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == townname) {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name + " Events:";
                card.appendChild(h2);
                document.querySelector('div.eventcard').appendChild(card);

                for (let e = 0; e < towns[i].events.length; e++) {
                    let p1 = document.createElement('p');
                    p1.textContent = towns[i].events[e];
                    card.appendChild(p1);
                }

            }
        }
    });