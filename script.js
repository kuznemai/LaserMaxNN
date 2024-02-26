// Слайдер
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Auto Slide   if you need auto slide ,remove the commit "//"



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
//
}


// const initSlider = () => {
//     const imageList = document.querySelector(".image_list");
//     const slideButtons = document.querySelectorAll(".slide_button");
//     const sliderScrollbar = document.querySelector(".slider_scrollbar");
//     const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar_thumb");
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
//
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//                 const direction = button.id === "prev_slide" ? -1 : 1;
//                 const scrollAmount = imageList.clientWidth * direction;
//                 imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         });
//     });
//
//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//     }
//
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//         scrollbarThumb.style.left = `${thumbPosition}px`;
//     }
//
//     imageList.addEventListener("scroll", () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     })
// };
// window.addEventListener("load", initSlider);

// Аккордеон
function accordion(){
let accordionElems = document.getElementsByClassName("accordion");
let emptyArr ;
for(let i=0; i < accordionElems.length; i++){
    accordionElems[i].addEventListener('click', function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");


        let pannel = this.nextElementSibling;
        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        }else{
            pannel.style.display = "block";
        }
    });
}
}
accordion();



// Плавное появление элементов
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}
// Скролл по клику на пункт меню

function scrollToBlock(){
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors){
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}
scrollToBlock();