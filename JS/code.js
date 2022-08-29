import { presentQuestion } from "./questionObjBuilder.js";
import { displayQuestion } from "./view.js";
import { welcomeUser } from "./welcome.js";
import { checkAnswer } from "./checkAnswer.js";


const questionsArr1 = await presentQuestion('https://jservice.kenzie.academy/api/clues?category=4225');
const questionsArr2 = await presentQuestion('https://jservice.kenzie.academy/api/clues?category=36808');
const questionsArr3 = await presentQuestion('https://jservice.kenzie.academy/api/clues?category=37156');
const questionsArr4 = await presentQuestion('https://jservice.kenzie.academy/api/clues?category=37678');
const arrayOfQuestions = [...questionsArr1, ...questionsArr2, ...questionsArr3, ...questionsArr4];
const winningScore = 5;
const main = document.querySelector('main');

let question = pickRandomQuestion(arrayOfQuestions);
let score = 0;

// https://stackoverflow.com/a/48173881
function changeScore (value) {
  score = value
};

function scoreIncrementer () {
  score += 1;
  let scoreElement = document.getElementById('userScore')
  scoreElement.innerHTML = `Score: ${score}`;
};

function setQuestion (value) {
  question = value
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};



welcomeUser()

let input = document.querySelector('input');
window.addEventListener("keypress", () => input = document.querySelector('input'));


function pickRandomQuestion (questionArray) {
  return questionArray[randomIntFromInterval(0, (questionArray.length - 1))]
};




export  { main, input, randomIntFromInterval, scoreIncrementer, arrayOfQuestions, checkAnswer, displayQuestion, score, changeScore, presentQuestion, pickRandomQuestion, question, setQuestion, winningScore}