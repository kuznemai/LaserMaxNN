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


