"use strict"

// // убираем pop-up_window при нажатии на крестик
// document.querySelector('.div-cross').addEventListener('click', () => {
// 	document.querySelector('.pop-up_window').classList.toggle('pop-up_window-none')
// })
// document.querySelector('.div-cross').addEventListener('click', () => {
// 	document.querySelector('.pop-up_window').classList.toggle('pop-up_window-none')
// })

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);



	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				// alert(result.message);
				document.querySelector('.pop-up_window').classList.add('pop-up_window-block')
				// formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}



	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
		document.querySelector('[name="user_name"]').placeholder = 'Нужный текст';
	}

	// function formAddErrorP() {
	// 	document.querySelector('.p-input-text-error').classList.add('display-block');
	// }

	// function formAddErrorPdel() {
	// 	document.querySelector('.p-input-text-error').classList.remove('display-block');
	// }

	// document.querySelector('.p-input-text-error').classList.add('display-block');

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Получаем инпут file в переменную
	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

	// // убираем pop-up_window при нажатии на крестик
	// document.querySelector('.div-cross').addEventListener('click', () => {
	// 	document.querySelector('.pop-up_window').classList.toggle('pop-up_window-none')
	// })

	// //Слушаем изменения в инпуте file
	// formImage.addEventListener('change', () => {
	// 	uploadFile(formImage.files[0]);
	// });

	// function uploadFile(file) {
	// 	// провераяем тип файла
	// 	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
	// 		alert('Разрешены только изображения.');
	// 		formImage.value = '';
	// 		return;
	// 	}
	// 	// проверим размер файла (<2 Мб)
	// 	if (file.size > 2 * 1024 * 1024) {
	// 		alert('Файл должен быть менее 2 МБ.');
	// 		return;
	// 	}

	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	// 	};
	// 	reader.onerror = function (e) {
	// 		alert('Ошибка');
	// 	};
	// 	reader.readAsDataURL(file);
	// }
});