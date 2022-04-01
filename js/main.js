// ============================================================

// ВАЛИДАЦИЯ ФОРМЫ:
class Validator {

	constructor(form) {

		this.patterns = {
			name: /^[a-zа-яё\s]+$/i,
			mail: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
		};
		this.errors = {
			name: 'Имя содержит только буквы',
			mail: 'Введите корректный e-mail',
		};
		this.errorClass = 'error-msg';
		this.form = form;
		this.valid = false;
		this._validateForm();
	}
	validate(regexp, value) {
		regexp.test(value)
	}

	_validateForm() {
		let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
		for (let error of errors) {
			error.remove();
		}
		let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
		for (let field of formFields) {
			this._validate(field);
		}
		if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
			this.valid = true;
			// удалить лишнее
			document.getElementById('button10').removeAttribute('disabled');
		}
	}

	_validate(field) {
		if (this.patterns[field.name]) {
			if (!this.patterns[field.name].test(field.value)) {
				field.classList.add('invalid');
				this._addErrorMsg(field);
				this._watchField(field);
				// удалить лишнее
				this._buttonActivation(field);
				document.getElementById('button10').setAttribute('disabled', true);
			}
		}
	}
	_addErrorMsg(field) {
		let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
		field.parentNode.insertAdjacentHTML('beforeend', error);
	}
	_watchField(field) {
		field.addEventListener('input', () => {
			let error = field.parentNode.querySelector(`.${this.errorClass}`);
			if (this.patterns[field.name].test(field.value)) {
				field.classList.remove('invalid');
				field.classList.add('valid');
				if (error) {
					error.remove();
				}
			} else {
				field.classList.remove('valid');
				field.classList.add('invalid');
				if (!error) {
					this._addErrorMsg(field);
				}
			}
		})
	}
	// необходимо сделать метод, который будет отслеживать каждое изменение в обязательных полях ввода (кнопка добавления товара неактивна пока форма пуста или невалидна)
	_buttonActivation(field) {
		field.addEventListener('input', () => {
			if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
				// делает кнопку активной, если хотя одно поле валидно 
				document.getElementById('button10').removeAttribute('disabled');
				document.getElementById('button10').classList.add('valid-form-btn');
			}
		})
	}

}

// ============================================================

// Меню бургер на JavaScript

"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// Меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Меню бургер на JavaScript

// DROP-DOWN MENU:

const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

// DROP-DOWN MENU /





// ============================================================