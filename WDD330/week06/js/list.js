const todoList = document.querySelector("myDIV");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    newElement(task);
  });
}
// Adding task to local storage
todoList.addEventListener("click", function(e) {
  e.preventDefault();
  const input = this.name;
  const inputValue = input.value;

  if (inputValue != "") {
    const task = {
      id: new Date().getTime(),
      name: inputValue
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    newElement(task);
    todoList.reset();
  }
  input.focus();
});


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Filtering the tasks
function all() {
  inputValue = document.getElementById("myInput").value;
  var task = document.createTextNode(inputValue);
  for(let i = 1; i<task.length; i++ ) {
    task[i].style.display = "flex";
  }
}

function active() {
  inputValue = document.getElementById("myInput").value;
  var task = document.createTextNode(inputValue);
  for(let i = 1; i<task.length; i++ ) {
    if (!task[i].classList.contains('checked')) {
      task[i].style.display = "flex";
  } else {
      task[i].style.display = "none";
    }
  }
}

function complete() {
  inputValue = document.getElementById("myInput").value;
  var task = document.createTextNode(inputValue);
  for(let i = 0; i<task.length; i++ ) {
    if (task[i].classList.contains('checked')) {
      task[i].style.display = "flex";
  } else {
      task[i].style.display = "none";
    }
  }
}
