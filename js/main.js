// ============================================================



// burger-menu (jquery) =================
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button', '.burger-menu__lines');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        // remove scrolling in the menu:
        if (menu.hasClass('burger-menu_active')) {
            $('body').addClass('modal-open');
        } else {
            $('body').removeClass('modal-open');
        }
    }
}

burgerMenu('.burger-menu');
// // / burger-menu (jquery) =================


// smooth scrolling =================
const anchors = document.querySelectorAll('a[href^="#"]')
// Loop through all links
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// smooth scrolling =================

























// ============================================================