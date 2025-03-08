/**
 * Game Template
 * This is a starting point for creating new games
 */

// Game state
let gameState = {
    score: 0,
    isRunning: false,
    entities: []
};

// Game configuration
const config = {
    width: 800,
    height: 600,
    backgroundColor: '#333',
    fps: 60
};

// Game initialization
function initGame() {
    console.log('Game initialized');
    
    // Get the game container
    const gameBoard = document.getElementById('gameBoard');
    if (!gameBoard) {
        console.error('Game board element not found');
        return;
    }
    
    // Clear the container
    gameBoard.innerHTML = '';
    
    // Create game canvas
    const canvas = document.createElement('canvas');
    canvas.width = config.width;
    canvas.height = config.height;
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    canvas.style.backgroundColor = config.backgroundColor;
    
    // Add canvas to the container
    gameBoard.appendChild(canvas);
    
    // Get canvas context
    const ctx = canvas.getContext('2d');
    
    // Start game loop
    gameState.isRunning = true;
    gameLoop(ctx);
    
    // Add event listeners
    setupEventListeners(canvas);
}

// Game loop
function gameLoop(ctx) {
    if (!gameState.isRunning) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, config.width, config.height);
    
    // Update game state
    updateGameState();
    
    // Render game
    renderGame(ctx);
    
    // Schedule next frame
    setTimeout(() => {
        requestAnimationFrame(() => gameLoop(ctx));
    }, 1000 / config.fps);
}

// Update game state
function updateGameState() {
    // Update entities
    gameState.entities.forEach(entity => {
        // Update entity position, state, etc.
    });
    
    // Check for collisions
    
    // Update score
}

// Render game
function renderGame(ctx) {
    // Draw background
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, config.width, config.height);
    
    // Draw entities
    gameState.entities.forEach(entity => {
        // Draw entity
    });
    
    // Draw UI
    drawUI(ctx);
}

// Draw UI elements
function drawUI(ctx) {
    // Draw score
    ctx.fillStyle = '#fff';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${gameState.score}`, 20, 40);
}

// Setup event listeners
function setupEventListeners(canvas) {
    // Mouse events
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

// Event handlers
function handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    console.log(`Click at (${x}, ${y})`);
}

function handleMouseMove(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Update game state based on mouse position
}

function handleKeyDown(event) {
    // Handle key press
    console.log(`Key down: ${event.key}`);
}

function handleKeyUp(event) {
    // Handle key release
    console.log(`Key up: ${event.key}`);
}

// Reset game
function resetGame() {
    gameState = {
        score: 0,
        isRunning: false,
        entities: []
    };
    
    initGame();
}

// Export the initialization function
window.initGame = initGame; 