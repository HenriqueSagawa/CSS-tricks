const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const navItem = document.querySelectorAll('.nav-item');
let currentSlide = 0;

function atualizarSlide() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    navItem.forEach(item => {
        item.classList.remove('active');
    });

    navItem[currentSlide].classList.add('active');
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        atualizarSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        atualizarSlide();
    }
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    atualizarSlide();
}