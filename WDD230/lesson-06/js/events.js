//The URL of the JSON file like a const variable
const eventstURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Defining each city variable name
if (document.getElementById("preston")) {
    townName = "Preston";
} else if (document.getElementById("sodasprings")) {
    townName = "Soda Springs";
} else if (document.getElementById("fishhaven")) {
    townName = "Fish Haven";
}

//Usign fetch to feed the argument
fetch(eventstURL)
      .then(function (response) {
        return response.json(); //This returns a Promise
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  //Temporary checking for valid response and data parsing: Check the console to see if it's working.
        const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++){
        if (towns[i].name == townName) { //Looking for each city events

        //Creating the HTML elements
        let boxevent = document.createElement('section');
        let h3 = document.createElement('h3');

        //Adding data to the HTML elements
        h3.textContent = towns[i].name + " Events:";

        //The appendChild() method: It appends the new items created to the HTML elements
        //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
        boxevent.appendChild(h3);

        //Creating the loop for the Events array
        for (let e = 0; e < towns[i].events.length; e++) {
        let p = document.createElement('p');
        p.textContent = towns[i].events[e];
        boxevent.appendChild(p);
        }

        //Calling the JS in the HTML
        document.querySelector('div.events').appendChild(boxevent);
        }
    }
});