#!/usr/bin/env node

import { glob } from 'glob';
import { OpenAI } from "openai";
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";

let patterns = ''
let mode = ''
const args = process.argv
if(args.indexOf('--files')) {
    patterns = process.argv[args.indexOf('--files') + 1]
}

if(args.includes('index')) {
    mode = 'index'
} else if (args.includes('run')) {
    mode = 'run'
} else {
    console.log('add one of index or run parameters to cli')
    process.exit(0)
}


const openai = new OpenAI();

// Configuration options to improve prompt engineering and reduce repetition
// const MODEL = 'deepseek/deepseek-R1';
const MODEL = "openai/gpt-4o-mini";
const RESPONSE_FORMAT = { type: "json_object" };

async function runPrompt(system, user) {

  try {
    const options = {
      model: MODEL,
      response_format: RESPONSE_FORMAT,
      messages: [
        { role: "system", content: [{ type: "text", text: system }] },
        { role: "user", content: [{ type: "text", text: user }] },
      ],
    };
    const response = await openai.chat.completions.create(options);


    if (!response.choices || response.choices.length === 0) {
      console.error("No choices returned from OpenAI API.");
      return null; // Or throw an error, depending on your error handling strategy
    }

    if (!response.choices[0].message || !response.choices[0].message.content) {
      console.error("No message content returned from OpenAI API.");
      return null;
    }

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in runPrompt:", error);
    // Handle specific OpenAI errors if you want more granular error reporting
    if (error.response) {
      console.error(
        "OpenAI API Error details:",
        error.response.status,
        error.response.data
      );
    }
    return null;
  }
}

async function summarizeFile(file) {
  try {
    const content = readFileSync(file, "utf-8");
    const prompt = `You are an expert file analyzer AI. Your task is to analyze the content of a given file and provide a concise JSON-formatted summary.

## Instructions:

1.  **Analyze the file content:** carefully read the content of the provided file.
2.  **Extract key data:** Identify the most important information within the file. This includes functions, classes, variables, exports, and general purpose of the file.
3.  **Create a JSON object:** Structure your analysis into a JSON object with the following fields:

    \`\`\`json
    {
      "summary": "string", // A one or two-line summary of the file's purpose and functionality.
      "keywords": [string], // List of keywords (maximum 6 items)
      "nodes": [ // An array of objects, where each object represents a significant element (function, class, variable, etc.) in the file.
        {
          "type": "string", // The type of element (e.g., "function", "class", "variable", "export").
          "name": "string", // The name of the element (if applicable).
          "summary": "string", // A one-line summary of the element's functionality or purpose.
          "keywords": [string], // List of keywords (maximum 6 items)
          "loc": [number, number] // start and end line of the element in the file.
        }
        // ... more nodes
      ]
    }
    \`\`\`

4.  **Be Concise:** Keep summaries brief and to the point.
5.  **Focus on Functionality:**  The 'summary' fields should describe *what* the code does.
6.  **Return JSON Only:**  Your output should *only* be the JSON object.  Do not include any additional text or conversational elements.

## Considerations:
  Do not add unnecessary sections like importing some libraries/files, or variable definition, or local functions...
  Only index user features which will be exported or is important. 
  summary should be descriptive and define what does this file/node do. 
  Your goal is to generate document which will be used by another LLM to find the most related files from user's prompt
  keywords are used later to search for related codes.

## Example:

**Input:**  (Content of a file named \`utils.js\` containing <actual source of the file>)

**Output:**

\`\`\`json
{
  "summary": "Provides utility functions for mathematical operations.",
  "keywords": ["utilities", "add", "arithmetic"],
  "nodes": [
    {
      "type": "function",
      "name": "add",
      "summary": "Adds two numbers together.",
      "keywords" ["add", "util", "math"],
      "loc": [1, 4]
    }
  ]
}
\`\`\`

`;

    const result = await runPrompt(
      prompt,
      `Analyze the following file:
**File:** ${file}
**Content:** ${content}
`
    );
    if (!result) {
      console.warn(`Skipping file ${file} due to prompt failure.`);
      return null; // or throw error
    }
    return result;
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
    return null; // or throw error
  }
}

