//Declared variables for creating slider
var slides = document.getElementsByClassName('slide'),
slider = document.getElementById('slider'),
cursor = 0,
slideWidth = 0,
topHeight = 0,
slideCount = slides.length;

//Defining slide width
if (slideCount > 0){
    slideWidth = slides[0].offsetWidth;
};

//Defining slide positioning
for (var i = 0; i < slideCount; i++){
    slides[i].style.left = slideWidth * i + 'px';
};
// Function to initialize the slider
function initializeSlider() {
    calculateTallestSlide();
}

// Attach load event to each image
var images = document.querySelectorAll('.slide img');
var imagesLoaded = 0;

images.forEach(function(image) {
    image.addEventListener('load', function() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            initializeSlider();
        }
    });
});

// Call initializeSlider on window load as a fallback
window.addEventListener('load', initializeSlider);

//Button Event Listeners Go Here
document.getElementById('next').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor < slideCount - 1){
        moveSlides('forward');
        cursor++;
    } else {
        moveSlides('go to beginning');
        cursor = 0;
    };
});
document.getElementById('prev').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor > 0){
        moveSlides('backward');
        cursor--;
    } else {
        moveSlides('go to end');
        cursor = slideCount - 1;
    };
});

//END Button Event Listeners

//Recalculates size based on the window resizing
window.addEventListener('resize', function(){
    slideWidth = slides[0].offsetWidth;

    for (i = 0; i < slides.length; i++){
        if(i <= cursor){
            slides[i].style.left = '-' + slideWidth * (cursor - i) + 'px';
        } else if (i > cursor){
            slides[i].style.left = slideWidth * (i - cursor) + 'px';
        };
    };
//Recalculating the height of the tallest size for screen resize
calculateTallestSlide();
});

// Calculates the positioning of slides when they will be moving
function moveSlides(direction) {
    for (var i = 0; i < slides.length; i++) {
        if (direction === 'backward') {
            slides[i].style.left = (+slides[i].style.left.replace(/[^-\d\.]/g, '') + slideWidth) + 'px';
        } else if (direction === 'forward') {
            slides[i].style.left = (+slides[i].style.left.replace(/[^-\d\.]/g, '') - slideWidth) + 'px';
        } else if (direction === 'go to beginning') {
            slides[i].style.left = (i * slideWidth) + 'px'; // Reset to original positions
        } else if (direction === 'go to end') {
            slides[i].style.left = ((i - (slideCount - 1)) * slideWidth) + 'px'; // Move to end positions
        };
    };
};

// Function calculating the height of the tallest slide
function calculateTallestSlide() {
    topHeight = 0; // Reset topHeight before calculation
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    slider.style.height = topHeight + 'px';
}
