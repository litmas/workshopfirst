console.log("Hello World!");

const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;

startGame();

function startGame() {
    cellElements.forEach(cell => {
        cell.document.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = isPlayer_O_Turn ? 'o' : 'x';
    placeMark(cell, currentClass);
    isPlayer_O_Turn = !isPlayer_O_Turn; // Växla tur mellan spelarna
    console.log('It works');
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}