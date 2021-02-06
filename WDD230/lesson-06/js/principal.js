//--------------Message
const message = document.querySelector(".message");

//The day array number can be changed to test it (Sunday [0])
if (new Date().getDay() == 5) {
    message.style.display = "block";
};

//---------------Getting the current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);


//---------------Getting the Year
document.getElementById("currentyear").textContent = new Date().getFullYear();


//---------------Making the ham button works <<credits: https://codepen.io/blazzard-jason/pen/gmGxaj/>>
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//To solve the mid resizing issue with responsive class on (button section)
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//---------------Making the form range works
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}