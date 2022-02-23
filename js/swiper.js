// Инициализируем Swiper

const sliderReviews = document.querySelector('.swiper-reviews-container');

let myImageSliderReviews = new Swiper(sliderReviews, {
    // Стрелки
    navigation: {
        nextEl: '.swiper-reviews-navigation__button-next',
        prevEl: '.swiper-reviews-navigation__button-prev'
    },
    // Навигация 
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-reviews-pagination',

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


    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 1,

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

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        200: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        576: {
            slidesPerView: 1.7,
            spaceBetween: 30,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 1.7,
            spaceBetween: 30,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
        },
        // 1200: {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        // },
        // 1400: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        // }
    },

    /*
    // Брейк поинты (адаптив)
    // Соотношение сторон
    breakpoints: {
        '@0.75': {
            slidesPerView: 1,
        },
        '@1.00': {
            slidesPerView: 2,
        },
        '@1.50': {
            slidesPerView: 3,
        }
    },
    */

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







// Инициализируем Swiper