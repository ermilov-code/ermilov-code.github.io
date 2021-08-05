// ============================================================


// burger-menu (jquery) =================
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button', '.burger-menu__lines');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        // remove scrolling in the menu:
        if (menu.hasClass('burger-menu_active') && ($(window).width() <= '576')) {
            $('body').addClass('modal-open');
        } else {
            $('body').removeClass('modal-open');
        }
    }
}

burgerMenu('.burger-menu');
// // / burger-menu (jquery) =================


// smooth scrolling =================
const anchors = document.querySelectorAll('a[href^="#"]')
// Loop through all links
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
// smooth scrolling =================



// UP button on the site =================

let btnUp = $('.up-button'); //создаем переменную для кнопки

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) { //отслеживаем высоту от верха страницы в 100px
        btnUp.addClass('up-button_show'); // присваиваем кнопке класс show для управления видимостью
    } else {
        btnUp.removeClass('up-button_show'); // если меньше 500px от верха страницы убираем класс show
    }
});

btnUp.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '500'); //при клике на кнопку плавно прокручиваем до верха body
});


// UP button on the site =================



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




// JS КОД для АНИМАЦИИ ПР СКРОЛЛЕ =============================
// ============================================================

// находим и объявляем в переменную все объекты которые будут поддаваться анимации
const animItems = document.querySelectorAll('._anim-items');

// проверяем - существуют ли такие классы 
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // общая задержка вызова функции 
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// JS КОД для АНИМАЦИИ ПР СКРОЛЛЕ =============================




















// ============================================================