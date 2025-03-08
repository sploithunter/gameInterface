// Basic setup for the color matching memory game

// Game variables
let colors = [];
let pickedColors = [];
let score = 0;
let gameActive = false;

// Initialize game
window.initGame = function() {
    console.log('Initializing game...');
    // Add game styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 10px;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
            padding: 20px;
            background-color: #333;
            border-radius: 10px;
        }

        .color-tile {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s;
            border: 2px solid #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .color-tile:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(styleSheet);

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
    if (!gameBoard) {
        console.error('Game board element not found');
        return;
    }
    console.log('Rendering game board');
    console.log('Game board dimensions:', gameBoard.offsetWidth, gameBoard.offsetHeight);
    gameBoard.innerHTML = '';
    
    // Create pairs of colors
    const colorPairs = [...colors, ...colors];
    // Shuffle the colors
    for (let i = colorPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colorPairs[i], colorPairs[j]] = [colorPairs[j], colorPairs[i]];
    }
    
    colorPairs.forEach((color, index) => {
        const colorTile = document.createElement('div');
        colorTile.style.backgroundColor = color;
        colorTile.classList.add('color-tile');
        colorTile.addEventListener('click', () => handleTileClick(index));
        gameBoard.appendChild(colorTile);
        console.log(`Added color tile with color: ${color}`);
    });
    console.log('Game board rendered with tiles:', gameBoard.children.length);
}

// Handle tile click
function handleTileClick(index) {
    if (!gameActive) return;
    const tiles = document.querySelectorAll('.color-tile');
    const clickedTile = tiles[index];
    
    if (pickedColors.includes(index)) return; // Already clicked
    
    pickedColors.push(index);
    clickedTile.style.transform = 'scale(0.95)';
    
    if (pickedColors.length === 2) {
        const [firstIndex, secondIndex] = pickedColors;
        const firstTile = tiles[firstIndex];
        const secondTile = tiles[secondIndex];
        
        if (firstTile.style.backgroundColor === secondTile.style.backgroundColor) {
            // Match found
            setTimeout(() => {
                firstTile.style.visibility = 'hidden';
                secondTile.style.visibility = 'hidden';
                score++;
                pickedColors = [];
                if (score === colors.length) {
                    endGame(true);
                }
            }, 500);
        } else {
            // No match
            setTimeout(() => {
                firstTile.style.transform = '';
                secondTile.style.transform = '';
                pickedColors = [];
            }, 1000);
        }
    }
}

// End the game
function endGame(win) {
    gameActive = false;
    setTimeout(() => {
        alert(win ? 'Congratulations! You won!' : 'Try again!');
        if (win) {
            initGame(); // Restart the game after winning
        }
    }, 300);
}
