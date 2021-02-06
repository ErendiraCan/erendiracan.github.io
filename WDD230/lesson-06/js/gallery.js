//Code based from the Brother's Blazzard demonstration video https://video.byui.edu/media/t/0_0tixbudg

//Get all images with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//Optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//First check to see if the intersection Observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
//Load all the images if not supported
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}