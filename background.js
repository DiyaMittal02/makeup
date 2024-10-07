// Function to toggle the display of a paragraph
function toggleParagraph() {
    const paragraph = document.getElementById('paragraph');
    const btn = document.querySelector('.read-more-btn');

    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
        btn.textContent = 'Read Less';
    } else {
        paragraph.style.display = 'none';
        btn.textContent = 'Read More';
    }
}

// Function to toggle the display of the service paragraph
function toggleServiceParagraph() {
    const serviceParagraph = document.getElementById('service-paragraph');
    const btn1 = document.querySelector('.service-more-btn');

    if (serviceParagraph.style.display === 'none' || serviceParagraph.style.display === '') {
        serviceParagraph.style.display = 'block';
        btn1.textContent = 'Show Less';
    } else {
        serviceParagraph.style.display = 'none';
        btn1.textContent = 'Read More';
    }
}

// Initialize Swiper for the customer review section
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    // Remove the 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and add 'active' class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
