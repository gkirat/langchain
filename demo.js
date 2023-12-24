import { OpenAI } from "langchain/llms/openai";
import {PromptTemplate} from "langchain/prompts";
import {config} from "dotenv";
import {LLMChain} from "langchain/chains";

config();

const model = new OpenAI({
    openAIApiKey:,      //enter your own api key
    temperature:0.9
})

// const response   = await model.call("What would would be the good comapny name that makes a good colorful socks")
// console.log(response)

const template = "What would would be the good comapny name that makes a {products} ?";
const promptTemplate = new PromptTemplate({
    template:template,
    inputVariables:["products"]
})

const formattedPrompt = await promptTemplate.format({
    products:"laptops"
})

const response = await model.call(formattedPrompt)
const chain = new LLMChain({
    llm:model,
    prompt:promptTemplate
});

const res = await chain.call({
    products:"shoes"
})

console.log(formattedPrompt)
console.log(response)
console.log(res)
// Prompt template