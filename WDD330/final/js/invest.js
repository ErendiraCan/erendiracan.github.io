//The URL of the JSON file like a const variable
const requestURL = 'https://erendiracan.github.io//WDD330/final/data/finances.json';

//Usign fetch to feed the argument 
fetch(requestURL)
      .then(function (response) {
        return response.json(); //This returns a Promise
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  //Temporary checking for valid response and data parsing: Check the console to see if it's working.
        const investments = jsonObject['investments'];

        for (let i = 0; i < investments.length; i++) {

    //Creating the HTML elements
    let box = document.createElement('tr');
    let name = document.createElement('td');
    let desc = document.createElement('td');
    let link = document.createElement('td');

    //Adding data to the HTML elements
    name.textContent = investments[i].investType;
    desc.textContent = investments[i].description;
    link.innerHTML = `<a href="${investments[i].url}">${investments[i].link}</a>`;


    //The appendChild() method: It appends the new items created to the HTML elements
    //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
    box.appendChild(name);
    box.appendChild(desc);
    box.appendChild(link);

    //Calling the JS in the HTML
    document.querySelector('.invest-table').appendChild(box);
    }
});