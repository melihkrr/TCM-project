    // Variable Declarations

    // Variables for Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slider-image");
    const dots = document.querySelectorAll(".dot");
    let autoSlideInterval;

    // Variables for current page
    var currentPage = window.location.href;
    var links = document.querySelectorAll(".navbar ul li a");

    // Slider js codes

    //Functions
    const showSlides = n => {
        slideIndex = (n + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
            dots[index].classList.toggle("active", index === slideIndex);
        });
    };

    const nextSlide = () => showSlides(slideIndex + 1);
    const startAutoSlide = () => autoSlideInterval = setInterval(nextSlide, 4000);
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    //Click Event
    dots.forEach((dot, i) => dot.addEventListener("click", () => {
        showSlides(i);
        resetAutoSlide();
    }));

    // Initial calls
    showSlides(slideIndex);
    startAutoSlide();

    
    // Current page js codes
    document.addEventListener("DOMContentLoaded", function() {
        links.forEach(function(link) {
            var linkUrl = link.getAttribute("href");

            if (currentPage.indexOf(linkUrl) !== -1) {
                link.style.color = "rgb(1, 20, 4)";
                link.style.fontWeight = "900";
            }
        });
    });