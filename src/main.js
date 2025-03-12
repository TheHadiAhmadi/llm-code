#!/usr/bin/env node

import { glob } from "glob";
import { OpenAI } from "openai";
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";

let patterns = "";
let mode = "";
const args = process.argv;
if (args.indexOf("--files")) {
  patterns = process.argv[args.indexOf("--files") + 1];
}

if (args.includes("index")) {
  mode = "index";
} else if (args.includes("run")) {
  mode = "run";
} else {
  console.log("add one of index or run parameters to cli");
  process.exit(0);
}

const openai = new OpenAI();

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
      return null;
    }

    if (!response.choices[0].message || !response.choices[0].message.content) {
      console.error("No message content returned from OpenAI API.");
      return null;
    }

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in runPrompt:", error);
    if (error.response) {
      console.error(
        "OpenAI API Error details:",
        error.response.status,
        error.response.data,
      );
    }
    return null;
  }
}

async function summarizeFile(file) {
  try {
    const content = readFileSync(file, "utf-8");
    const prompt = `You are an expert AI file analyzer. Your task is to analyze the content of a given file and provide a detailed JSON-formatted summary including comprehensive information about the file, such as its purpose, functionalities, significant functions/classes, and any important interactions with other components.\n\n## Instructions:\n\n1. **Analyze the file content:** Carefully read the content of the provided file.\n2. **Extract key data:** Identify the most important information within the file, including classes, functions, variables, exports, and the overall purpose of the file.\n3. **Create a JSON object:** Structure your analysis into a JSON object with the following fields:\n\`{\n  \"summary\": \"string\", // A concise summary of the file's purpose and functionality.\n  \"keywords\": [string], // List of keywords, each representing a significant element in the file.\n}\`\n4. **Be Concise:** Keep summaries brief and to the point, but include essential details.\n5. **Focus on Functionality:** The 'summary' field should describe *what* the code does.\n6. **Return JSON Only:** Your output should *only* be the JSON object. Do not include any additional text or conversational elements.\n\n## Considerations:\nDo not add unnecessary sections like imports or local functions. Focus on user-facing features. Your goal is to generate a document to be used by another LLM to find related files from user prompts. Keywords will be used for later code searches.\n\n## Example:\n\n**Input:**  (Content of a file named \`utils.js\` containing <actual source of the file>)\n\n**Output:**\n\`{\n  \"summary\": \"Provides utility functions for mathematical operations.\",\n  \"keywords\": [\"utilities\", \"add\", \"arithmetic\", \"math\"]}\``; 

    const result = await runPrompt(
      prompt,
      `Analyze the following file:\n**File:** ${file}\n**Content:** ${content}\n`,
    );

    if (!result) {
      console.warn(`Skipping file ${file} due to prompt failure.`);
      return null;
    }
    return JSON.parse(result);
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
    return null;
  }
}

async function index() {
  const patternArray = patterns.split(",").map((pattern) => pattern.trim());
  let files = [];
  const path = process.cwd() + "/";

  for (var pattern of patternArray) {
    const matches = await glob(pattern, {
      ignore: "node_modules/**",
      absolute: false,
      cwd: process.cwd(),
      posix: true,
    });
    for (const match of [...new Set(matches)]) {
      const fullPath = path + match;
      const stats = statSync(fullPath);
      if (stats.isFile() && stats.size <= 50 * 1024) {
        files.push(match);
      }
    }
  }

  const memory = {};

  for (const file of files) {
    console.log(`Processing file: ${file}`);
    const result = await summarizeFile(file);
    if (result) {
      memory[file] = result;
    }
  }

  try {
    writeFileSync(".llm-index.json", JSON.stringify({ files: memory, prompts: [] }, null, 4));
    console.log("Index file created successfully.");
  } catch (writeError) {
    console.error("Error writing to .llm-index.json:", writeError);
  }
}

function formatMemory(memory) {
  if (!memory.files) {
    memory = {
      files: memory,
      prompts: []
    }
  }
  let result = `## Project files\n\nThis section is the list of available files in current directory\n\n`;
  for (let key in memory.files) {
    result += `\n### **${key}**:\n    Summary: ${memory.files[key].summary}\n    Keywords: ${memory.files[key].keywords}\n`;
  }
  result += "---- end of files ----";
  return result;
}

function readMemory() {
  if (existsSync(".llm-index.json")) {
    return formatMemory(JSON.parse(readFileSync("./.llm-index.json", "utf-8")));
  } else {
    console.log(
      "llm index doesn't exists, run current command only with index argument",
    );
    process.exit(0);
  }
}

