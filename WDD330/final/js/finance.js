//******************************************************************************************
// First I created a table using JS and then I use the API to fetch the data unto the table.
//******************************************************************************************

// API from https://rapidapi.com/finance.yahoo.api/api/yahoo-finance-low-latency/
fetch("https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/spark?symbols=AAPL%2CMSFT%2CCCL%2CLYB", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e1e88dc924msh54f2725da513ac6p16a161jsncf8c22a71a46",
		"x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com"
	}
})

.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

//for (let i = 0; i < jsObject.length; i++) {

// Getting the symbols
document.getElementById('appl').textContent = jsObject.AAPL.symbol;
document.getElementById('ccl').textContent = jsObject.CCL.symbol;
document.getElementById('lyb').textContent = jsObject.LYB.symbol;
document.getElementById('msft').textContent = jsObject.MSFT.symbol;

// Getting the open stock values
document.getElementById('applopen').textContent = jsObject.AAPL.close[50];
document.getElementById('cclopen').textContent = jsObject.CCL.close[50];
document.getElementById('lybopen').textContent = jsObject.LYB.close[50];
document.getElementById('msftopen').textContent = jsObject.MSFT.close[50];

// Getting the close stock values
document.getElementById('applclose').textContent = jsObject.AAPL.previousClose;
document.getElementById('cclclose').textContent = jsObject.CCL.previousClose;
document.getElementById('lybclose').textContent = jsObject.LYB.previousClose;
document.getElementById('msftclose').textContent = jsObject.MSFT.previousClose;

});

// Creating the table to store the API values

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('financeTable').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Markets";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Last";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Previous Last";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = `<span id="appl"></span>`;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = `<span id="applopen"></span>`;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = `<span id="applclose"></span>`;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = `<span id="ccl"></span>`;
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = `<span id="cclopen"></span>`;
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = `<span id="cclclose"></span>`;

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

// Creating and adding data to forth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = `<span id="lyb"></span>`;
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = `<span id="lybopen"></span>`;
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = `<span id="lybclose"></span>`;

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

// Creating and adding data to fiveth row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = `<span id="msft"></span>`;
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = `<span id="msftopen"></span>`;
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = `<span id="msftclose"></span>`;

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);