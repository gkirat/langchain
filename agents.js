import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import {SerpAPI} from "langchain/tools";            //allows us to browse the internet and get info
import {Calculator} from "langchain/tools/calculator";
import {initializeAgentExecutorWithOptions} from "langchain/agents";  //this is the agent that we are importing 
dotenv.config() 

const model = new OpenAI({
    openAIApiKey:,
    temperature:0       //We don't want it to be creative as the we want to perform mathematical tasks
})

const tools = [
    new SerpAPI(({
        hl:"en",
        gl:"us",
        api_key:"f009f57a2af04145c1b433f34380611c3fdff87ba508e70f024c6d05811d31a9"
        
    })),

    new Calculator()
]
const executer  = await initializeAgentExecutorWithOptions(tools,model,{
    agentType:"zero-shot-react-description",
    verbose:true
})
console.log("Agent loaded successfully")

const res = await executer.call({
    input:"who is ryan reynolds wife and what is his age raised to the power 0.13"
})
console.log(res)