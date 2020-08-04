// ============================================================


// скрипт для scroll-а текущего блока

let hiddenElement = document.getElementById("box-section-service");
let btn = document.querySelector('.arrow-svg');

function handleButtonClick() {
    hiddenElement.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

btn.addEventListener('click', handleButtonClick);

// КОНЕЦ скриптА для scroll-а текущего блока



























// ============================================================