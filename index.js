/* // Importing necessary modules
import { createInterface } from 'readline';
import chalk from 'chalk';
import { say } from 'cowsay';
import logo from 'asciiart-logo'; // Importing the logo function

// Creating readline interface
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display the name in rainbow colors
function displayRainbowName(random) {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.blue];
    let rainbowName = '';

    for (let i = 0; i < random.length; i++) {
        rainbowName += colors[i % colors.length](random[i]);
    }

    console.log(rainbowName);
}

// Function to display the name in ASCII art
function displayAsciiArt(random) {
    console.log(say({
        text: random,
        e: "^^",
        T: "U "
    }));
}

// Prompting the user for their name
rl.question('Enter your name: ', (random) => {
    displayRainbowName(random);    // Display name in rainbow colors
    displayAsciiArt(random);       // Display name in ASCII art
    const longText = random;
    console.log(
        logo({
            name: '=COOLTITLE=',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'yellow',
            logoColor: 'bold-yellow',
            textColor: 'yellow',
        })
        .center(longText)
        .render()
    );
    rl.close();
});
 */

console.log("Hello World!")

const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_O_Turn = false

/* const player1 = x
const player2 = o */

/* if cell is empty {
    mouseClick on cell }
 */

    startGame()

    restartButton.addEventListener('click' startGame)
    
    function startGame() {
        isPlayer_O_Turn = false
        cellElements.forEach(cell => {
            cell.classList.remove(PLAYER_X_CLASS)
            cell.classList.remove(PLAYER_O_CLASS)
            cell.removeEventListener('click' handleCellClick)
            cell.addEventListener('click' handleCellClick { once: true })
        })
        setBoardHoverClass()
        winningMessageElement.classList.remove('show')
    }