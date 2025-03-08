from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os
from pathlib import Path

def normalize_name(name):
    """Convert a name to URL-safe format"""
    return name.lower().replace(' ', '_')

class GameServer(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Handle API endpoints
        if self.path == '/api/games':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            games = self.discover_games()
            self.wfile.write(json.dumps(games).encode())
            return
            
        # Serve static files
        return SimpleHTTPRequestHandler.do_GET(self)
    
    def discover_games(self):
        games = []
        games_dir = Path('games')
        print(f"Scanning games directory: {games_dir.absolute()}")
        
        # Skip if games directory doesn't exist
        if not games_dir.exists():
            print("Games directory not found!")
            return games
            
        # Scan game directories
        for game_dir in games_dir.iterdir():
            if not game_dir.is_dir():
                continue
                
            game_id = normalize_name(game_dir.name)
            print(f"\nProcessing game: {game_id}")
            
            # Look for implementations in model subdirectories
            implementations = []
            for model_dir in game_dir.iterdir():
                if not model_dir.is_dir():
                    continue
                    
                metadata_file = model_dir / 'metadata.json'
                print(f"Checking metadata file: {metadata_file}")
                if metadata_file.exists():
                    try:
                        with open(metadata_file) as f:
                            metadata = json.load(f)
                            model_info = metadata['implementation']['model']
                            # Normalize model names
                            model_info['primary'] = normalize_name(model_info['primary'])
                            model_info['debug'] = [normalize_name(m) for m in model_info['debug']]
                            implementations.append({
                                'model': model_info,
                                'version': metadata['implementation']['version'],
                                'directory': model_dir.name  # Store the actual directory name
                            })
                            print(f"Found implementation: {model_info['primary']}")
                    except Exception as e:
                        print(f"Error loading metadata for {game_id}/{model_dir.name}: {e}")
                        continue
            
            # Use metadata from first implementation as game metadata
            if implementations:
                try:
                    first_model_dir = next(d for d in game_dir.iterdir() if d.is_dir())
                    metadata_file = first_model_dir / 'metadata.json'
                    print(f"Loading game metadata from: {metadata_file}")
                    with open(metadata_file) as f:
                        metadata = json.load(f)
                        games.append({
                            'id': game_id,
                            'name': metadata['game']['name'],
                            'category': metadata['game']['category'],
                            'difficulty': metadata['game']['difficulty'],
                            'implementations': implementations
                        })
                        print(f"Successfully added game: {metadata['game']['name']}")
                except Exception as e:
                    print(f"Error loading game metadata for {game_id}: {e}")
                    continue
                    
        print(f"\nTotal games found: {len(games)}")
        return games

def run(server_class=HTTPServer, handler_class=GameServer, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run() 