import { OpenAI } from 'openai'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { existsSync } from 'fs'

const client = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENAI_API_KEY
})

const llm = async (system, user) => {

    const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user }
        ]
    })

    const res = response.choices[0].message.content
    return JSON.parse(res)
}

async function generatePrompt(goal) {
    const result = await llm('You are an expert prompt engineer. return json object with prompt: string field', `Generate a clean and simple prompt to achieve this goal: ${goal}`)

    return result.prompt
}

const PromptManager = () => {
    let writeDocsPrompt = `You are an expert markdown document writer with a deep understanding of C# development.
Your task is to generate easy-to-follow, comprehensive, and concise documentation for C# classes.

RETURN FORMAT:
Return the output as a JSON object with a single field 'content' containing the markdown documentation.

RULES:
    - Include method/property descriptions with examples and parameter details.
    - Use user-friendly text; minimize code sections in documentation.
    - Use [[CLASS_NAME]] for inherited classes; will link to real pages later.
    - Use [{CLASS_NAME}] for implemented classes; will link to real pages later.
    - Use [(CLASS_NAME)] for undefined classes mentioned in feedback.
`

    let reviewDocsPrompt = `You are an expert C# developer who prefers to use comprehensive documentation for understanding and using classes in the FluentCMS Repositories.
Your task is to review a provided markdown documentation to determine if it sufficiently covers all necessary details and lacks ambiguities.
The user will provide the markdown documentation and the source code for reference.

RETURN FORMAT:
Return json object which includes a 'feedbacks' array of strings if improvements are necessary or an empty array if no further changes are needed.

RULES:
    - You should review the documentation by comparing it with the provided code.
    - Ensure that all public methods, properties, constructors, and other relevant class members are covered and explained thoroughly.
    - Make sure that inheritance, interface implementation, and any necessary usage examples are properly documented.
    - Look for any missing details or ambiguities in the documentation.
    - The symbols [[CLASS_NAME]], [{CLASS_NAME}], and [(CLASS_NAME)] will be replaced with the actual links to the respective classes or interfaces.
    - Your feedbacks should be general and prevent similar issues in future. your feedbacks will be included in sytsem prompt section.

EXAMPLES:
// if needs improvements:
{"feedbacks": ["improvement 1", "improvement 2", ...]}

// if don't need further improvements
{"feedbacks": []}

`

    function loadPrompt() {
        const prompts = JSON.parse(readFileSync('./prompts.json', 'utf-8') ?? '[]')
        if (prompts.length > 0) {
            writeDocsPrompt = prompts[prompts.length - 1]
        }


    }

    function savePrompt(prompt) {
        if (!existsSync('./prompts.json')) {
            writeFileSync('./prompts.json', '[]')
        }
        const prompts = JSON.parse(readFileSync('./prompts.json', 'utf-8') ?? '[]')

        writeFileSync('./prompts.json', JSON.stringify([...prompts, prompt]))
    }

    let enhanceWritePrompt = `
    You are an expert prompt engineer. Your task is to enhance the existing prompt to improve its performance and accuracy in generating C# class documentation. Do not change the prompt's overall structure; focus on adding, updating, or removing rules and examples to address user feedback. keep each rules short (no more than 80 characters) and concise.

Provided data:
1. **Prompt**: A detailed prompt for generating C# class documentation.
2. **Code**: The C# code for a class that the prompt is used to document.
3. **User Feedbacks**: Feedback on the generated documentation to improve the prompt.

RETURN:
A JSON object with a single field: "prompt" containing the improved prompt.

EXAMPLES:
Improving the prompt to cover additional cases and clarification points.

Given the prompt:
\`\`\`text
... current prompt ...
\`\`\`
Feedback:
- "* Missing detailed descriptions for properties."
- "* Should include examples for each method usage."
- "* Class inheritance should be clearly documented."

Improved prompt:
\`\`\`
... improved content including details for properties and methods...
\`\`\`
`
    // loadPrompt()
    return {
        writeDocsPrompt,
        reviewDocsPrompt,
        async enhanceWrite(code, feedbacks) {
            const result = await llm(enhanceWritePrompt, `Improve this prompt:

>>> prompt:
\`\`\`
${writeDocsPrompt}
\`\`\`

>>> code:
\`\`\`
${code}
\`\`\`

>>> user feedbacks:
${feedbacks.map(x => `*. ${x}`).join('\n')}
`)

            savePrompt(result.prompt)
            writeDocsPrompt = result.prompt
        }
    }
}

const promptManager = PromptManager()

const writeDocs = async (prompt) => {
    const systemPrompt = promptManager.writeDocsPrompt

    const response = await llm(systemPrompt, prompt)
    return response.content
}

const reviewDocs = async (prompt) => {
    const systemPrompt = promptManager.reviewDocsPrompt

    const response = await llm(systemPrompt, prompt)

    const feedbacks = response.feedbacks

    return feedbacks
}

// Agentic AI mode. between two AIs Documentation Writer and Developer.
async function writeDocumentation(code) {
    const maxAttempts = 5
    let attemptCount = 0;
    let versions = [];
    let feedbackList = [];


    while (attemptCount < maxAttempts) {
        const version = {}
        versions.push(version)
        if (attemptCount === 0) {
            version.content = await writeDocs(`Write markdown documentation for this code: ${code}`); // First attempt - generate docs
        } else {
            const prevVersion = versions[versions.length - 2]
            console.log(prevVersion.feedbacks.map(x => '*. ' + x).join('\n'))
            version.content = await writeDocs(`Improve document based on user feedback
Documentation to update: ${prevVersion.content}
User's feedbacks: ${prevVersion.feedbacks.map(x => '*. ' + x).join('\n')}
Code: ${code}
`);
            await promptManager.enhanceWrite(code, prevVersion.feedbacks)
        }

        // Get feedback from the developer
        version.feedbacks = await reviewDocs(`
>>> documentation: 
${version.content}

>>> code: 
${code}`);
        attemptCount++;
        if (version.feedbacks == 0) break;
    }

    // Return the documentation once we are done
    return { versions };
}


async function generateDocs() {

    const files = readdirSync('./FluentCMS.Repositories.MongoDB')
    let results = {}
    for (let file of files) {
        console.log('processing ' + file)
        const code = readFileSync('./FluentCMS.Repositories.MongoDB/' + file, 'utf-8')
        const result = await writeDocumentation(code)
        results[file] = result

        if (existsSync('./results.json')) {
            const existingResultsStr = readFileSync('./results.json', 'utf-8')
            results = JSON.parse(existingResultsStr)
            results[file] = result
            writeFileSync('./results.json', JSON.stringify(results, null, 4))
        } else {
            writeFileSync('./results.json', JSON.stringify(results, null, 4))
        }
    }

}

function writeDocsToFile() {
    const existingResultsStr = readFileSync('./results.json', 'utf-8')
    const files = JSON.parse(existingResultsStr)

    for (let key in files) {
        const file = files[key]
        const content = file.versions[file.versions.length - 1].content

        writeFileSync('./FluentCMS.Repositories.MongoDB.Docs/' + key + '.md', content)

    }

}

// generateDocs()

writeDocsToFile()