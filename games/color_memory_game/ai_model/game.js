// Basic setup for the color matching memory game

// Game variables
let colors = [];
let pickedColors = [];
let score = 0;
let gameActive = false;

// Initialize game
function initGame() {
    colors = generateColors(6); // Generate 6 random colors
    pickedColors = [];
    score = 0;
    gameActive = true;
    renderGameBoard();
}

// Generate random colors
function generateColors(num) {
    const colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

// Generate a random color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Render the game board
function renderGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    colors.forEach((color, index) => {
        const colorTile = document.createElement('div');
        colorTile.style.backgroundColor = color;
        colorTile.classList.add('color-tile');
        colorTile.addEventListener('click', () => handleTileClick(index));
        gameBoard.appendChild(colorTile);
    });
}

// Handle tile click
function handleTileClick(index) {
    if (!gameActive) return;
    pickedColors.push(colors[index]);
    if (pickedColors.length === 2) {
        checkMatch();
    }
}

// Check if the picked colors match
function checkMatch() {
    if (pickedColors[0] === pickedColors[1]) {
        score++;
        pickedColors = [];
        if (score === colors.length / 2) {
            endGame(true);
        }
    } else {
        setTimeout(() => {
            pickedColors = [];
            renderGameBoard();
        }, 1000);
    }
}

// End the game
function endGame(win) {
    gameActive = false;
    alert(win ? 'You win!' : 'Try again!');
}

// Start the game
initGame();
