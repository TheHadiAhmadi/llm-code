#!/usr/bin/env node
import 'dotenv/config'

import { ChatPromptTemplate } from '@langchain/core/prompts'
import { ChatOpenAI } from '@langchain/openai'
import { glob } from "glob";
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";
import { dirname, join } from 'path'
import { fileURLToPath } from "url";
import { program } from 'commander';
import path from 'path'

program
  .name('llm-code')
  .description('A CLI tool for project indexing and running with prompts.')
  .version('1.0.0');

// Index Mode
program
  .command('index')
  .description('Indexes files in a project.')
  .option('--project <path>', 'Path to the project', process.cwd())
  .option('--files <paths>', 'Comma-separated list of files to index', "**/*") 
  .action((options) => {
    const projectPath = options.project;
    const files = options.files;

    if (!projectPath) {
      console.error('Error: --project is required for index mode.');
      process.exit(1);
    }

    if (!existsSync(projectPath)) {
      console.error(`Error: Project path "${projectPath}" does not exist.`);
      process.exit(1);
    }

    if(files) {
      index(projectPath, files);
    }
    
    
  });

// Run Mode
program
  .command('run')
  .description('Runs a task with a prompt.')
  .option('--project <path>', 'Path to the project', process.cwd())
  .option('--prompt <string>', 'Prompt for the task')
  .action((options) => {
    const projectPath = options.project;
    const prompt = options.prompt;

    if (!projectPath) {
      console.error('Error: --project is required for run mode.');
      process.exit(1);
    }

    if (!existsSync(projectPath)) {
      console.error(`Error: Project path "${projectPath}" does not exist.`);
      process.exit(1);
    }

    if (!prompt) {
      console.error('Error: --prompt is required for run mode.');
      process.exit(1);
    }

    console.log(`Running task on project: ${projectPath}`);
    console.log(`Prompt: ${prompt}`);

    // Add your task execution logic here
    run(projectPath, prompt); // Placeholder for actual task execution logic
  });

program.parse(process.argv);



const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL
})

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


async function summarizeFile(file) {
  try {
    const content = readFileSync(file, "utf-8");

    const result = await runPrompt(
      'summarize-file',
      'Analyze the following file:\n**File:** {file}\n**Content:** ```{content}```',
      { file, content }
    );

    if (!result) {
      console.warn(`Skipping file ${file} due to prompt failure.`);
      return null;
    }
    return result;
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
      return {keywords: [], summary: "Couldn't generate summary. CHECK file based on it's name."}; // Or throw the error, depending on your error handling strategy
  }
}

