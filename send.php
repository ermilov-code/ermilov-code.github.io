<?php

// получим данные с элементов формы

$username = $_POST['username'];
$tel = $_POST['tel'];
$serviceSelection = $_POST['serviceSelection'];

// ОБРАБАТЫВАЕМ ПОЛУЧЕННЫЕ ДАННЫЕ

// преобразование символов в сущности (мнемоники)
$username = htmlspecialchars($username); 
$tel = htmlspecialchars($tel);
$serviceSelection = htmlspecialchars($serviceSelection);

// декодирование URL
$username = urldecode($username); 
$tel = urldecode($tel);
$serviceSelection = urldecode($serviceSelection);

// удаление пробельных символов с обоих сторон
$username = trim($username); 
$tel = trim($tel);
$serviceSelection = trim($serviceSelection);

// ОТПРАВЛЯЕМ ДАННЫЕ НА ПОЧТУ

if (mail("ermilov1994@yandex.ru",
		"Новое письмо с сайта otkachaem-septik.ru", 
		"Имя заказчика: ".$username."\n".
		"Телефон заказчика: ".$tel."\n".
		"Нужна услуга: ".$serviceSelection)
) {
	echo ('Письмо успешно отправлено!');
} else {
	echo ("Есть ошибки! Проверьте данные");
}


	
?>