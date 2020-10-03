window.onload = function date () {
    document.getElementById("updated").innerHTML = document.lastModified;
    
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    }
    