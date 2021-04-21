const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

var list = document.getElementsByTagName('ol');
  
// Create a list item for each wizard
// and append it to the list
  links.forEach(function (link) {
	var li = document.createElement('li');
	li.textContent = link;
	list.appendChild(li);
});

// Log
console.log(list);

// Inject into the DOM
var app = document.querySelector('#weeklink');
app.appendChild(list);

