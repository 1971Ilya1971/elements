const burger = document.querySelector('.burger');
const span = burger.querySelector('.burger span');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    span.classList.toggle('active');
    menu.classList.toggle('animate');
});