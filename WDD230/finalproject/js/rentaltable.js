//The URL of the JSON file like a const variable
const requestURL = 'https://erendiracan.github.io//WDD230/finalproject/data/rental.json';

//Usign fetch to feed the argument 
fetch(requestURL)
      .then(function (response) {
        return response.json(); //This returns a Promise
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  //Temporary checking for valid response and data parsing: Check the console to see if it's working.
        const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++) {

    //Creating the HTML elements
    let box = document.createElement('tr');
    let vehicle = document.createElement('td');
    let persons = document.createElement('td');
    let half = document.createElement('td');
    let full = document.createElement('td');
    let half1 = document.createElement('td');
    let full1 = document.createElement('td');

    //Adding data to the HTML elements
    vehicle.textContent = rentals[i].rentalType;
    persons.textContent = rentals[i].MaxPersons;
    half.textContent = '$' + rentals[i].reservation.halfDay;
    full.textContent = '$' + rentals[i].reservation.fullDay;
    half1.textContent = '$' + rentals[i].walkIn.halfDay;
    full1.textContent = '$' + rentals[i].walkIn.fullDay;


    //The appendChild() method: It appends the new items created to the HTML elements
    //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
    box.appendChild(vehicle);
    box.appendChild(persons);
    box.appendChild(half);
    box.appendChild(full);
    box.appendChild(half1);
    box.appendChild(full1);

    //Calling the JS in the HTML
    document.querySelector('.rentalTable').appendChild(box);
    }
});