// ===================================================

// 1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
// 2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
// 3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?

const products = [{
        id: 1,
        title: "Apple iPhone 6s 16GB",
        price: 14995,
        img: "https://cdn.svyaznoy.ru/upload/iblock/5c2/iphone6s_34bf_2up_spgry_ru-ru-screen.jpg/resize/483x483/hq/"
    },
    {
        id: 2,
        title: "Apple iPhone 7 32GB (золотой)",
        price: 26990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/0bc/iphone7_2up_gld_us-en-print-eigwm.jpg/resize/483x483/hq/"
    },
    {
        id: 3,
        title: "Apple iPhone 8 64GB (серый космос)",
        price: 36990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/ae1/12.jpg/resize/483x483/hq/"
    },
    {
        id: 4,
        title: "Apple iPhone SE 2020 64GB",
        price: 39990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/b989b800b92e8e8448b741317d62623e/1.jpg/resize/483x483/hq/"
    },
    {
        id: 5,
        title: "Apple iPhone 8 Plus 64GB (золотой)",
        price: 44990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/2fd/12.jpg/resize/483x483/hq/"
    },
    {
        id: 6,
        title: "Apple iPhone XR 128GB (синий)",
        price: 54990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/eb1/blue.jpg/resize/483x483/hq/"
    },
    {
        id: 7,
        title: "Apple iPhone 11 128GB (зеленый)",
        price: 64990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/75c/iphone_11_g_2.jpg/resize/483x483/hq/"
    },
    {
        id: 8,
        title: "Apple iPhone 11 256GB (фиолетовый)",
        price: 73990,
        img: "https://cdn.svyaznoy.ru/upload/iblock/7e8/iphone_11_p_2.jpg/resize/483x483/hq/"
    }
]

// вместо (title, price) - может принимать объект - 1 параметр в виде объекта
const renderProduct = (title, price, img) => {
    return `
        <div class="product-item">
            <img width="200" height="300" class="product-image" src="${img}" alt="${title}">
            <h3 class="product-name">${title}</h3>
            <p class="product-price">${price}</p>
            <button class="btn buy-btn">Купить</button>
        </div>
    `
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);



















// ===================================================