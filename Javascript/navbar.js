// untuk navbar hamburger button
// responsiv navbar
const hamburger = document.querySelector('.navbar-btn2');
const navMenu = document.querySelector('.navbar-menu');
const bars = document.querySelector('#mobile-menu')

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  bars.classList.toggle('active');
})