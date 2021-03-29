"use strict";

// ============================================================
$('.part').click(function () {
  $('.description').html($(this).attr('description-data'));
  $('.description').fadeIn(500);
});
$('.description').click(function () {
  $('.description').fadeOut(500);
});
$('.button-cities').click(function () {
  $('.description').html($(this).attr('description-data'));
  $('.description').fadeIn(500);
});
$(function () {
  $('#input-city-search').on('change', function () {
    var val = $('#input-city-search').val();
    var data_id = $('#accessible-cities').find('option[value="' + val + '"]').data('id');
    alert(data_id);
  });
}); // ИНТЕРАКТИВНАЯ карта
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
}); // плавный якорь
// Найти все ссылки начинающиеся на #

var anchors = document.querySelectorAll('a[href^="#"]'); // Цикл по всем ссылкам

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)

      var _goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'; // Плавная прокрутка до элемента с id = href у ссылки


      document.querySelector(_goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } // https://computy.ru/blog/stilizacija-select-kak-budto-jeto-2019/

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

$('.select').each(function () {
  var _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 


  _this.hide();

  _this.wrap('<div class="select"></div>');

  $('<div>', {
    "class": 'new-select',
    text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  var selectHead = _this.next('.new-select');

  $('<div>', {
    "class": 'new-select__list'
  }).insertAfter(selectHead);
  var selectList = selectHead.next('.new-select__list');

  for (var i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      "class": 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
  }

  var selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);
      selectItem.on('click', function () {
        var chooseItem = $(this).data('value');
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
}); // https://computy.ru/blog/stilizacija-select-kak-budto-jeto-2019/
// КНОПКА ВВЕРХ НА САЙТЕ

var btnUp = $('#btnUp'); //создаем переменную для кнопки

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    //отслеживаем высоту от верха страницы в 100px
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
}); // КНОПКА ВВЕРХ НА САЙТЕ