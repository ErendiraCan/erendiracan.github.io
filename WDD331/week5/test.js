//The URL of the JSON file like a const variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//Usign fetch to feed the argument 
fetch(requestURL)
      .then(function (response) {
        return response.json(); //This returns a Promise
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  //Temporary checking for valid response and data parsing: Check the console to see if it's working.
        const prophets = jsonObject['prophets'];
        
    
        for (let i = 0; i < prophets.length; i++) {

            //Creating the HTML elements
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            let image = document.createElement('img');

            //Adding data to the HTML elements
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthdate.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
            birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + (i + 1));

            //The appendChild() method: It appends the new items created to the HTML elements
            //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);

            //Calling the JS in the HTML
            document.querySelector('div.cards').appendChild(card);
        }
    });