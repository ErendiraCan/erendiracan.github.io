const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var townName = "";
if (document.getElementById("preston")) {
    townName = "Preston";
} else if (document.getElementById("sodasprings")) {
    townName = "Soda Springs";
} else if (document.getElementById("fishhaven")) {
    townName = "Fish Haven";
}

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    
    .then(function (jsonObject) {
        let towns = jsonObject['towns'];
       
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == townName) {
            
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name + " Events:";
                card.appendChild(h2);
                document.querySelector('div.events').appendChild(card);

                for (let e = 0; e < towns[i].events.length; e++) {
                    
                    let p1 = document.createElement('p');
                    p1.textContent = towns[i].events[e];
                    card.appendChild(p1);
                }

            }
        }
    });