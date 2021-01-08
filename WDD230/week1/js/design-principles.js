window.onload = function date () {

//Getting the Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Getting the last modified date
document.getElementById("update").innerHTML = document.lastModified;

}