gsap.to('.hero-left',{

})
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