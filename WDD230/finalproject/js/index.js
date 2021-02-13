//---------------Making the ham button works <<credits: https://codepen.io/blazzard-jason/pen/gmGxaj/>>
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//To solve the mid resizing issue with responsive class on (button section)
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//---------------Getting the Year
document.getElementById("currentyear").textContent = new Date().getFullYear();