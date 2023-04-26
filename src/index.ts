import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const res = await model.call(
  "What is the translation of Operator theory in Chinese?"
);

console.log(res);
