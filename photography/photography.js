const threeSisters = document.querySelector('#threeSisters');
const morraine = document.querySelector('#morraine');
const cabin = document.querySelector('#cabin');
const plane = document.querySelector('#plane');
const grandCanyon = document.querySelector('#grandCanyon');
const brokenDown = document.querySelector('#brokenDown');
const coldWater = document.querySelector('#coldWater');
const gatineau = document.querySelector('#gatineau');
const fogValley = document.querySelector('#fogValley');


const photoLightbox = document.querySelector('#photoLightbox');
const closeBox = document.querySelector('#closeBox');
const imageDisplay = document.querySelector('#bigPhoto');

threeSisters.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/threesisters.jpg";
});

morraine.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/Morraine.jpg";
});

cabin.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/cabin.jpg";
});

plane.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/landing.jpg";
});

grandCanyon.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/grandcanyon.jpg";
});

brokenDown.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/brokendown.jpg";
});

coldWater.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/coldwater.jpg";
});

gatineau.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/gatineau.jpg";
});

fogValley.addEventListener('click', e => {
    photoLightbox.style.display = 'block';
    imageDisplay.src="photos/foginthevalley.jpg";
});

closeBox.addEventListener('click', e => {
    photoLightbox.style.display = 'none';
});