# Coding Assistant
This project will Help developers understand code base using llm and do some tasks like code review, generate documentation, write code, completion...

## Steps:
### Index the project
Goal of this step is to create json file containing classes/function definitions with their input/output and a summary. (will be sent to llm with each request

* Skip files listed in .gitignore
* Skip binary files
* Skip files larger than a value (50kb)
* foreach file => create json object (filepath, type(function, class, variable),input(argument list), output(data type), summary(one line))
* save all objects to .llm-index.json file

## Analyze User prompt
Get prompt from user and generate prompt using AI. and decide whether send content of some files or not (context will be sent always)

output of prompt => list of useful files, which will be sent to LLM in next prompt.

### Main prompt
Send context and files selected by previous result. with user's prompt. output should be structured json.

type: 'documentation', 'review', 'generate', ...
content: string
... other fields
