// To graball the img elements
var allCarrots = document.querySelectorAll("#carrotsContainer img");

// Adding the event listener for the dragstart
var carrot = null;
for (var i=0; i < allCarrots.length; i++) {
    carrot = allCarrots[i];
    carrot.addEventListener('dragstart', function (event) {
 // handle the dragstart event
 });
}

// To store the ID of the images we are going to drag around
carrot.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", this.id);
});
    
// The dragover event:
var bunny = document.getElementById("bunny");
bunny.addEventListener("dragover", function(event) {
    event.preventDefault();
});

// What the bunny will say when a carrot is dropped on it
bunny.addEventListener("drop", function(event) {
    event.preventDefault();
    var bunnyHash = {
        carrot1: 'Yummy Yummy!',
        carrot2: 'Yummy in my tummy!',
        carrot3: 'Delicious!'
    };
    var bunnyHeading = document.getElementById('bunnyHeading');
    var bunnyID = event.dataTransfer.getData("text/plain");
    bunnyHeading.innerHTML = bunnyHash[bunnyID];
    var carrotEaten = document.getElementById("item");
    carrotEaten.parentNode.removeChild(carrotEaten);
})