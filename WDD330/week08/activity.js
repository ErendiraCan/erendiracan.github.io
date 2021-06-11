console.log("It's working!")

let previousUrl = 'https://swapi.dev/api/people/'
let nextUrl = ''

function getNext() {
    getData(nextUrl)
}

function getPrev() {
    getData(previousUrl)
}

function getData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        nextUrl = data.next
        previousUrl = data.previous
        let table = document.getElementById('star-wars-people');
        table.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Eye Color</th>
        </tr>`
        data.results.forEach(person => {
            let row = document.createElement('tr')
            let name = document.createElement('td')
            let height = document.createElement('td')
            let eye = document.createElement('td')
            name.innerText = person.name;
            height.innerText = person.height;
            eye.innerText = person.eye_color;
            row.appendChild(name);
            row.appendChild(height);
            row.appendChild(eye);
            table.appendChild(row);
        })
    })
    .catch(err => console.error('There seems to be something wrong with the link: ', err));
}

getData(previousUrl);