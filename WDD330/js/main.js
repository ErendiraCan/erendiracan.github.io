//Week links array
const links = [
    {
      label: "Week1: Notes",
      url: "week1/index.html"
    },
    {
      label: "Week2: Notes",
      url: "week02/index.html"
    },
    {
      label: "Week3: Notes and code",
      url: "week03/index.html"
    },
    {
      label: "Week4: Notes and code",
      url: "week04/index.html"
    },
    {
      label: "Week5: Notes and code",
      url: "week05/index.html"
    },
    {
      label: "Week6: Challenge One - Todo",
      url: "week06/index.html"
    },
    {
      label: "Week7: Notes and Codes",
      url: "week07/index.html"
    },
    {
      label: "Week8: Notes and Codes",
      url: "week08/index.html"
    },
    {
      label: "Week9: Notes and Codes",
      url: "week09/index.html"
    },
    {
      label: "Week10: Notes and Codes",
      url: "week10/index.html"
    }
  ]
//Creating the ol tag element
var list = document.getElementsByTagName('ol');
  
//Creating the li and a elements
  links.forEach(function (link) {
	var li = document.createElement('li');
  var a = document.createElement('a');
  a.text = link.label;
  //In case we want to divide the link from the label text
	//li.textContent = link.label;
  a.href = link.url;
//Making the elements being created inside ol and a inside il
	list[0].appendChild(li);
  li.appendChild(a);
});

// Log
console.log(list);

// Inject into the DOM
//var app = document.querySelector('#weeklink');
//app.appendChild(list);

