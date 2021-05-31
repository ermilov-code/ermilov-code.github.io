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
        if (menu.hasClass('burger-menu_active') && ($(window).width() <= '767')) {
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



// код для Спойлер на HTML CSS 
$(document).ready(function () {
    $('.card-FAQ__title').click(function (event) {
        if ($('.card-FAQ').hasClass('one')) {
            $('.card-FAQ__title').not($(this)).removeClass('active');
            $('.card-FAQ__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
// код для Спойлер на HTML CSS 



// Отложенная загрузка видео с Youtube

// selector of all videos on the page
const videos = document.querySelectorAll('.video');

// generate video url
let generateUrl = function (id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function (id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
};

// main code
videos.forEach((el) => {
    let videoHref = el.getAttribute('data-video');

    let deletedLength = 'https://youtu.be/'.length;

    let videoId = videoHref.substring(deletedLength, videoHref.length);

    let img = el.querySelector('img');
    let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
    img.setAttribute('src', youtubeImgSrc);

    el.addEventListener('click', (e) => {
        e.preventDefault();

        let iframe = createIframe(videoId);
        el.querySelector('img').remove();
        el.appendChild(iframe);
        el.querySelector('button').remove();
    });
});


// Отложенная загрузка видео с Youtube

























// ============================================================