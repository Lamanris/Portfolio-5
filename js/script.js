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

