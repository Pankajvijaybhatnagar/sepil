let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function showNextSlide() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startCarousel() {
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', startCarousel);

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', showNextSlide);
