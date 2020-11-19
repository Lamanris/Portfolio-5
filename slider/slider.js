let fillingSwiper = new Swiper('.fillingSwiper-container', {
    loop: true,
    spaceBetween: 50,
    navigation: {
        nextEl:'.swiper-filling-button-next',
        prevEl:'.swiper-filling-button-prev',
    },
    pagination: {
        el: '.swiper-filling-pagination',
        type: 'fraction',
    },
});
if (screen.width <= 550) {
    let sizingSwiper = new Swiper('.sizingSwiper-container', {
        loop: true,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-sizing-pagination',
        },
    });
}
let lookingSwiper = new Swiper('.lookingSwiper-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl:'.swiper-looking-button-next',
        prevEl:'.swiper-looking-button-prev',
    },
    pagination: {
        el: '.swiper-looking-pagination',
        type: 'fraction',
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});
let reviewsSwiper = new Swiper('.reviewsSwiper-container', {
    loop: true,
    spaceBetween: 50,
    navigation: {
        nextEl:'.swiper-reviews-button-next',
        prevEl:'.swiper-reviews-button-prev',
    },
    pagination: {
        el: '.swiper-reviews-pagination',
        type: 'fraction',
    },
});




// $("#photoButton").on("click",function(){
//     setTimeout(function () {
//         photoSwiper1.update();
//     }, 1);
// });
// $("#videoButton").on("click",function(){
//     setTimeout(function () {
//         videoSwiper1.update();
//     }, 1);
// });
