// ============================================================

// ======== ЗАДАНИЯ для Домашней работы ========
// * Некая сеть фастфуда предлагает несколько видов гамбургеров:
// Маленький (50 рублей, 20 калорий).
// Большой (100 рублей, 40 калорий).
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// С сыром (+10 рублей, +20 калорий).
// С салатом (+20 рублей, +5 калорий).
// С картофелем (+15 рублей, +10 калорий).
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.


class ProductsList {
    // конструктор есть у каждого класса
    // конструктор - вызывается при создании объекта нашего класса
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; /* this.goods - массив товаров */
        this.allProducts = []; /* this.allProducts - массив с версткой */
        // какие МЕТОДЫ вызывать при запуске нашего конструтора:
        this._fetchProduct(); /* _fetchProduct - получить продукт - актуален только в данном классе - генератор товаров; */
        this.render(); /* render - отрисовка наших товаров */
    }
    _fetchProduct() {
        this.goods = [{
                id: 1,
                title: "Мини Бургер",
                description: "Обжаренная говяжья котлета, панированная в сухарях, со свежим салатом на булочке, заправленной специальным соусом.",
                price: 49,
                img: "./img/1-small-burger.png",
                calories: 250
            },
            {
                id: 2,
                title: "Бургер",
                description: "Сандвич с большим, рубленым бифштексом из 100% говядины на большой булочке с кунжутом. Особенный вкус сандвичу придают два кусочка сыра, два ломтика помидора, свежий салат, лук и пикантный соус",
                price: 79,
                img: "./img/2-medium-burger.png",
                calories: 330
            },
            {
                id: 3,
                title: "Биг Бургер",
                description: "Большой сандвич с двумя рублеными бифштексами из натуральной цельной говядины на специальной булочке, заправленной луком, ломтиком сыра «Чеддер», свежим салатом, и специальным соусом",
                price: 99,
                img: "./img/3-big-burger.png",
                calories: 410
            }
        ];
    }
    render() {
        const block = document.querySelector(this.container); /* const block - помещаем туда наши товары */
        // можно сделать forEach() - НО мы пока сделаем for; for (let product of this.goods - мы хотим в цикле поработать с каждым элементом массива goods
        // product - это каждый объект массива goods - хотим каждый наш объект обернуть в верстку 
        for (let product of this.goods) {
            // обходим наш массив с объектами товаров и КАЖДЫЙ ТОВАР будем ПЕРЕДАВАТЬ В КОНСТРУКТОР class ProductItem
            // когда пишем new - вызывается конструктор - в нем есть обязательный параметр - product - его и передаем
            const productObj = new Hamburger(product); /* productObj - каждый товар  */
            // добавляем каждый элемент в массив с верткой allProducts
            this.allProducts.push(productObj);
            // теперь выводим наши товары на страничку
            // block.innerHTML += productObj.render(); - В ВЫСОКОНАГРУЖЕННЫХ ПРОЕКТАХ ЭТА ИНСТРУКЦИЯ СЧИТАЕТСЯ ПЛОХОЙ! (каждый раз при добавлении нового элемента ПЕРЕРИСОВЫВАЮСЯ СТАРЫЕ ЭЛЕМЕНТЫ!) - поэтому это считается медленной конструкцией - можно сделать более быстро!
            // block.innerHTML += productObj.render();
            // insertAdjacentHTML - указываем КУДА ВСТАВЛЯЕМ - ЧТО ВСТАВЛЯЕМ!
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}


class Hamburger {
    // конструктор есть у каждого класса
    // конструктор - вызывается при создании объекта нашего класса
    // на вход будем принимать наш объект, который нужно будет обернуть в верстку 
    // делаем ПО УМОЛЧАНИЮ переменная КАРТИНКА;
    // constructor(product, img = "https://placehold.it/200x150") {
    constructor(product) {
        // на вход же принимаем ОБЪЕКТ (product), а у ОБЪЕКТА есть свойства (title, id, price ...);
        // это ОБЩИЕ СВОЙСТВА У ВСЕХ ТОВАРОВ
        // глобальные переменные
        this.title = product.title;
        this.description = product.description;
        this.id = product.id;
        this.img = product.img;
        this.price = product.price;
        this.calories = product.calories;
    }

    // для того, чтобы каждый товар вывести на страницу - его нужно ОБЕРНУТЬ в верстку!
    render() {
        return `
        <div class="product-item">
            <img width="200" height="300" class="product-image" src="${this.img}" alt="${this.title}">
            <h3 class="product-name">${this.title}</h3>
            <p class="product-description">${this.description}</p>
            <p class="product-price">${this.price + " ₽"}</p>
            <button class="btn buy-btn">В корзину</button>
        </div>
    `
    }



    // constructor(size, stuffing) {
    //     // ...
    // }
    // // Добавить добавку
    // addTopping(topping) {}
    // // Убрать добавку
    // removeTopping(topping) {}
    // // Получить список добавок
    // getToppings(topping) {}
    // // Узнать размер гамбургера
    // getSize() {}
    // // Узнать начинку гамбургера
    // getStuffing() {}
    // // Узнать цену
    // calculatePrice() {}
    // // Узнать калорийность 
    // calculateCalories() {}
}




// // Чтобы верстка каждого товара была максимально эффективная и гибкая - сделаем еще один класс - (КЛАСС ДЛЯ ОФОРМЛЕНИЯ ТОВАРА) - у каждого товара есть свои собственные свойства;
// class ProductItem {
//     // конструктор есть у каждого класса
//     // конструктор - вызывается при создании объекта нашего класса
//     // на вход будем принимать наш объект, который нужно будет обернуть в верстку 
//     // делаем ПО УМОЛЧАНИЮ переменная КАРТИНКА;
//     // constructor(product, img = "https://placehold.it/200x150") {
//     constructor(product) {
//         // на вход же принимаем ОБЪЕКТ (product), а у ОБЪЕКТА есть свойства (title, id, price ...);
//         // это ОБЩИЕ СВОЙСТВА У ВСЕХ ТОВАРОВ
//         // глобальные переменные
//         this.title = product.title;
//         this.id = product.id;
//         this.img = product.img;
//         this.price = product.price;
//     }

//     // для того, чтобы каждый товар вывести на страницу - его нужно ОБЕРНУТЬ в верстку!
//     render() {
//         return `
//         <div class="product-item">
//             <img width="200" height="300" class="product-image" src="${this.img}" alt="${this.title}">
//             <h3 class="product-name">${this.title}</h3>
//             <p class="product-price">${this.price + " ₽"}</p>
//             <button class="btn btn-comparison"><img width="40" height="40" class="img-btn-comparison" src="./img/comparison.png" alt="comparison"></button>
//             <button class="btn buy-btn">Купить</button>
//         </div>
//     `
//     }

// }






// список товаров присваиваем класс ProductsList - вызываю наш конструктор! 
let list = new ProductsList();




// ============================================================