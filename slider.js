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

//Function calling a calculation that calculates the height of the tallest slide
calculateTallestSlide();


//Button Event Listeners Go Here
document.getElementById('next').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor < slideCount - 1){
        moveSlides('forward');
        cursor++;
    };
});
document.getElementById('prev').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor > 0){
        moveSlides('backward');
        cursor--;
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

//Calculates the positioning of slides when they will be moving
function moveSlides(direction){
    for (var i = 0; i < slides.length; i++){
        if(direction == 'backward'){
            slides[i].style.left = +slides[i].style.left.replace(/[^-\d\.]/g, '') + slideWidth + 'px';
        } else if (direction == 'forward'){
            slides[i].style.left = +slides[i].style.left.replace(/[^-\d\.]/g, '') - slideWidth + 'px';
        };
    };
};

//Function calculating the height of the tallest slide
function calculateTallestSlide(){
    for (var i = 0; i < slideCount; i++){
        if (slides[i].offsetWidth > topHeight){
            topHeight = slides[i].offsetHeight;
        };
    };

    slider.style.height = topHeight + 'px';
};
