var ball = document.getElementById("myDIV");

// Start the animation with JavaScript
function bounce() {
  ball.style.WebkitAnimation = "mymove 7s 2"; // Code for Chrome, Safari and Opera
  ball.style.animation = "mymove 7s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
ball.addEventListener("webkitAnimationStart", myStartFunction);
ball.addEventListener("webkitAnimationIteration", myRepeatFunction);
ball.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
ball.addEventListener("animationstart", myStartFunction);
ball.addEventListener("animationiteration", myRepeatFunction);
ball.addEventListener("animationend", myEndFunction);
