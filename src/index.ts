/* eslint-disable no-plusplus */
import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const res = await model.call(
  "Can you write some code segments that each shows Hello World in the C, Rust, R, Java, Perl, and Python programming languages?"
);

console.log(res);

const codeRegex = /```([\s\S]*?)```/g;
const codeSnippets = [];

let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = codeRegex.exec(res)) !== null) {
    codeSnippets.push(match[1]);
  }

  console.log("------------------------------");  
  const TEMP_SIGNAGE = `Total Code Segments:${  codeSnippets.length}`;

  console.log(TEMP_SIGNAGE);

  let idx = 0;
  for (const snippet of codeSnippets) {
    idx ++;
    console.log(`${idx  }\n`);
    console.log(snippet);

  }
