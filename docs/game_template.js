/**
 * [Game Name] - Created by [Model Name]
 * Based on prompt: [Original Prompt]
 * Date: [Creation Date]
 */

class Game {
    /**
     * Constructor for the game
     * @param {string} containerId - ID of the container element
     */
    constructor(containerId) {
        // Store reference to the container
        this.container = document.getElementById(containerId);
        
        // Game state variables
        this.isGameActive = false;
        this.score = 0;
        
        // Initialize the game
        this.init();
    }
    
    /**
     * Initialize the game - create UI elements and set up the game
     */
    init() {
        // Create game container
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'game-container';
        
        // Create UI elements
        this.createUI();
        
        // Add styles
        this.addStyles();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Add game container to the main container
        this.container.appendChild(this.gameContainer);
        
        // Start a new game
        this.startNewGame();
    }
    
    /**
     * Create the user interface elements
     */
    createUI() {
        // Create header with game info
        this.header = document.createElement('div');
        this.header.className = 'game-header';
        
        // Create score display
        this.scoreDisplay = document.createElement('div');
        this.scoreDisplay.className = 'score-display';
        this.scoreDisplay.textContent = 'Score: 0';
        
        // Create game controls
        this.controls = document.createElement('div');
        this.controls.className = 'game-controls';
        
        // Create new game button
        this.newGameButton = document.createElement('button');
        this.newGameButton.textContent = 'New Game';
        this.newGameButton.addEventListener('click', () => this.startNewGame());
        
        // Create game board
        this.gameBoard = document.createElement('div');
        this.gameBoard.className = 'game-board';
        
        // Assemble UI elements
        this.controls.appendChild(this.newGameButton);
        this.header.appendChild(this.scoreDisplay);
        this.header.appendChild(this.controls);
        this.gameContainer.appendChild(this.header);
        this.gameContainer.appendChild(this.gameBoard);
    }
    
    /**
     * Add CSS styles for the game
     */
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .game-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            
            .game-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .score-display {
                font-size: 1.2em;
                font-weight: bold;
            }
            
            .game-controls {
                display: flex;
                gap: 10px;
            }
            
            .game-board {
                background-color: var(--card-bg, #333);
                border-radius: 8px;
                padding: 20px;
                min-height: 300px;
            }
            
            button {
                padding: 8px 16px;
                border-radius: 4px;
                border: none;
                background-color: var(--accent-color, #8b5cf6);
                color: white;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            
            button:hover {
                background-color: var(--primary-color, #6d28d9);
            }
            
            /* Add your game-specific styles here */
        `;
        
        this.container.appendChild(style);
    }
    
    /**
     * Set up event listeners for user interaction
     */
    setupEventListeners() {
        // Add game-specific event listeners here
    }
    
    /**
     * Start a new game - reset state and set up game elements
     */
    startNewGame() {
        // Reset game state
        this.isGameActive = true;
        this.score = 0;
        this.updateScore();
        
        // Clear the game board
        this.gameBoard.innerHTML = '';
        
        // Initialize game elements
        this.initializeGameElements();
    }
    
    /**
     * Initialize game elements - create and set up game-specific elements
     */
    initializeGameElements() {
        // Implement game-specific initialization here
    }
    
    /**
     * Update the score display
     */
    updateScore() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }
    
    /**
     * Handle game over state
     * @param {boolean} isWin - Whether the player won or lost
     */
    handleGameOver(isWin) {
        this.isGameActive = false;
        
        // Create game over message
        const gameOverMessage = document.createElement('div');
        gameOverMessage.className = 'game-over-message';
        gameOverMessage.innerHTML = `
            <h2>${isWin ? 'Congratulations!' : 'Game Over'}</h2>
            <p>Your score: ${this.score}</p>
            <button class="play-again-btn">Play Again</button>
        `;
        
        // Add event listener to play again button
        const playAgainBtn = gameOverMessage.querySelector('.play-again-btn');
        playAgainBtn.addEventListener('click', () => {
            gameOverMessage.remove();
            this.startNewGame();
        });
        
        // Add game over message to the game board
        this.gameBoard.appendChild(gameOverMessage);
    }
}

/**
 * Initialize the game when the script loads
 */
function initGame() {
    new Game('game-canvas');
}

// Export the initialization function
window.initGame = initGame; 