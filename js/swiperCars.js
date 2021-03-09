// 





const sliderCars = document.querySelector('.swiper-container-cars');

let mySwiperCars = new Swiper(sliderCars, {
    slidesPerView: 3,
    spaceBetween: 82,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination-cars',
        clickable: true,
        // type: 'fraction' 'progressbar', 
        type: 'fraction',
    },
    // autoplay: {
    //     delay: 2000,
    // },
    // // Скорость
    // speed: 1000,
    navigation: {
        nextEl: '.swiperCars-button-next',
        prevEl: '.swiperCars-button-prev',
    },
    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        325: {
            slidesPerView: 1.4,
            spaceBetween: 40,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        992: {
            slidesPerView: 3,
        }
    },
})