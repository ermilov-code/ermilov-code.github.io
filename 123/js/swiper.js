// Инициализируем Swiper



var swiper = new Swiper('.swiper-brands', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    keyboard: true,
});

const slider1 = document.querySelector('.swiper-container1');

let mySwiper1 = new Swiper(slider1, {

    // Стрелки
    navigation: {
        nextEl: '.swiper-navigation__button-next-rev',
        prevEl: '.swiper-navigation__button-prev-rev'
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

var swiper3 = new Swiper('.swiper-price', {
    pagination: {
        el: '.swiper-pagination-price',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next-price',
        prevEl: '.swiper-button-prev-price',
    },
});


let swiper6 = new Swiper('.swiper-apple-pay', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next-apple',
        prevEl: '.swiper-button-prev-apple',
    },
    pagination: {
        el: '.swiper-pagination-apple-pay'
    },
    // mousewheel: false,
    // keyboard: true,
});


// Инициализируем Swiper