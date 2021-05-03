navSlide = () => {

    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");


    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('cross');
    });




}

navSlide();
const burGer = document.querySelector(".burger");
const navb = document.querySelector(".navbar");
const navs = document.querySelector(".nav-links");
window.onscroll = function () {

    let top = window.scrollY;

    if (top >= 100) {
        navb.classList.add('nav-color');
        burGer.classList.remove('cross');
        navs.classList.remove('show');

    } else {
        navb.classList.remove('nav-color');
    }
}

rotateImg = () => {

    const btn = document.querySelector(".cta");
    const heroImg = document.querySelector(".hero-img");


    btn.addEventListener('mouseover', () => {
        heroImg.classList.toggle('rotate');
    });



}

rotateImg();