async function getRequiredFiles(memory, prompt) {
  return runPrompt(
    `You are given a prompt text, and list of available files, you should decide content of which files do you need to run the task. return List of needed files (names) as json object. \nObject should have \"files\" key which is an array.\nif list of available files are small, you can request all files. you should not request more than 6 files.\n\nIMPORTANT: only include files which are available in the files list, don't return files which are not exist. return empty array if there is no file in the project. \n\n${memory}\n\n## output format\n{\"files\": [\"file1\", \"file2\", \"file3\"]}\n\n## Example:\ninput: add jwt authentication for the server\noutput: {files: [\"main.js\", \"helpers/auth.js\", \"helpers/hash.js\"]}\n\n`,
    prompt,
  );
}

async function executePrompt(memory, files, commands, prompt) {
  return runPrompt(
    `You are an expert AI software engineer. Follow these strict guidelines:

1. Planning & Analysis:
- Carefully analyze existing code structure and dependencies
- Preserve consistent coding style and patterns
- Consider error handling and edge cases
- Validate against project requirements

2. Code Quality:
- Follow SOLID principles
- Adhere to DRY (Don't Repeat Yourself)
- Implement secure coding practices
- Optimize for readability and maintainability

3. Task Execution:
- Use precise file paths and imports
- Maintain backward compatibility where needed
- Include documentation for complex changes
- Validate all file operations

Available Commands:
${commands}

File Context:
${files.map(file => `${file.name}:\n\`\n${file.content}\n\`\n`).join("\n")}

Response Format:
{
  "commands": [{
    "command": "Write|Echo",
    "params": {
      "file": "filename.ext",
      "content": "exact content",
      "message": "user message"
    }
  }],
  "explanation": "### Markdown explanation\n- Change rationale\n- Affected components\n- Validation steps",
  "safety_check": [
    "Confirmed backward compatibility",
    "Verified error handling",
    "Checked security implications"
  ]
}`,
    prompt,
  );
}

async function run() {
  const memory = readMemory();
  const runIndex = process.argv.indexOf("run");
  const prompt = process.argv[runIndex + 1];

  const commands = `
    * Write(file, value) - Writes content to a file.
      - **Appending to a File (Adding):**  If the file already exists and you want to *add* content (e.g., at the beginning, end, or specific line), *always* include the **entire existing content** of the file *along with* the new content you want to add.  Integrate the new content into the existing content, adding it in the desired location (e.g., before, after, or in between existing lines). The 'value' should be the full, combined content.  The LLM MUST infer existing content to include when adding a new line.
      - **Updating Part of a File (Modifying):** To update a section, *always* include the **full, updated content** of the file. Identify the section with modifications and replace just that part while retianing other content.  Avoid providing the entire original contents unless absolutely necessary. Focus on the *specific* changes needed, remember all lines should be there after update.
      - **Overwriting the Entire File (Replacing):** If you intend to completely *replace* the file with new content, include the entire new content in the 'value', and specify that you are intended to replace content.
  
    * Echo(message) - Communicates information to the user.  Use this to provide instructions, relay messages, or ask the user to run shell commands.
    `;

  const filesResponse = JSON.parse(await getRequiredFiles(memory, prompt));
  console.log("LLM needs these files: ", filesResponse.files);
  let files = [];
  for (let file of filesResponse.files) {
    files.push({ name: file, content: readFileSync(file, "utf-8") });
  }

  const result = JSON.parse(
    await executePrompt(memory, files, commands, prompt),
  );

  for (let command of result.commands) {
    if (command.command == "Write") {
      writeFileSync(command.file, command.value);
      console.log("wrote file: ", command.file);
      savePrompt(prompt)
      indexFile(command.file, prompt);

    }
    if (command.command == "Echo") {
      console.log("[ECHO]: " + command.message);
    }
  }
}

async function savePrompt(prompt) {
  let memory = JSON.parse(readFileSync("./.llm-index.json", "utf-8"));

  if (!memory.files) {
    memory = {
      files: memory,
      prompts: []
    }
  }
  memory.prompts.push(prompt)

  writeFileSync("./.llm-index.json", JSON.stringify(memory, null, 4))
}
async function indexFile(file) {
  const fileSummary = await summarizeFile(file);

  const memory = JSON.parse(readFileSync("./.llm-index.json", "utf-8"));

  memory.files[file] = fileSummary;

  writeFileSync("./.llm-index.json", JSON.stringify(memory, null, 4));
}

if (mode == "index") {
  index();
} else if (mode == "run") {
  run();
}
