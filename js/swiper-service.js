const sliders2 = document.querySelectorAll('.swiper-container-service');


sliders2.forEach((el) => {
    let mySwiperService = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: el.querySelector('.swiper-pagination-sService'),
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.swiper-button-next-sService',
        //     prevEl: '.swiper-button-prev-sService',
        // },
        // autoplay: {
        //     delay: 1000,
        // },
        // // Скорость
        // speed: 1000,


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
        spaceBetween: 50,

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
        observeSlideChildren: true,

    })

});