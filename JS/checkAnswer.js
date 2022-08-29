import { question } from "./code.js";

export function checkAnswer (userInput) {
    let answer = question.answer.toLowerCase();
    userInput = userInput.toLowerCase()
    return answer.includes(userInput)
  };

 