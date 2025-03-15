#!/usr/bin/env node
import 'dotenv/config'

import crypto from 'crypto'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { ChatOpenAI } from '@langchain/openai'
import { glob } from "glob";
import { createReadStream, existsSync, readFileSync, rmSync, statSync, writeFileSync } from "fs";
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

    if (files) {
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
  model: 'openai/gpt-4o-mini'
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
    return { keywords: [], summary: "Couldn't generate summary. CHECK file based on it's name." }; // Or throw the error, depending on your error handling strategy
  }
}

async function index(projectPath, patterns) {
  const patternArray = patterns.split(",").map((pattern) => pattern.trim());
  let files = [];

  const defaultIgnoreList = [
    "node_modules/**",
    ".git",
  ]
  let gitignore = []
  for (var pattern of patternArray) {
    const gitignoreFile = path.join(projectPath, '.gitignore')
    if(existsSync(gitignoreFile)) {
      gitignore = readFileSync(gitignoreFile, 'utf-8').split('\n')
    }
    const matches = await glob(pattern, {
      ignore: [...defaultIgnoreList, ...gitignore],
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

  let memory = {};

  if (existsSync(path.join(projectPath, '.llm-index.json'))) {
    try {
      let result = JSON.parse(readFileSync(path.join(projectPath, '.llm-index.json') ?? '{}', 'utf8'))
      memory = result.files
    } catch (err) {
      memory = {}
    }
  }

  for (const file of files) {
    console.log(`Processing file: ${file}`);
    const fileHash = await getHash(path.join(projectPath, file))
    if (Object.keys(memory).find(x => memory[x].hash === fileHash)) {
      // file exists
    } else {
      const result = await summarizeFile(path.join(projectPath, file));
      if (result) {
        result.hash = fileHash
        memory[file] = result;

        try {
          writeFileSync(path.join(projectPath, ".llm-index.json"), JSON.stringify({ files: memory, prompts: [] }, null, 4));
          console.log("file indexed successfully.");
        } catch (writeError) {
          console.error("Error writing to .llm-index.json:", writeError);
        }
      }
    }
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

    console.log({ result })
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

const commands = [{
  name: 'Write',
  arguments: ['file', 'search', 'replace'],
  description: 'Writes content to a file',
  notes: [
    `- When editing a file, search is the existing text in the code which should be unique, if there is multiple similar section, add some lines before and after to make it unique.`,
    `- To create a new file, search should be empty string and file should be unique across the repo. don't use existing file name.`,
    `- To delete a file, search and replace both should be empty string`,
    `- To move a section of code from one file to another file, use 2 Write command to remove code from file1 and write code to file2`,
    `- Do not remove comments or other less important elements if user doidn't asked`,
    `- Ensure search text is unique, to be sure you can add two lines before and two lines after, and include those lines in replace section too.`

  ],
  async handler({ file, search, replace }, {projectPath}) {
    // confirm changes
    // writeFileSync(path.join(projectPath, file), command.value);
    // savePrompt(projectPath, prompt)
    const filepath = path.join(projectPath, file)

    if (!search && replace) {
      // create file
      console.log("[Created file]: ", filepath);

      writeFileSync(filepath, replace);
    }
    if (!search && !replace) {
      // create file
      console.log("[Removed file]: ", filepath);

      rmSync(filepath)
    }

    if (search) {
      // create file
      console.log("[Updated file]: ", filepath);

      const content = readFileSync(filepath, 'utf-8')
      writeFileSync(filepath, content.replace(search, replace))
      // rmSync(filepath)
    }
    await indexFile(projectPath, file);
  }
}, {
  name: 'Echo',
  arguments: ['message'],
  description: 'Write message to console for the user.',
  notes: [
    `- Messages should be concise and not long. at most one paragraph. if you want to write long message, use multiple Echo blocks`,
    `- one usage of this command is when user should do some action like installing dependencies or running shell commands`,
  ],
  async handler({ message }, {projectPath}) {
    console.log('[Echo] ' + message)
  }
}]

const commands_str = commands.map(command => `
* ${command.name}(${command.arguments.join(', ')}) - ${command.description}
${command.notes.map(note => `- ` + note).join('\n')}
`).join('\n')

async function run(projectPath, prompt) {
  const memory = readMemory(projectPath);

  const filesResponse = await getRequiredFiles(memory, prompt);
  console.log("LLM needs these files: ", filesResponse.files);
  let files = [];
  for (let file of filesResponse.files) {
    files.push({ name: file, content: readFileSync(path.join(projectPath, file), "utf-8") });
  }

  const result = await executePrompt(memory, files, commands_str, prompt);

  for (let command of result.commands) {
    const handler = commands.find(x => x.name === command.command).handler
    await handler(command, {projectPath})
    await savePrompt(projectPath, prompt)
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
    let memory = JSON.parse(readFileSync(path.join(projectPath, ".llm-index.json"), "utf-8"));

    if (!existsSync(path.join(projectPath, file))) {
      delete memory.files[file];
    } else {
      const fileSummary = await summarizeFile(path.join(projectPath, file));
      memory.files[file] = fileSummary;
    }
    writeFileSync(path.join(projectPath, ".llm-index.json"), JSON.stringify(memory, null, 4));
  } catch (error) {
    // return { keywords: [], summary: "Couldn't generate summary. CHECK file based on it's name." }; // Or throw the error, depending on your error handling strategy
  }

}

function getHash(path) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const rs = createReadStream(path);
    rs.on('error', reject);
    rs.on('data', chunk => hash.update(chunk));
    rs.on('end', () => resolve(hash.digest('hex')));
  })
}