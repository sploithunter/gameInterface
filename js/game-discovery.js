/**
 * Game Discovery Service
 * Handles scanning and loading game metadata from the games directory
 */
class GameDiscovery {
    constructor() {
        this.games = new Map();
        this.categories = new Set();
    }

    /**
     * Load all games from the games directory
     * @returns {Promise<Map>} Map of game metadata by game ID
     */
    async loadGames() {
        try {
            const response = await fetch('/api/games');
            const games = await response.json();
            
            // Process each game's metadata
            games.forEach(game => {
                this.games.set(game.id, game);
                if (game.category) {
                    this.categories.add(game.category);
                }
            });

            return this.games;
        } catch (error) {
            console.error('Failed to load games:', error);
            return new Map();
        }
    }

    /**
     * Get all unique game categories
     * @returns {Array<string>} Array of category names
     */
    getCategories() {
        return Array.from(this.categories);
    }

    /**
     * Get games by category
     * @param {string} category Category name
     * @returns {Array} Array of games in the category
     */
    getGamesByCategory(category) {
        return Array.from(this.games.values())
            .filter(game => game.category === category);
    }

    /**
     * Get all games
     * @returns {Array} Array of all games
     */
    getAllGames() {
        return Array.from(this.games.values());
    }

    /**
     * Get game by ID
     * @param {string} gameId Game ID
     * @returns {Object|undefined} Game metadata or undefined if not found
     */
    getGame(gameId) {
        return this.games.get(gameId);
    }
}

// Create global instance
window.gameDiscovery = new GameDiscovery(); 