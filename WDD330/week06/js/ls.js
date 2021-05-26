import newElement from './list'

var form = document.querySelector("#myDIV");
var list = document.querySelector("#myUL");

form.addEventListener("Add", formSubmitted);
loadList();

function formSubmitted(event) {
  event.preventDefault();
  
  // Assume that elsewhere we've defined the createItem function...
  input.value.split(",").forEach(newElement);

  form.reset();
  
  saveList();
}

function saveList() {
  // Get the HTML contents of the list...
  var html = list.innerHTML;
  
  // Write the HTML to local storage...
  localStorage.setItem("myInput", html);
}

function loadList() {
  // Read the saved HTML from local storage...
  var html = localStorage.getItem("myInput");
  
  // Set it to the list HTML...
  list.innerHTML = html;
}