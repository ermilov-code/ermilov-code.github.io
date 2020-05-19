// =================================================================

// функция - создать продукт
function createProduct(product) {
    return {
        product_name: product.product_name,
        price: product.price,
        id_product: product.id_product,
        img: product.img,
        // идея в том, что в каждом продукте будет хранится его кусочек ВЕРСТКИ
        createTemplate() {
            // `` - бэктики это шаблонные строки
            return `
                <div class="product-item" data-id="${this.id_product}">
                    <img width="200" height="300" class="product-image" src="${this.img}" alt="${this.product_name}">
                    <div class="bottom-product-wrapper">
                        <h3 class="product-name">${this.product_name}</h3>
                        <p class="product-price">${this.price} ₽</p>
                        <button class="buy-button btn-38643"
                            name="buy-btn"
                            data-id="${this.id_product}"
                            data-name="${this.product_name}"
                            data-img="${this.img}"
                            data-price="${this.price}">
                            Купить
                        </button>
                    </div>
                </div>
            `
        }
    }
}


// ======= объект catalog =======
let catalog = {
    items: [],
    // контейнер в который пометили селектор в который будем размещать наш каталог
    // потом сделаем вот так - let container = document.querySelector(this.container)
    container: '.products',
    cart: null,
    catalogUrl: 'https://raw.githubusercontent.com/ermilov-code/json/master/appleProductCatalog.json',

    // у нашего объекта будут следующие МЕТОДЫ:

    init() {
        // обнуляем массив при каждой инициализации 
        this.items = []
        this.cart = cart
        this.getData(this.catalogUrl)
            .finally(() => {
                this._fetchItems()
                this._render()
            })

        // событие сработает только в том месте, где я ему сказал (ЗАХВАТ);
        // когда я кликаю по кнопке, для браузера это выглядит не то, что я кликаю по кнопке
        // Достаточно одного большого слушателя, но с маленьким определителем!
        // функция от события evt
        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target.dataset)
            }
        })
    },
    // get data - получить данные
    getData(url) {
        // сделаем запрос на сервер - fetch(url) - функция, которая запрашивает данные с интернета 
        // fetch - получить
        return fetch(url)
            .then(data => data.json())
            .then((data2) => {
                this.items = data2
            })
    },
    // fetch items - получить предметы 
    _fetchItems() {
        let arr = []

        this.items.forEach(item => {
            arr.push(createProduct(item))
        })
        console.log(arr)
        this.items = arr
    },
    // render - визуализация, отрисовка
    // удобно ли будет сразу отрисовывать элементы на странице или хранить в памяти, а потом сразу выводить все?! чем меньше отрисовок, тем лучше! нам лучше сразу сделать большой фрагмент и вставить его в верстку! 
    _render() {
        let container = document.querySelector(this.container)
        let domString = ''

        // начинаем бегать по items при помощи forEach - каждый item мы берем и пробрасываем в функцию (СТРЕЛОЧНЫЕ ФУНКЦИИ)
        // Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
        this.items.forEach(item => {
            // к нашему domString мы прибавляем каждый раз item.createTemplate()
            domString += item.createTemplate()
        })
        container.innerHTML = domString
    }
}


// ======= объект cart =======
let cart = {
    items: [],
    // shown - показанный (при нажатии на кнопку toggle-cart - cart.shown станет true)
    shown: false,
    sum: 0,
    qua: 0,
    container: '.basket',
    itemsContainer: '.basket_products',

    init() {
        document.querySelector('#toggle-cart').addEventListener('click', () => {
            cart.shown = !cart.shown
            cart.render()
            // toggle - Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
            document.querySelector('#basket').classList.toggle('invisible')
        })
        // слушатель событий для КРЕСТИКА в корзине (чтобы она закрывалась)
        document.querySelector('.close').addEventListener('click', () => {
            document.querySelector('#basket').classList.toggle('invisible')
        })


        // delete the item (one at a time) from the basket
        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'del-btn') {
                this.removeProduct(evt.target.dataset.id)
            }
        })
    },
    render() {
        let container = document.querySelector(this.itemsContainer)
        let domString = ''

        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString

        document.querySelector('#tot-sum').innerHTML = this.sum
        document.querySelector('#tot-qua').innerHTML = this.qua
    },
    addProduct(product) {
        // метод find позволяет искать соответствия 
        let find = this.items.find(item => item.id_product === product.id)
        if (!find) {
            this.items.push(createCartItem(product.id, product.name, product.price, product.img)) //потому-что дата-сет
        } else {
            find.quantity++
        }
        this.checkTotal()
        this.render()
    },
    removeProduct(id) {
        let find = this.items.find(item => item.id_product === id)
        if (find.quantity === 1) {
            this.items.splice(this.items.indexOf(find), 1)
        } else {
            find.quantity--
        }
        this.checkTotal()
        this.render()
    },
    checkTotal() {
        let s = 0
        let q = 0

        this.items.forEach(item => {
            q += item.quantity
            s += item.quantity * item.price
        })

        this.sum = s
        this.qua = q
    }
}

