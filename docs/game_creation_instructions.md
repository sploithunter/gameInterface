# Game Creation Instructions for AI Models

## Related Resources

Before proceeding with game creation, please review these helpful resources:

- **Sample Game Prompt** (`sample_game_prompt.md`): Contains a detailed example of a game prompt and its requirements
- **Game Template** (`game_template.js`): A starter template with basic game structure and common functionality
- **Metadata Template** (`metadata_template.json`): Template for documenting your game implementation
- **Creation Checklist** (`game_creation_checklist.md`): Step-by-step checklist to ensure all requirements are met

## Overview

This document provides instructions for generative AI models on how to create a basic game for the Game Interface showcase. The goal is to create a simple, functional game that demonstrates your capabilities while following a consistent structure for comparison with other AI-generated games.

## Game Requirements

### Basic Requirements
- Create a browser-based game using HTML, CSS, and JavaScript
- Game should be playable on desktop and mobile devices
- Implementation should be self-contained within the provided file structure
- Code should be well-commented to explain your reasoning and approach
- Game should have clear win/lose conditions and scoring mechanism
- Total development time should be tracked and reported

### Technical Constraints
- Use vanilla JavaScript (no external libraries or frameworks)
- All game assets must be created programmatically (no external images)
- Game must run in modern browsers without requiring additional plugins
- Code must be properly structured and follow best practices
- Maximum file size: 10KB for JavaScript, 5KB for CSS

## Development Process

To ensure you don't miss any important steps, use the provided checklist in `game_creation_checklist.md` as you work through each phase.

### Step 1: Understand the Prompt
- Carefully analyze the game prompt provided by the user
- Identify key requirements, mechanics, and expected gameplay
- Consider different interpretations and approaches to the prompt

### Step 2: Plan Your Implementation
- Outline the core game mechanics and rules
- Design the game structure (classes, functions, data structures)
- Plan the user interface and interaction patterns
- Consider potential challenges and edge cases

### Step 3: Implement the Game

To get started quickly, use the provided `game_template.js` as your foundation. This template includes:
- Basic game structure and UI setup
- Score tracking and display
- Game state management
- Event handling framework
- Responsive styling

Steps to implement your game:
1. Create the basic HTML structure
2. Implement the CSS styling for visual elements
3. Develop the core game logic in JavaScript
4. Add user interaction handling
5. Implement win/lose conditions and scoring
6. Add polish (animations, sounds, feedback)

### Step 4: Test and Refine
- Test the game functionality across different scenarios
- Identify and fix any bugs or issues
- Optimize performance if needed
- Ensure responsive design works on different screen sizes

### Step 5: Document Your Process
- Track development time for each major component
- Document challenges encountered and solutions implemented
- Note any creative decisions or alternative approaches considered
- Provide instructions for players

## File Structure

Your game should follow this file structure:
```
games/
└── [game_name]/
    └── [model_name]/
        ├── game.js       # Main game implementation
        ├── metadata.json # Game metadata and development notes
        └── assets/       # (Optional) Any additional assets
```

## Metadata Format

Use the provided `metadata_template.json` as a starting point for your game's metadata. This template includes all required fields and examples of how to fill them out.

The `metadata.json` file should follow this structure:
```json
{
    "game": {
        "name": "Game Name",
        "category": "Game Category",
        "originalPrompt": "The original prompt text",
        "difficulty": "Beginner/Intermediate/Advanced"
    },
    "implementation": {
        "model": "Your Model Name",
        "version": "Your Model Version",
        "dateCreated": "YYYY-MM-DD",
        "timeSpent": 0,
        "assistingModels": [],
        "developmentEnvironment": {
            "primaryIDE": "IDE Name",
            "extensions": [
                "List of relevant extensions or tools"
            ]
        }
    },
    "development": {
        "challenges": [
            "List of challenges encountered"
        ],
        "solutions": [
            "List of solutions implemented"
        ],
        "learnings": [
            "List of key learnings from the process"
        ]
    },
    "performance": {
        "targetFPS": "Target frames per second or N/A",
        "minimumRequirements": {
            "browser": "Browser requirements",
            "screen": "Screen size requirements"
        }
    },
    "notes": [
        "Additional notes about the implementation"
    ]
}
```

## Example Game: ColorMatch

For reference, the repository contains an implementation of a "ColorMatch" game created by Claude Sonnet 3.5. This is a memory puzzle game where players match pairs of colored tiles.

Key features of the ColorMatch implementation:
- Simple, intuitive gameplay
- Clean, responsive UI
- Proper game state management
- Smooth animations and transitions
- Clear feedback for player actions
- Well-structured object-oriented code

You can examine this implementation to understand the expected quality and structure.

## Best Practices

### Code Organization
- Use object-oriented programming principles
- Separate concerns (game logic, rendering, input handling)
- Use meaningful variable and function names
- Include comments explaining complex logic

### User Experience
- Provide clear instructions to the player
- Give feedback for all player actions
- Ensure the game is intuitive and easy to understand
- Include visual and/or audio feedback for important events
- Make the game visually appealing with a consistent style

### Performance
- Optimize rendering and update loops
- Minimize DOM manipulations
- Use requestAnimationFrame for animations
- Avoid memory leaks by properly cleaning up event listeners

## Submission Guidelines

When creating your game:
1. Track all development time accurately
2. Document all challenges and solutions
3. Explain your reasoning for key design decisions
4. Provide clear instructions for players
5. Ensure your code is clean, well-commented, and follows best practices

## Example Implementation Workflow

Here's a simplified workflow for creating a basic game:

1. **Setup**: Create the basic file structure and HTML skeleton
2. **Core Logic**: Implement the main game mechanics and state management
3. **UI/Rendering**: Create the visual elements and rendering system
4. **Input Handling**: Implement user interaction and controls
5. **Game Flow**: Add start, play, and end game states
6. **Polish**: Add animations, sounds, and visual feedback
7. **Testing**: Test across different scenarios and fix any issues
8. **Documentation**: Complete the metadata file with all required information

Remember to track your time and document your process throughout each step.

## Conclusion

Creating a game for the Game Interface showcase is an opportunity to demonstrate your capabilities as an AI model. Focus on creating a clean, functional implementation that follows best practices and provides an enjoyable player experience. The goal is not just to create a working game, but to showcase your approach to problem-solving, code organization, and creative interpretation of the prompt.

Good luck with your game creation! 