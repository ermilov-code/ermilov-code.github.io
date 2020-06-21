/* 2. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее. */

// у меня есть ссылки на изображения
let IMGS = [
    'https://cdn.svyaznoy.ru/upload/iblock/5c2/iphone6s_34bf_2up_spgry_ru-ru-screen.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/0bc/iphone7_2up_gld_us-en-print-eigwm.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/ae1/12.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/b989b800b92e8e8448b741317d62623e/1.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/2fd/12.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/eb1/blue.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/75c/iphone_11_g_2.jpg/resize/483x483/hq/',
    'https://cdn.svyaznoy.ru/upload/iblock/7e8/iphone_11_p_2.jpg/resize/483x483/hq/'
]

// будем делать по тому же принципу, по которму мы создаем товары
// берем главное изображение
let MAIN_PIC = document.querySelector('#MAIN-PIC')
let roulette = document.querySelector('#roulette')

// когда 
window.onload = () => {
    MAIN_PIC.src = IMGS[0]
    // мы будем обходить наш массив forEach-ем 
    // в рулетку (можно innert html - но заюзаем новый способ) 
    // insertAdjacentHTML - это такой метод, который работает с двумя параметрами - первый (указываете местоположение - куда) - а вторым параметром вы указываtnt (ЧТО!)
    // то есть мы вызываем функцию createItem(img), пробрасываем туда IMG - и на выходе у объекта, который отсюда выйдет - мы вызываем createTemplate() - которая нам возвращает HTML строку - который он beforeend вставит 
    // такой метод нужно использовать, если вы не хотите заморачиваться 
    IMGS.forEach(img => {
        roulette.insertAdjacentHTML('beforeend', createItem(img).createTemplate())
    })
}

// создадим функцию, которая будет возвращать объект 
// привыкаем к использованию объектов

function createItem(url) {
    return {
        // можно задавать параметры
        // ширину пока убрал! 
        // width: 150,
        height: 120,
        // метод, который возвращает нам строчку
        // очень здорово для изображений иметь такую практику, потому что если у вас изображения большие, а вы хотите их сделать маленькими, (а у вас в стилях написано все - но изображение может загрузится быстрее чем стили) - 
        createTemplate() {
            return `
                <img src="${url}" class="gallery-img" width="${this.width}" height="${this.height}"></img>
            `
        }
    }
}

// мы на нашу рулетку вешаем (помня о том, что мы не будем на каждую картинку вешать событие клик) - мы повесим его на всю рулетку 
roulette.addEventListener('click', evt => {
    // если я буду кликать по элементу, который является картинкой - 
    if (evt.target.tagName === 'IMG') {
        // мы у главной картинки будем присваивать источник evt таргета 
        MAIN_PIC.src = evt.target.src
    }
})



// =============== РЕАЛИЗАЦИЯ ПЕРЕКЛЮЧЕНИЯ ГАЛЕРЕИИ ===============

// переменная для длинны массива с картинками
let lengthArrayImg = IMGS.length;
// счетчик
let i = 0;
// функция для переключения картинок вперед
function buttonRightImg() {
    i++;
    if (i < lengthArrayImg) {
        MAIN_PIC.src = IMGS[i];
    } else {
        MAIN_PIC.src = IMGS[0];
        i = 0;
    }
}
// навешиваем слушатель событий на стрелочку ВПРАВО
document.querySelector('.fa-chevron-right').addEventListener('click', buttonRightImg)


// функция для переключения картинок назад
function buttonLeftImg() {
    i--;
    if (i < lengthArrayImg && i >= 0) {
        MAIN_PIC.src = IMGS[i];
    } else {
        i = lengthArrayImg;
        MAIN_PIC.src = IMGS[--i];
    }
}
// навешиваем слушатель событий на стрелочку ВПРАВО
document.querySelector('.fa-chevron-left').addEventListener('click', buttonLeftImg)

// =============== РЕАЛИЗАЦИЯ ПЕРЕКЛЮЧЕНИЯ ГАЛЕРЕИИ ===============



// мне не нравится что здесь нет даже намека на ООП 