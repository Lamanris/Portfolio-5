document.querySelector('.header__burger').addEventListener ('click', () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu-burger').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
});
document.querySelectorAll('.header__menu__item').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.header__menu-burger').classList.remove('active');
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    })
});
document.querySelector('.header__logo').addEventListener('click', () => {
    document.querySelector('.header__menu-burger').classList.remove('active');
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

let totalFillingName = document.querySelector('.totalFillingName');
let totalSizingAmount = document.querySelector('.totalSizingAmount');
let totalLookingName = document.querySelector('.totalLookingName');
let fillingBtn = document.querySelectorAll('.fillingBtn');
let sizingBtn = document.querySelectorAll('.sizingBtn');
let lookingBtn = document.querySelectorAll('.lookingBtn');
let swiperSizingSlide = document.querySelectorAll('.swiper-sizing-slide');
let swiperLookingSlide = document.querySelectorAll('.swiper-looking-slide');

fillingBtn.forEach((el) => {
    el.addEventListener('click', function () {
        let filling = el.closest(".swiper-filling-slide__textBox");
        totalFillingName.innerHTML = filling.querySelector('.fillingName').innerHTML
    })
});
const setActive = el => {
    [...el.parentElement.children].forEach(sib => sib.classList.remove('choosed'));
    el.classList.add('choosed')
};
swiperSizingSlide.forEach((el) => {
    el.addEventListener('click', function () {
        setActive(el);
        totalSizingAmount.innerHTML = el.querySelector('.swiper-sizing-slide__img-text').innerHTML
    })
});
swiperLookingSlide.forEach((el) => {
    el.addEventListener('click', function () {
        setActive(el);
        totalLookingName.innerHTML = el.querySelector('.swiper-looking-slide__textBox__title').innerHTML
    })
});
sizingBtn.forEach((el) => {
    el.addEventListener('click', function () {
        let sizing = el.closest(".sizingSwiper-container");
        totalSizingAmount.innerHTML = sizing.querySelector('.swiper-slide-active').querySelector('.swiper-sizing-slide__img-text').innerHTML
    })
});
lookingBtn.forEach((el) => {
    el.addEventListener('click', function () {
        let looking = el.closest(".lookingSwiper-container");
        totalLookingName.innerHTML = looking.querySelector('.swiper-slide-active').querySelector('.swiper-looking-slide__textBox__title').innerHTML
    })
});
