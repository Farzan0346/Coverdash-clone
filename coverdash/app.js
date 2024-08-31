
let btn = document.getElementById('barBtn');
let nav = document.getElementById('sideBar');
let icon = document.getElementById('icon');
let body = document.querySelector('body');
btn.addEventListener('click', () => {
  nav.classList.toggle('show');
if(icon){
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}
});
//close sidebar  menu  on click on body

body.addEventListener('click', (e) => {
  if (e.target.id !== 'barBtn' && e.target.id !== 'icon' && nav.classList.contains('show')) {
    nav.classList.remove('show');
    if(icon){
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
});
// Image Slider
let sliderWrapper = document.getElementById('slider-wrapper');
let sliderItems = document.querySelectorAll('#slider-wrapper .slider-item');
let totalSliderItems = sliderItems.length;
sliderItems.forEach((slideritem)=>{
  slideritem.style.width = 100 / totalSliderItems + '%';
});
sliderWrapper.style.width = totalSliderItems * 100 +'%';
let slide = 0;
let transformValue = 100 / totalSliderItems;
setInterval(()=>{
  slide -= transformValue;
    if (Math.abs(slide) >= 100) {
      slide = 0;  // Reset to the first slide
    }
  sliderWrapper.style.transform = `translateX(${slide}%)`;
},3000);



let itemSliderWrappers = document.querySelectorAll('#item-slider-wrapper');

itemSliderWrappers.forEach((wrapper) => {
  let sliderContainer = wrapper.parentElement;
  let dots = sliderContainer.querySelectorAll('.slider-controls .dot');
  let itemSliderItems = wrapper.querySelectorAll('.item-slider-item');
  let itemTotalSliderItems = itemSliderItems.length;
  itemSliderItems.forEach(item => {
    item.style.width = 100 / itemTotalSliderItems + '%';
  });
  wrapper.style.width = itemTotalSliderItems * 100 +'%';

  dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
      handleDotClick(event, dots, wrapper, itemTotalSliderItems);
    });
  });
});

function handleDotClick(event, dots, itemSliderWrapper, itemTotalSliderItems) {
    let dotIndex = Array.from(dots).indexOf(event.target);
    dots.forEach(dot => dot.classList.remove('active'));
    event.target.classList.add('active');
    let transformValue = -dotIndex * (100 / itemTotalSliderItems);
    itemSliderWrapper.style.transform = `translateX(${transformValue}%)`;
}


function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); 
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, {
  root: null, 
  rootMargin: '0px',
  threshold: 0.1 
});

const targetElement = document.querySelectorAll('.animated');
  targetElement.forEach((element)=>{
  observer.observe(element);
});