async function index() {
    const patternArray = patterns.split(',').map(pattern => pattern.trim());
    let files = [];

    const path = process.cwd() + '/'

    for(var pattern of patternArray) {
        const matches = await glob(pattern, { ignore: 'node_modules/**', absolute: false, cwd: process.cwd(), posix: true});  // process.cwd() is the current working directory

        for (const match of [...new Set(matches)]) {
            const fullPath = path + match; // Create absolute path for file size check
            const stats = statSync(fullPath); // Use synchronous stat to simplify the filtering
            if (stats.isFile() && stats.size <= 50 * 1024) {
              files.push(match); // Push the RELATIVE paths (as returned by glob)
            }
          }

    }

  const memory = [];

  for (const file of files) {
    console.log(`Processing file: ${file}`);
    const result = await summarizeFile(file);
    if (result) {
      try {
        // Attempt to parse the returned JSON. If it fails, it indicates a problem with the LLM's output.
        const parsedResult = JSON.parse(result);
        parsedResult.file = file;
        memory.push(parsedResult);
      } catch (parseError) {
        console.error(
          `Error parsing JSON from file ${path + file}:`,
          parseError
        );
        console.error("Raw LLM Output:", result); // Log the raw output for debugging
        // You might want to push a fallback object to memory, or skip the file, depending on your needs.
        memory.push({
          name: file,
          summary: "Failed to generate a valid summary.",
          error: "JSON parsing error",
        }); // or continue;
      }
    }
  }

  try {
    writeFileSync(".llm-index.md", formatMemory(memory));
    console.log("Index file created successfully.");
  } catch (writeError) {
    console.error("Error writing to .llm-index.json:", writeError);
  }
}

function formatMemory(memory) {
    let result = `## Project files

This section is the list of available files in current directory

nodes are formatted like this: 
[type] name - summary (keywords)

`


    for(let file of memory) {
        console.log('processing ' + file.file)
        result += `
* **${file.file}**:
    Summary: ${file.summary}
    Keywords: ${file.keywords}
    Nodes: 
${file.nodes.map(node => {
        return `         * [${node.type}] ${node.name} - ${node.summary} (${node.keywords})`
    }).join('\n')}

`
    }

    result += '---- end of files ----'
    return result
} 
//         * [function] add - Add two numbers together (abc, def, ghi)

async function analyzePrompt(prompt) {
    // goal of this function is to analyze user's prompt and choose relaed files to pass to llm in next step. (most related files to the user's request) index of all available files are available in llmIndex variable

}

// writeFileSync('.llm-index.md', 
// formatMemory(JSON.parse(readFileSync('./.llm-index.json', 'utf-8')))
// )
function readMemory() {
    if(existsSync('.llm-index.md')) {
        return readFileSync('./.llm-index.md', 'utf-8')
    } else {
        console.log("llm index doesn't exists, run current command only with index argument")
        process.exit(0)
    }
}

function getRequiredFiles(memory, prompt) {
    return runPrompt(`You are given a prompt text, and list of available files, you should decide content of which files do you need to run the task. return List of needed files (names) as json object. 
Object should have "files" key which is an array.
if list of available files are small, you can request all files. you should not request more than 6 files.

only include files which are available in the list, don't return files which are not exist. return empty array if there is no file in the project.

${memory}

## output format
{"files": ["file1", "file2", "file3"]}

## Example:
input: add jwt authentication for the server
output: {files: ["main.js", "helpers/auth.js", "helpers/hash.js"]}

`, prompt)

}

const commands = `
* Write(file, value) -  write value to file.  
* Echo(message) - Tell something to user like instructions, message or ask to run shell commands.
`

async function executePrompt(memory, files, commands, prompt) {
    return runPrompt(`
You are an expert software engineer, You are given a task you should accomplish it by running commands. Here is list of available commands:
${commands}

${memory}

Here is content of the files which would be useful:
${files.map(file => `${file.name}:
\`\`\`
${file.content}
\`\`\``).join('\n')}

You should return json object with commands field. commands is an array which contains (command: string), ([arg]: string), ([arg2]: string) args are based on tool. command value is the name of tool/command.
each command has different arguments which defined above.
If you want to update a file, you should always write entire file, otherwise file would break. 
Do not use placeholder comments for user to write skipped parts of the code. Always write entire file.

Example:
input: write hello world app in js.
output:
{
    "commands": [
        {
            "command": "Write",
            "value": "console.log(\"Hello World!\")",
            "file": "main.js"
        },
        {
            "command": "Write",
            "value": "# Hello world app",
            "file": "README.md"
        },
        {
            "command": "Echo",
            "message": "To run the file you should execute node main.js command"
        }
        // ... more files if needed for the prompt.
    ]
}
`, prompt)
}

async function run() {
    const memory = readMemory()

    const runIndex = process.argv.indexOf('run')
    const prompt = process.argv[runIndex + 1]

    const filesResponse = JSON.parse(await getRequiredFiles(memory, prompt))

    console.log(filesResponse)
    let files = []
    for(let file of filesResponse.files) {
        files.push({name: file, content: readFileSync(file, 'utf-8')})
    }


    const result = JSON.parse(await executePrompt(memory, files, commands, prompt))

    for(let command of result.commands) {
        if(command.command == 'Write') {
            writeFileSync(command.file, command.value)
            console.log("wrote file: ", command.file)
        }
        if(command.command == 'Echo') {
            console.log('[ECHO]: ' + command.message)

        }
    }
    
    // analyze user prompt

}

if(mode == 'index') {
    index();
} else if(mode == 'run') {
    run()
}


















