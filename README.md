# Artifact Window Demo

A versatile demonstration of various content rendering capabilities in a web-based artifact window.

## Overview

The Artifact Window Demo showcases the ability to render and interact with different types of content in a unified interface. This project demonstrates how various technologies can be integrated into a single web application to provide a rich, interactive experience.

## Features

- **Multiple Content Types**: Renders various content formats including:
  - SVG graphics
  - React components
  - JavaScript code with execution
  - Mermaid diagrams
  - Markdown documents
  - Math.js calculations
  - Three.js 3D scenes
  - p5.js interactive sketches
  - Live Code Editor with multi-language support

- **Live Code Editor**: Interactive code editor with support for:
  - JavaScript
  - HTML
  - JSON
  - Python (using Pyodide for in-browser execution)
  - RTI Connext DDS Python examples (for educational purposes)

- **Interactive UI**: Clean, modern interface with:
  - Sidebar navigation
  - Copy and download functionality
  - Responsive design

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge recommended)
- Basic HTTP server (for local development)

### Running Locally

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/artifact-window-demo.git
   cd artifact-window-demo
   ```

2. Start a local HTTP server:
   ```
   python -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000/index.html
   ```

## Usage

1. Select a test case from the left sidebar to view its content in the main window
2. Interact with the rendered content (where applicable)
3. Use the "Copy" and "Download" buttons to save or share the content

### Live Code Editor

The Live Code Editor allows you to:
- Write and execute code in real-time
- Switch between multiple programming languages
- View execution results and console output
- Test algorithms and code snippets without leaving the page

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Libraries**:
  - React for component rendering
  - Mermaid.js for diagrams
  - Math.js for mathematical calculations
  - Three.js for 3D graphics
  - p5.js for creative coding
  - CodeMirror for the code editor
  - Pyodide for in-browser Python execution

## License

This project is licensed under the Apache License 2.0 - see below for details:

```
Copyright 2025 Artifact Window Demo Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## Acknowledgments

- [React](https://reactjs.org/)
- [Mermaid.js](https://mermaid-js.github.io/mermaid/)
- [Math.js](https://mathjs.org/)
- [Three.js](https://threejs.org/)
- [p5.js](https://p5js.org/)
- [CodeMirror](https://codemirror.net/)
- [Pyodide](https://pyodide.org/)
- [RTI Connext DDS](https://www.rti.com/products/connext-dds-professional) 