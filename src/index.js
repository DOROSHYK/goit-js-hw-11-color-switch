
// Напиши скрипт, который после нажатия кнопки
// Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя
// инлайн - стиль.При нажатии на кнопку Stop,
//     изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать
// бесконечное количество раз.Сделай так, чтобы
// пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа
//     (индекс элемента массива цветов), используй функцию
// randomIntegerFromInterval

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let interval;
// console.log(startBtn);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(colorsArr) {
    const colorRandomId = randomIntegerFromInterval(0, colorsArr.length - 1);
    body.style.background = colorsArr[colorRandomId];
}
    
    startBtn.addEventListener('click', startFunc);

function startFunc() {
    startBtn.disabled = true;
    interval = setInterval(() => {
        changeColor(colors);
    }, 1000)
};

stopBtn.addEventListener('click', stopFunc)

function stopFunc() {
    startBtn.disabled = false;
    clearInterval(interval);
    console.log('stop color!');
}



