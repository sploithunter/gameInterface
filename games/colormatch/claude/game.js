class ColorMatch {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container element with id '${containerId}' not found`);
            return;
        }
        
        this.tiles = [];
        this.colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
            '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
        ];
        this.selectedTiles = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.isLocked = false;
        
        this.init();
    }

    init() {
        // Clear the container first
        this.container.innerHTML = '';

        // Create game container
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'color-match-game';
        
        // Create score display
        this.scoreDisplay = document.createElement('div');
        this.scoreDisplay.className = 'score-display';
        this.updateScore();
        
        // Create game grid
        this.gridContainer = document.createElement('div');
        this.gridContainer.className = 'grid-container';
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .color-match-game {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
            }
            
            .score-display {
                font-size: 1.2em;
                color: var(--text-color);
                background: var(--card-bg);
                padding: 10px 20px;
                border-radius: 8px;
                border: 1px solid var(--border-color);
            }
            
            .grid-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
                width: 100%;
                max-width: 400px;
            }
            
            .tile {
                aspect-ratio: 1;
                border-radius: 8px;
                background: var(--card-bg);
                border: 2px solid var(--border-color);
                cursor: pointer;
                transition: transform 0.3s ease, background-color 0.3s ease;
            }
            
            .tile:hover {
                transform: scale(1.05);
            }
            
            .tile.flipped {
                transform: rotateY(180deg);
            }
            
            .tile.matched {
                border-color: var(--accent-color);
                box-shadow: 0 0 10px var(--accent-color);
            }
            
            @media (max-width: 400px) {
                .grid-container {
                    gap: 5px;
                }
            }
        `;
        
        // First append the style to document head to ensure styles are available
        document.head.appendChild(style);
        
        // Assemble the game container
        this.gameContainer.appendChild(this.scoreDisplay);
        this.gameContainer.appendChild(this.gridContainer);
        
        // Append the assembled game container to the main container
        this.container.appendChild(this.gameContainer);
        
        // Create and shuffle tiles
        this.createTiles();
    }

    createTiles() {
        // Create pairs of colors
        const colorPairs = [...this.colors, ...this.colors];
        
        // Shuffle the colors
        for (let i = colorPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colorPairs[i], colorPairs[j]] = [colorPairs[j], colorPairs[i]];
        }
        
        // Create tiles
        colorPairs.forEach((color, index) => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.dataset.color = color;
            tile.dataset.index = index;
            
            tile.addEventListener('click', () => this.handleTileClick(tile));
            
            this.gridContainer.appendChild(tile);
            this.tiles.push(tile);
        });
    }

    handleTileClick(tile) {
        // Ignore if game is locked or tile is already matched/selected
        if (this.isLocked || 
            tile.classList.contains('matched') || 
            tile.classList.contains('flipped')) {
            return;
        }
        
        // Flip the tile
        this.flipTile(tile);
        
        // Add to selected tiles
        this.selectedTiles.push(tile);
        
        // Check if we have a pair to check
        if (this.selectedTiles.length === 2) {
            this.moves++;
            this.updateScore();
            this.checkMatch();
        }
    }

    flipTile(tile) {
        tile.classList.add('flipped');
        tile.style.backgroundColor = tile.dataset.color;
    }

    unflipTile(tile) {
        tile.classList.remove('flipped');
        tile.style.backgroundColor = '';
    }

    checkMatch() {
        const [tile1, tile2] = this.selectedTiles;
        const match = tile1.dataset.color === tile2.dataset.color;
        
        this.isLocked = true;
        
        setTimeout(() => {
            if (match) {
                tile1.classList.add('matched');
                tile2.classList.add('matched');
                this.matchedPairs++;
                this.updateScore();
                
                if (this.matchedPairs === this.colors.length) {
                    this.handleGameComplete();
                }
            } else {
                this.unflipTile(tile1);
                this.unflipTile(tile2);
            }
            
            this.selectedTiles = [];
            this.isLocked = false;
        }, 1000);
    }

    handleGameComplete() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 2px solid var(--accent-color);
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            z-index: 100;
        `;
        
        message.innerHTML = `
            <h2>Congratulations!</h2>
            <p>You completed the game in ${this.moves} moves!</p>
            <button onclick="initColorMatch()">Play Again</button>
        `;
        
        this.gameContainer.appendChild(message);
    }

    updateScore() {
        this.scoreDisplay.textContent = `Moves: ${this.moves} | Pairs: ${this.matchedPairs}/${this.colors.length}`;
    }
}

// Initialize the game when the script loads
function initColorMatch() {
    console.log("Initializing Color Match game...");
    new ColorMatch('gameBoard');
}

// Register the game with the loader
if (window.gameLoader) {
    window.gameLoader.registerGame('colormatch', initColorMatch);
} else {
    console.warn('Game loader not found, falling back to direct initialization');
}

// Export the initialization function
window.initColorMatch = initColorMatch; 