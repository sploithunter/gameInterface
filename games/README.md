# Game Development Guide

This guide explains how to create and integrate games into the AI Game Interface framework.

## Directory Structure

Each game should follow this structure:

```
games/
└── [game_id]/
    └── [model_id]/
        ├── game.js       # Main game implementation
        ├── metadata.json # Game metadata and development notes
        └── assets/       # (Optional) Any additional assets
```

## Creating a New Game

1. **Create the directory structure**:
   ```bash
   mkdir -p games/your_game_id/your_model_id
   ```

2. **Create the metadata file**:
   Copy the template from `metadata-template.json` and customize it for your game.
   
   ```bash
   cp metadata-template.json games/your_game_id/your_model_id/metadata.json
   ```

3. **Create the game implementation**:
   You can start with the template from `games/template/game-template.js`.
   
   ```bash
   cp games/template/game-template.js games/your_game_id/your_model_id/game.js
   ```

## Game Implementation Guidelines

### Initialization

Your game should expose an initialization function that will be called when the game is loaded. The framework looks for these functions in this order:

1. `init[GameId]()` (e.g., `initSnake()` for a game with ID "snake")
2. `initGame()`
3. A registered initializer via `gameLoader.registerGame()`

Example:

```javascript
function initGame() {
    // Initialize your game here
    const gameBoard = document.getElementById('gameBoard');
    // ...
}

// Export the initialization function
window.initGame = initGame;
```

### Dependencies

If your game requires external libraries (like Three.js, P5.js, etc.), specify them in the `dependencies` section of your metadata.json file:

```json
"dependencies": {
    "scripts": [
        "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"
    ],
    "styles": [
        "/games/shared/common.css"
    ]
}
```

The framework will load these dependencies before initializing your game.

### Game Container

Your game will be provided with a container element with ID `gameBoard`. Use this element to render your game:

```javascript
const gameBoard = document.getElementById('gameBoard');
gameBoard.innerHTML = ''; // Clear any existing content
// Add your game elements to gameBoard
```

### Responsive Design

Make your game responsive to different screen sizes. Use relative units (%, vh, vw) where possible, and consider adding media queries for different screen sizes.

### Performance

Optimize your game for performance. Use requestAnimationFrame for animations, and be mindful of memory usage.

## Testing Your Game

To test your game:

1. Start a local server:
   ```bash
   python -m http.server 8000
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

3. Select your game from the sidebar.

## Example: Minimal Game Implementation

Here's a minimal example of a game implementation:

```javascript
// game.js
function initGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    
    const gameElement = document.createElement('div');
    gameElement.style.width = '100%';
    gameElement.style.height = '400px';
    gameElement.style.backgroundColor = '#333';
    gameElement.style.color = '#fff';
    gameElement.style.display = 'flex';
    gameElement.style.justifyContent = 'center';
    gameElement.style.alignItems = 'center';
    gameElement.textContent = 'Hello, Game World!';
    
    gameBoard.appendChild(gameElement);
}

window.initGame = initGame;
```

## Troubleshooting

- **Game doesn't load**: Check the browser console for errors. Ensure your initialization function is properly exported.
- **Dependencies not loading**: Verify the URLs in your metadata.json file.
- **Game container not found**: Make sure you're using the ID `gameBoard` for your container.

## Advanced Usage

For more complex games, you can use the game loader directly:

```javascript
// Register a custom initializer
gameLoader.registerGame('your_game_id', function() {
    // Custom initialization logic
});
```

You can also load games programmatically:

```javascript
gameLoader.loadGame('your_game_id', 'your_model_id', {
    containerId: 'customContainer'
}).then(metadata => {
    console.log('Game loaded successfully!');
}).catch(error => {
    console.error('Failed to load game:', error);
});
``` 