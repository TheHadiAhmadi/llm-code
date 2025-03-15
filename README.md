# LLM Code Project
This project is a command-line interface (CLI) tool designed for indexing project files and performing prompt-based tasks using AI language models.

## Features
- **Indexing:** Efficiently indexes project files, extracting key elements and generating summaries.
- **Task Execution:** Executes user-defined prompts against the indexed files for documentation generation, code reviews, and more.

## Installation
To get started, you can create empty nodejs project `npm init -y`then install llm-code:

```
npm install git+https://github.com/TheHadiAhmadi/llm-code.git
```

## Usage


### Indexing Files
To index files in your project, use the following command:

```
npx llm-code index --project <path> --files <patterns>
```

### Running Tasks
To run a task with a prompt, execute:
```
npx llm-code run --project <path> --prompt "<your prompt>"
```

## Project Structure
- **src/main.js:** Contains the core functionality for indexing and executin
g tasks.
- **prompts/:** Directory housing prompt templates used for task execution.

## Requirements
- Node.js
- OpenAI API Key

## Installation
To get started, clone the
repository and install dependencies:
```
npm install
```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License
This project is licensed under the MIT License.
