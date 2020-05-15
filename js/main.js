//  <!-- будем все это дело делать в ОБЪЕКТЕ (это удобно, как минимум) -->

// берем CANVAS document.querySelector
let canvas = document.querySelector('#canv')
// его контекст 
let ctx = canvas.getContext('2d')


// передаем 
let xCoord = document.querySelector('#x-coord')
let yCoord = document.querySelector('#y-coord')

// стирает любое ранее нарисованное содержимое.
document.querySelector('#clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, 1000, 500);
})

// // сохранение изображения
download_img = function (el) {
    let image = canvas.toDataURL("image/jpg");
    el.href = image;
};

let sliderRange = document.getElementById("myRange");
let outputRange = document.getElementById("demo");
outputRange.innerHTML = sliderRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderRange.oninput = function () {
    outputRange.innerHTML = this.value;
}


// редактор (на втором курсе будем использовать КЛАСС)
let editor = {
    // у него будет несколько СВОЙСТВ и несколько МЕТОДОВ
    container: '#app',
    // если надо будет менять длину и ширину, лучше это будет делать здесь
    // ширина самого CANVAS это не его стилевое отображение - а количесво пикселей <canvas id="canv" width="1000" height="800"></canvas> - поэтому мы делаем через - getAttribute
    // это если вы будете это КОСТОМИЗИРОВАТЬ
    // можно например стелать CANVAS скролящимся
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    // текущий инструмент - (у HTML нет нормальных кнопок с залипанием)
    // мы например включаем инструмент КИСТЬ и у нас должна как бы эта кнопка зарегистрироваться, что она НАЖАТА - пока я не выберу какой-то другой инструмент
    // выбор инструмента должен осуществляться при нажатии на КНОПКУ той же самой группы!
    // currentTool - используем в качестве запоминателя, на какую кнопку мы нажали
    currentTool: null,
    // текущий цвет
    "current-color": '#000',
    // размер кисти (по умолчанию зададим размер 5)
    "current-size": 5,
    "current-font": 'Arial',
    x: 0,
    y: 0,
    // это все, что нам сейчас понадобится (их может быть больше - но это такая БАЗОВАЯ КОМПЛЕКТАЦИЯ)

    // у нас будет несколько МЕТОДОВ, которые мы сейчас обговорим (шаг в сторону ООП)

    // _ИНКАПСУЛЯЦИЯ - (инкапсулированные методы служат для связи СВОЙСТВ и МЕТОДОВ внутри какого-то ОБЪЕКТА)
    // ИНКАПСУЛЯЦИИ - вообще в JS нет! (здесь она чисто условна) (есть такое внутренние слоглашение - если метод с нижним подчеркиванием он является инкарсултрованным)
    // в ИНИЦИАЛИЗАЦИИ - будем навязывать определенные СОБЫТИЯ через определенные СЛУШАТЕЛИ определенным нашим КНОПОЧКАМ
    _init() {
        // на весь документ навесим слушатель событий input 
        // метод, который будет отрабатывать, если мы где-то внутри нашего APP совершим некоторый input 
        document.querySelector(this.container).addEventListener('input', this.inputHandler)
        // повесим на него click 
        // clickHandler - это такие методы, которые отлавливают какие-то события и решают что с ним собственно делать; handler должен решать какая кнопка нажата - if else (если бы у кнопки было какое-то имя, то он вызвал бы другую функцию, в которой был записан был бы какой-то код)
        document.querySelector(this.container).addEventListener('click', this.clickHandler)

        // Метод EventTarget.addEventListener() регистрирует определенный обработчик события, вызванного на EventTarget.
        // нам прийдется шевелить мышками (будет отлавливать координаты)
        canvas.addEventListener('mousemove', this.getCoordinates)
        // начало отжимания (когда зажимаем - начинает отрисовку чего-либо)
        canvas.addEventListener('mousedown', this.startDraw)
        canvas.addEventListener('mouseup', this.endDraw)
        // вот такие у нас методы будут отрабатывать - давайте теперь их опишем
    },
    // мы должны будем пробрасывать сюда событие, которое у нас будет происходить - evt
    // когда вы пользуетесь addEventListener - пробрасывается автоматически!!!
    // там где есть связь с событиями у функций - там автоматически первым/последним атрибутом пробрасывается event 
    // я даже могу убрать evt и написать event - все БУДЕТ РАБОТАТЬ!
    // это не так явно - но есть такой ЗАКОН, что если у вас событие отрабатывает в каком-то МЕТОДЕ или ФУНКЦИИ - то значит оно там по любому доступно!
    // ЭТО НЕ ОЧЕНЬ ЯВНО - к этому просто нужно привыкнуть
    getCoordinates(evt) {
        // offsetX - смещение по X координате 
        editor.x = evt.offsetX
        editor.y = evt.offsetY

        xCoord.innerText = editor.x
        yCoord.innerText = editor.y
    },
    // самое тяжелое здесь в принципе это clickHandler(evt)
    // берем data атрибут нашего инструмента (<button name="tool-button" data-name='brush'>Brush</button>) - и записываем его в currentTool: null
    // (до того, как это все было оформлено в ОБЪЕКТ - была немного большая костыльная реализация - clickHandler(evt) был на основе callback - потом код оптимизировали)
    clickHandler(evt) {
        if (evt.target.name === 'tool-button') {
            editor.currentTool = evt.target.dataset.name
        }
    },
    // немного больше всего у него здесь будет, потому что мы можем input-ить две вещи: выбирать размер кисти 
    inputHandler(evt) {
        // если мы вызвали input на каких-то из этих КЕЙЗОВ
        // evt.target.name === 'input-obj' - все! 
        // при такой архитектуре вы сможете добавлять сколько угодно input элементов:
        if (evt.target.name === 'input-obj') {
            // здесь можно было бы пройти СВИЧОМ
            editor[`current-${evt.target.dataset.name}`] = evt.target.value
            evt.target.dataset.name === 'color' ? ctx.fillStyle = editor['current-color'] : ctx.fillStyle =
                ctx.fillStyle
        }
    },

    // осталось разобрать последние два метода - это РИСОВАНИЕ!
    // рисование мы с вами будем делать по принципу карандаша и PAINT
    startDraw() {
        if (editor.currentTool === 'brush') {
            editor._drawPencil()
        } else if (editor.currentTool === 'round-brush') {
            editor._drawСircle()
        }
        // если захотим добавить еще какой-то инстумент
        //if...
    },
    endDraw() {
        canvas.onmousemove = null
    },
    _drawPencil() {
        canvas.onmousemove = () => {
            ctx.fillRect(editor.x, editor.y, editor['current-size'], editor['current-size'])
        }
    },
    // Для рисования дуг и окружностей, используем методы arc() и arcTo(). 
    _drawСircle() {
        canvas.onmousemove = () => {
            // ctx.beginPath(); - Создает новый контур. После создания используется в дальнейшем командами рисования при построении контуров.
            ctx.beginPath();
            ctx.arc(editor.x, editor.y, editor['current-size'], 0, Math.PI * 2, false);
            // ctx.fill(); - Рисует фигуру с заливкой внутренней области.
            ctx.fill();
            // ctx.stroke(); - Рисует фигуру с внешней обводкой.
        }
    }
    // создаем еще какой-нибудь метод - вот здесь вызывая метод контекста (ctx.fillRect(editor.x,)
}

// видите, работа с CANVAS заключалась в настройке самого CANVAS 

// инициализация 
editor._init()