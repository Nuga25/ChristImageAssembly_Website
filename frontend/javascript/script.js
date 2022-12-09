//activates hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', function mobileMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

//closes hamburger mnu when a link is clicked
const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n => n.addEventListener('click', function closeMenu(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
})) 