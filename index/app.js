const carousel = document.querySelector('.carousel');
const carouselPhotos = document.querySelectorAll('.carousel__photo');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const navBar = document.querySelector('#navbar');

let counter = 0;
prevBtn.style.visibility = "hidden";

nextBtn.addEventListener('click', () => {
    if(counter === carouselPhotos.length - 1) {
        return;
    }
    if(counter === carouselPhotos.length - 2) {
        nextBtn.style.visibility = "hidden";
    }
    if(counter == 0) {
        prevBtn.style.visibility = "visible";
    }
    photoWidth = carouselPhotos[counter].clientWidth;
    counter++;
    console.log(counter);
    carousel.style.transform = 'translateX(' + (-photoWidth * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter === 0) {
        return;
    }
    if(counter === 1) {
        prevBtn.style.visibility = 'hidden';
    }
    if(nextBtn.style.visibility = 'hidden') {
        nextBtn.style.visibility = 'visible';
    }
    photoWidth = carouselPhotos[counter].clientWidth;
    counter--;
    console.log(counter);
    carousel.style.transform = 'translateX(-' + (photoWidth * counter) + 'px)';
});

window.addEventListener('resize', () => {
    carousel.style.transition = "transform 0s";
    photoWidth = carouselPhotos[counter].clientWidth;
    carousel.style.transform = 'translateX(-' + (photoWidth * counter) + 'px)';
    setTimeout(() => {
        carousel.style.transition = "transform 0.6s ease-in-out";    
    }, 100);
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let menuHeight = navBar.clientHeight;
console.log(navBar);
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = `-${menuHeight}`;
  }
  prevScrollpos = currentScrollPos;
}