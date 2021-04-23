const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

var list = document.getElementsByTagName('ol');
  
// and append it to the list
  links.forEach(function (link) {
	var li = document.createElement('li');
  var a = document.createElement('a');
  a.text = link.label;
	//li.textContent = link.label;
  a.href = link.url;
	list[0].appendChild(li);
  li.appendChild(a);
});

// Log
console.log(list);

// Inject into the DOM
//var app = document.querySelector('#weeklink');
//app.appendChild(list);

