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


let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}




document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const slideWidth = slides[0].clientWidth; // Умножаем на 3, так как теперь по 3 слайда на странице

    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;

        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        document.querySelector('.slider-dot.active').classList.remove('active');
        document.querySelectorAll('.slider-dot')[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});


// const slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector('.nextBtn');
// let counter = 0;
// const slideWidth = document.querySelector('.slide').clientWidth;
//
// nextBtn.addEventListener('click', () => {
//     if (counter >= 2) return;
//     counter++;
//     slider.style.transform = `translateX(${-counter * slideWidth}px)`;
// });
//
// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     counter--;
//     slider.style.transform = `translateX(${-counter * slideWidth}px)`;
// });


function openModal(imageUrl) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


