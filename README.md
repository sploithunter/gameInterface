# Game Interface

A web-based platform for showcasing and comparing different implementations of the same game concepts across various AI models and approaches.

## Overview

Game Interface is an interactive platform that demonstrates how different AI models interpret and implement the same game concepts. This project serves as both a playground and a research tool, allowing users to:

- Play different versions of the same game
- Compare implementations across different AI models
- Understand how different models interpret game mechanics
- Experience the creative diversity in AI-generated game design

## Features

### Game Showcase
- Multiple game categories
- Side-by-side comparison of implementations
- Interactive gameplay directly in the browser
- Real-time performance metrics

### Implementation Categories
Each game can have multiple implementations from:
- Different AI models (e.g., GPT-4, Claude, PALM)
- Various programming approaches
- Different visual styles
- Unique gameplay mechanics

### Technical Details
- Pure web-based implementation
- No installation required
- Mobile-friendly interface
- Built with modern web technologies

## Game Library

Current games in our collection:
*(To be populated as games are added)*

Each game includes:
- Original prompt/concept
- Multiple implementations
- Comparison metrics
- Performance analysis
- Source code

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sploithunter/gameInterface.git
```

2. Start a local server:
```bash
python -m http.server 8000
```

3. Open in your browser:
```
http://localhost:8000
```

## Contributing

We welcome contributions! If you'd like to add:
- New game concepts
- Alternative implementations
- Performance improvements
- UI/UX enhancements

Please submit a pull request with your changes.

## Project Structure

```
gameInterface/
├── index.html          # Main interface
├── games/             # Game implementations
│   ├── game1/
│   │   ├── model1/    # Implementation by AI model 1
│   │   ├── model2/    # Implementation by AI model 2
│   │   └── ...
│   ├── game2/
│   └── ...
├── assets/            # Shared resources
└── docs/             # Documentation
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original template from artifact_window project
- All contributing AI models and their respective organizations
- Open source game development community 