const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const close = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

