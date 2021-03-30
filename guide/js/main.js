// ============================================================

// появление элемента при скролле
window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.h2-heading-anim1', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['screenWidth', 'screenHeight/15', 0],
            ]
        }
    })

    lax.addElements('.card-benefit-anim2', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['screenWidth', 'screenHeight/25', 0],
            ]
        }
    })
}
// появление элемента при скролле

// эффект печати
new TypeIt("#elementSpan", {
    strings: "с активными ссылками",
    speed: 150,
    waitUntilVisible: true
}).go();
// эффект печати





// бургер меню
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.nav_item_burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// плавный якорь
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}




// https://computy.ru/blog/stilizacija-select-kak-budto-jeto-2019/
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
// https://computy.ru/blog/stilizacija-select-kak-budto-jeto-2019/



// КНОПКА ВВЕРХ НА САЙТЕ

let btnUp = $('#btnUp'); //создаем переменную для кнопки

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) { //отслеживаем высоту от верха страницы в 100px
        btnUp.addClass('show'); // присваиваем кнопке класс show для управления видимостью
    } else {
        btnUp.removeClass('show'); // если меньше 500px от верха страницы убираем класс show
    }
});

btnUp.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '500'); //при клике на кнопку плавно прокручиваем до верха body
});


// КНОПКА ВВЕРХ НА САЙТЕ