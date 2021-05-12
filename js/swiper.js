// Инициализируем Swiper

const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');



let mySwiper = new Swiper(slider, {
    slidesPerView: 0.6,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-navigation__button-next',
        prevEl: '.swiper-navigation__button-prev',
    },
    // Бесконечный слайдер
    loop: true,

    // // Количество пролистываемых слайдов
    // slidesPerGroup: 1,

    // // Активный слайд по центру
    // centeredSlides: true,

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        200: {
            // slidesPerView: 1,
            spaceBetween: 20,
        },
        300: {
            // slidesPerView: 1.5,
            spaceBetween: 20,

        },
        325: {
            // slidesPerView: 1.5,
            spaceBetween: 20,

        },
        480: {
            // slidesPerView: 2.5,
            spaceBetween: 25,
        },
        992: {
            spaceBetween: 30,
        }
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },



    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 1,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 40,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: true,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: false,


    // Скорость
    speed: 800,

    // Вертикальный слайдер
    direction: 'horizontal',

    // Эффекты переключения слайдов.
    // Листание
    // effect: 'fade',

    // // Эффекты переключения слайдов.
    // // Листание
    // effect: 'slide',

    effect: 'flip',
    fadeEffect: {
        crossFade: true,
    },

    // Отключить предзагрузка картинок
    preloadImages: false,
    // Lazy Loading
    // (подгрузка картинок)
    lazy: {
        // Подгружать на старте
        // переключения слайда
        loadOnTransitionStart: false,
        // Подгрузить предыдущую
        // и следующую картинки
        loadPrevNext: false,
    },
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,

    // Обновить свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

});

let mySwiper1 = new Swiper(slider1, {

    // Стрелки
    navigation: {
        nextEl: '.swiper-nav__btn-next_section-reviews',
        prevEl: '.swiper-nav__btn-prev_section-reviews'
    },
    // Навигация 
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination_reviews',

    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: false,
    },

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        200: {
            // slidesPerView: 1,
            spaceBetween: 12,
        },
        300: {
            // slidesPerView: 1.5,
            spaceBetween: 12,

        },
        325: {
            // slidesPerView: 1.5,
            spaceBetween: 12,

        },
        480: {
            // slidesPerView: 2.5,
            spaceBetween: 25,
        },
        992: {
            spaceBetween: 65,
        }
    },


    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 'auto',

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 20,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: true,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: false,

    // Скорость
    speed: 800,

    // Вертикальный слайдер
    direction: 'horizontal',


    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',

    // Отключить предзагрузка картинок
    preloadImages: false,
    // Lazy Loading
    // (подгрузка картинок)
    lazy: {
        // Подгружать на старте
        // переключения слайда
        loadOnTransitionStart: false,
        // Подгрузить предыдущую
        // и следующую картинки
        loadPrevNext: false,
    },
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,



    // Обновить свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true

})