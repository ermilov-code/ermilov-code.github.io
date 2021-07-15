"use strict";

(function ($) {
  $(".contact-form").submit(function (event) {
    event.preventDefault(); // Сохраняем в переменную form id текущей формы, на которой сработало событие submit

    var form = $('#' + $(this).attr('id'))[0]; // Сохраняем в переменную класс с параграфом для вывода сообщений

    var message = $(this).find(".contact-form__message");
    var fd = new FormData(form);
    $.ajax({
      url: "/telegramform/php/send-message-to-telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        var respond = $.parseJSON(res);

        if (respond.err) {
          message.html(respond.err).css({
            'color': '#EE5252'
          }); // document.getElementById('form-contact').reset();
        } else if (respond.okSend) {
          message.html(respond.okSend).css({
            'color': '#333333'
          });
          document.getElementById('form-contact').reset();
        } else {
          alert('Необработанная ошибка. Проверьте консоль и устраните.');
          document.getElementById('form-contact').reset();
        }
      }
    });
  });
})(jQuery);