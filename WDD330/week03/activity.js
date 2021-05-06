 
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
    //This is creating the titles of each column tr is the row and th is the column.
    let fieldRows = Object.keys(data[0]);
    let titleColumn = document.createElement("tr");
    fieldRows.forEach(function(field) {
      let titleRow = document.createElement("th");
      //AppendChild is to make all the elements created take their places inside of or after the new elements created
      titleRow.appendChild(document.createTextNode(field));
      titleColumn.appendChild(titleRow);
    });
    table.appendChild(titleColumn);
  
    //This creates the columns and rows for the string information.
    data.forEach(function(object) {
      let column = document.createElement("tr");
      fieldRows.forEach(function(field) {
        let infoRow = document.createElement("td");
        infoRow.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          infoRow.style.textAlign = "center";
        }
        column.appendChild(infoRow);
      });
      table.appendChild(column);
    });

    return table;
  }
  //This is to display the table in the HTML file
  document.querySelector("#tableOutput")
    .appendChild(createTable(MOUNTAINS));
