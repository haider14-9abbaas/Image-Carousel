let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "flex"; // Display as flex to center images
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
});
