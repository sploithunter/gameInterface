/**
 * Game Loader Framework
 * A flexible system for loading games with various dependencies
 */

class GameLoader {
    constructor() {
        this.loadedScripts = new Set();
        this.loadedStyles = new Set();
        this.gameInitializers = {};
    }

    /**
     * Register a game initializer function
     * @param {string} gameId - The ID of the game
     * @param {Function} initFunction - The function to initialize the game
     */
    registerGame(gameId, initFunction) {
        this.gameInitializers[gameId] = initFunction;
    }

    /**
     * Load a script dynamically
     * @param {string} url - URL of the script to load
     * @returns {Promise} - Resolves when script is loaded
     */
    loadScript(url) {
        if (this.loadedScripts.has(url)) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => {
                this.loadedScripts.add(url);
                resolve();
            };
            script.onerror = (error) => reject(new Error(`Failed to load script: ${url}`));
            document.head.appendChild(script);
        });
    }

    /**
     * Load a CSS file dynamically
     * @param {string} url - URL of the CSS file to load
     * @returns {Promise} - Resolves when CSS is loaded
     */
    loadCSS(url) {
        if (this.loadedStyles.has(url)) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = () => {
                this.loadedStyles.add(url);
                resolve();
            };
            link.onerror = (error) => reject(new Error(`Failed to load CSS: ${url}`));
            document.head.appendChild(link);
        });
    }

    /**
     * Load a game with its dependencies
     * @param {string} gameId - ID of the game to load
     * @param {string} modelId - ID of the model implementation
     * @param {Object} config - Configuration for the game
     * @returns {Promise} - Resolves when game is loaded
     */
    async loadGame(gameId, modelId, config = {}) {
        try {
            console.log(`Loading game: ${gameId}, model: ${modelId}`);
            
            // Get game data from discovery service
            const game = window.gameDiscovery.getGame(gameId);
            if (!game) {
                throw new Error(`Game not found: ${gameId}`);
            }
            
            // Find the implementation
            const implementation = game.implementations.find(
                impl => impl.model.primary === modelId.toLowerCase()
            );
            if (!implementation) {
                throw new Error(`Implementation not found for model: ${modelId}`);
            }
            
            // Load metadata
            const metadataUrl = `/games/${gameId}/${implementation.directory}/metadata.json`;
            const metadataResponse = await fetch(metadataUrl);
            const metadata = await metadataResponse.json();
            
            // Create container for the game
            const container = document.getElementById(config.containerId || 'gameBoard');
            if (!container) {
                throw new Error(`Container element not found: ${config.containerId || 'gameBoard'}`);
            }
            
            // Clear container
            container.innerHTML = '';
            
            // Load dependencies if specified in metadata
            if (metadata.dependencies) {
                // Load scripts
                if (metadata.dependencies.scripts) {
                    for (const script of metadata.dependencies.scripts) {
                        await this.loadScript(script);
                    }
                }
                
                // Load styles
                if (metadata.dependencies.styles) {
                    for (const style of metadata.dependencies.styles) {
                        await this.loadCSS(style);
                    }
                }
            }
            
            // Create game element
            const gameElement = document.createElement('div');
            gameElement.id = `${gameId}-game`;
            gameElement.className = 'game-instance';
            container.appendChild(gameElement);
            
            // Load game script
            const gameScriptUrl = `/games/${gameId}/${implementation.directory}/game.js`;
            await this.loadScript(gameScriptUrl);
            
            // Initialize the game
            // Look for common initialization patterns
            if (window[`init${gameId.charAt(0).toUpperCase() + gameId.slice(1)}`]) {
                // Pattern: initGameName()
                window[`init${gameId.charAt(0).toUpperCase() + gameId.slice(1)}`]();
            } else if (window.initGame) {
                // Pattern: initGame()
                window.initGame();
            } else if (this.gameInitializers[gameId]) {
                // Registered initializer
                this.gameInitializers[gameId]();
            } else {
                console.warn(`No initializer found for game: ${gameId}. The game may initialize itself.`);
            }
            
            return metadata;
        } catch (error) {
            console.error(`Error loading game ${gameId}:`, error);
            throw error;
        }
    }
}

// Create global instance
window.gameLoader = new GameLoader(); 