async function index(projectPath, patterns) {
  const patternArray = patterns.split(",").map((pattern) => pattern.trim());
  let files = [];
  
  for (var pattern of patternArray) {
    const matches = await glob(pattern, {
      ignore: "node_modules/**",
      absolute: false,
      cwd: projectPath,
      posix: true,
    });
    for (const match of [...new Set(matches)]) {
      const fullPath = path.join(projectPath, match);
      const stats = statSync(fullPath);
      if (stats.isFile() && stats.size <= 50 * 1024) {
        files.push(match);
      }
    }
  }

  const memory = {};

  for (const file of files) {
    console.log(`Processing file: ${file}`);
    const result = await summarizeFile(path.join(projectPath, file));
    if (result) {
      memory[file] = result;
    }
  }

  try {
    writeFileSync(path.join(projectPath, ".llm-index.json"), JSON.stringify({ files: memory, prompts: [] }, null, 4));
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

function readMemory(projectPath) {
  if (existsSync(path.join(projectPath, ".llm-index.json"))) {
    return formatMemory(JSON.parse(readFileSync(path.join(projectPath, ".llm-index.json"), "utf-8")));
  } else {
    console.log(
      "llm index doesn't exists, run current command only with index argument",
    );
    process.exit(0);
  }
}

async function runPrompt(name, userPrompt, context) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const promptPath = join(__dirname, `../prompts/${name}.md`); // Assuming prompts are .txt files

  try {
    console.log('[prompt]', name, userPrompt)
    const content = readFileSync(promptPath, 'utf-8');

    const messagesTemplate = ChatPromptTemplate.fromMessages([
      [
        'system',
        content
      ],
      [
        'user',
        userPrompt
      ]
    ]);
    const messages = await messagesTemplate.invoke(context)
    const result = await llm.invoke(messages).then(res =>
      res.content.toString().replace('```json', '').replace('```', '').trim()
    )

    return JSON.parse(result)
  } catch (error) {
    console.log(error)
    console.error(`Error reading prompt file ${name}.md:`, error);
    throw error
  }
}

async function getRequiredFiles(memory, userPrompt) {
  const resp = await runPrompt('get-required-files', userPrompt, { memory })
  return resp
}

async function executePrompt(memory, files, commands, prompt) {

  const context = {
    memory,
    commands,
    files: files.map((file) => `${file.name}:
\`\`\`
${file.content}
\`\`\`
`).join("\n")
  }

  return runPrompt('main-execute', prompt, context)
}

async function run(projectPath, prompt) {
  const memory = readMemory(projectPath);

  const commands = `
    * Write(file, value) - Writes content to a file.
      - **Appending to a File (Adding):**  If the file already exists and you want to *add* content (e.g., at the beginning, end, or specific line), *always* include the **entire existing content** of the file *along with* the new content you want to add.  Integrate the new content into the existing content, adding it in the desired location (e.g., before, after, or in between existing lines). The 'value' should be the full, combined content.  The LLM MUST infer existing content to include when adding a new line.
      - **Updating Part of a File (Modifying):** To update a section, *always* include the **full, updated content** of the file. Identify the section with modifications and replace just that part while retianing other content.  Avoid providing the entire original contents unless absolutely necessary. Focus on the *specific* changes needed, remember all lines should be there after update.
      - **Overwriting the Entire File (Replacing):** If you intend to completely *replace* the file with new content, include the entire new content in the 'value', and specify that you are intended to replace content.
  
    * Echo(message) - Communicates information to the user.  Use this to provide instructions, relay messages, or ask the user to run shell commands.
    `;

  const filesResponse = await getRequiredFiles(memory, prompt);
  console.log("LLM needs these files: ", filesResponse.files);
  let files = [];
  for (let file of filesResponse.files) {
    files.push({ name: file, content: readFileSync(path.join(projectPath, file), "utf-8") });
  }

  const result = await executePrompt(memory, files, commands, prompt);

  for (let command of result.commands) {
    if (command.command == "Write") {
      writeFileSync(path.join(projectPath, command.file), command.value);
      console.log("[Write]: ", path.join(projectPath, command.file));
      savePrompt(projectPath, prompt)
      indexFile(projectPath, command.file);

    }
    if (command.command == "Echo") {
      console.log("[ECHO]: " + command.message);
    }
  }
}

async function savePrompt(projectPath, prompt) {
  let memory = JSON.parse(readFileSync(path.join(projectPath, ".llm-index.json"), "utf-8"));

  if (!memory.files) {
    memory = {
      files: memory,
      prompts: []
    }
  }
  memory.prompts.push(prompt)

  writeFileSync(path.join(projectPath, ".llm-index.json"), JSON.stringify(memory, null, 4))
}

async function indexFile(projectPath, file) {
  try {
    const fileSummary = await summarizeFile(path.join(projectPath, file));
    const memory = JSON.parse(readFileSync(path.join(projectPath, ".llm-index.json"), "utf-8"));
    memory.files[file] = fileSummary;
    writeFileSync(path.join(projectPath, ".llm-index.json"), JSON.stringify(memory, null, 4));
  
  } catch(error) {

    return {keywords: [], summary: "Couldn't generate summary. CHECK file based on it's name."}; // Or throw the error, depending on your error handling strategy
  }

}

// if (mode == "index") {
//   index();
// } else if (mode == "run") {
//   run();
// }
