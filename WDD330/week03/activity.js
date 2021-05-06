 
  //This is the string (object)
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
 
  //This function creates a table and each element inside of it
  //The data inside the () is referring about the information in the object
  function createTable(data) {
    let table = document.createElement("table");
    //I understood the [0] is because is referring to an index in the object
    //And the method key is to grab or select the data type (information)
    let rows = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    //This is calling the function to create the 
    rows.forEach(function(field) {
      let headCell = document.createElement("th");
      //AppendChild is to make all the elements created take their places inside of or after the new elements created
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      let row = document.createElement("tr");
      rows.forEach(function(field) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.querySelector("#tableOutput")
    .appendChild(createTable(MOUNTAINS));
