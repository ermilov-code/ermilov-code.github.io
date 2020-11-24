// ============================================================


// скрипт для scroll-а текущего блока

let hiddenElement = document.getElementById("box-section-service");
let btn = document.querySelector('.arrow-svg');

function handleButtonClick() {
    hiddenElement.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

btn.addEventListener('click', handleButtonClick);

// КОНЕЦ скриптА для scroll-а текущего блока







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





// https://github.com/nolimits4web/Swiper/blob/master/demos/290-dynamic-slides.html

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// https://github.com/nolimits4web/Swiper/blob/master/demos/290-dynamic-slides.html































// ============================================================