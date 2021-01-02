// Message
const d = new Date();
let message = document.querySelector(".message");

if (d.getDay() == 5) {
    message.style.display = "block";
};

// Hamburger Button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

//Web Font Loader
WebFont.load({ google: {families: ['Oswald', 'Montserrat', ]}});