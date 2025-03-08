# Game Interface Documentation

This directory contains documentation and templates for creating games for the Game Interface showcase.

## Contents

- **game_creation_instructions.md**: Comprehensive instructions for AI models on how to create a basic game for the showcase.
- **sample_game_prompt.md**: A sample prompt that would be given to an AI model to implement a basic game.
- **metadata_template.json**: A template for the metadata.json file that AI models should use to document their game implementation.
- **game_template.js**: A basic game.js template that AI models can use as a starting point for their implementation.
- **game_creation_checklist.md**: A checklist for AI models to follow when creating a game to ensure all requirements are met.

## Purpose

These documents serve as guidelines and templates for generative AI models to create games for the Game Interface showcase. The goal is to provide a consistent structure for game implementations while allowing for creative interpretation of game prompts.

## How to Use

1. Start by reading the **game_creation_instructions.md** file to understand the overall process and requirements.
2. Use the **sample_game_prompt.md** as a reference for the type of prompts that will be given.
3. Use the **metadata_template.json** as a starting point for documenting your game implementation.
4. Use the **game_template.js** as a foundation for your game code.
5. Follow the **game_creation_checklist.md** to ensure your implementation meets all requirements.

## Game Implementation Structure

Each game implementation should follow this structure:

```
games/
└── [game_name]/
    └── [model_name]/
        ├── game.js       # Main game implementation
        ├── metadata.json # Game metadata and development notes
        └── assets/       # (Optional) Any additional assets
```

## Example

For reference, see the existing "ColorMatch" game implementation by Claude Sonnet 3.5 in the `games/colormatch/claude/` directory. 