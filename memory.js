import {OpenAI} from "langchain/llms/openai";
import {BufferMemory} from "langchain/memory";
import {ConversationChain}  from "langchain/chains";

const model = new OpenAI({
    openAIApiKey:,
})    //here we are using the default values of the temperature
const memory =  new BufferMemory()
const chain = new ConversationChain({
    llm:model,
    memory:memory
})

const response = await chain.call({
    input:"hi , i am gurkirat"
})

const response1 = await chain.call({
    input:"What is my name"
})

console.log(response)
console.log(response1)