// Menu Bar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// Menu Bar


// window scrolling (Hide Navbar)
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// window scrolling (Hide Navbar)