// объект товара для корзины
// была переменная - заменили на функцию, так как у нас нет КОНСТРУКТОРА
// функция, возвращающая объект
function createCartItem(id, name, price, img) {
    return {
        id_product: id,
        price: +price,
        product_name: name,
        quantity: 1,
        img: img,
        createTemplate() {
            return `
                    <div class="product-item product-item-selected" data-id="${this.id_product}">
                        <img width="200" height="200" class="product-image product-image-selected" src="${this.img}" alt="${this.product_name}">
                        <div class="bottom-product-wrapper bottom-product-wrapper-selected">
                            <h3 class="product-name product-name-selected">${this.product_name}</h3>
                            <p class="product-price product-price-selected">${this.price} ₽</p>
                            <p class="product-quantity">&times; ${this.quantity}</p>
                        </div>
                        <div class="right-block">
                            <p class="product-price product-price-common">₽ ${this.price * this.quantity}</p>
                            <button name="del-btn" class="del-btn" data-id="${this.id_product}">&times;</button>
                        </div>
                    </div>
                    `
        }
    }
}

// функция полной очистки корзины - КОСТЫЛИ
function emptyTrash() {
    cart.items = [],
        cart.sum = 0,
        cart.qua = 0,
        cart.render()

}
document.querySelector('.fa-trash-o').addEventListener('click', emptyTrash)



cart.init()
catalog.init()


//     // нужен метод, который считает общую стоимость товаров в корзине
//     totalAmount() {
//         let array = arrayForPrices;
//         let reducer = (accumulator, currentValue) => accumulator + currentValue;
//         return array.reduce(reducer)
//     },
// }


// // создаем функцию для создания продукта отложенного в КОРЗИНУ
// function productСhosen(index) {
//     return {
//         // массив с названием выбранного продукта
//         product_name: arrayForProducts[index],
//         // массив с ценами выбранных продуктов
//         price: arrayForPrices[index],
//         img: arrayForImages[index],
//         id_product: arrayForId[index],
//         createTemplate() {
//             return `
//             <div class="product-item product-item-selected" data-id="${this.id_product}">
//                 <img width="200" height="200" class="product-image product-image-selected" src="${this.img}" alt="${this.product_name}">
// <div class="bottom-product-wrapper bottom-product-wrapper-selected">
// <h3 class="product-name product-name-selected">${this.product_name}</h3>
// <p class="product-price product-price-selected">${this.price} ₽</p>
// <button name="del-btn" class="del-btn" data-id="${this.id_product}">&times;</button>
// </div>
//             </div>
//             `
//         }
//     }
// }



// catalog.init()
// cart.init()

// // хочу, чтобы при нажатии на значок КОРЗИНЫ - появлялась корзина
// document.querySelector('.button_basket').addEventListener('click', basketVisible)
// // скрываем КОРЗИНУ
// document.querySelector('.close').addEventListener('click', basketHide)

// // функция добаления display none НАШЕЙ КОРЗИНЕ <div id="basket" class="basket"></div>
// function basketVisible() {
//     let myBacket = document.querySelector("#basket");
//     myBacket.classList.add("basket-visible");
// }
// // убираем корзину
// function basketHide() {
//     let myBacket = document.querySelector("#basket");
//     myBacket.classList.remove("basket-visible");
// }

// // ======================== корявый вывод в массив 
// let i = 0
// // переменная для управления блоком SPAN с ценой - <span class="basket_total_price"></span>
// let totalPrice = document.querySelector('.basket_total_price');
// // выводит количество выбранных товаров
// let totalGoods = document.querySelector('.total-goods');
// let goodsCounter = document.querySelector('.div-goods-counter');
// document.querySelector(".products").addEventListener('click', (evt) => {
//     // contains - содержит!!!
//     if (evt.target.classList.contains('buy-button')) {
//         basket.items.push(productСhosen(i))
//         // отображаем товар в корзине
//         basket.render()
//         // изменение суммы товаров в корзине
//         let amountOfMoneyInTheBasket = basket.totalAmount();
//         let totalGoodsLength = arrayForPrices.length;
//         totalPrice.innerHTML = "<b>" + amountOfMoneyInTheBasket + "</b>" + " ₽";
//         totalGoods.innerHTML = "Товаров в корзине: " + "<b>" + "<u>" + totalGoodsLength + "</u>" + "</b>";
//         goodsCounter.innerHTML = totalGoodsLength;
//         i = i + 1;
//     }
// })










// ЧТО ВАМ НУЖНО БУДЕТ СДЕЛАТЬ ДАЛЬШЕ?! 
// - вам нужно будет создать объект корзины (у нее тоже будут свои items);
// - можно ссылку на объект корзины пробросить сюда;
// - а в инициализации вы будите писать следующее, что 
// - и когда вы создадите корзину, вам будет доступно
// - вы в корзине заведете свои items, container и т д.
// - а внутри каталога вы сможете добавить метод добавления товара в корзину 
// - и так как у вас в корзинке каталога будет лежать ссылка на корзину вот эту (изменяя this.cart = cart - вы будите изменять корзину глобально let cart = {}
// Вы уже сможете добавлять в items нашей корзины при нажатии на кнопки, товары которые вы хотите туда добавить! 

/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: Пустая корзина должна выводить строку «Корзина пуста»;Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

/* 1. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа. */