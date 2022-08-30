import { scoreIncrementer, checkAnswer, displayQuestion, arrayOfQuestions, pickRandomQuestion, setQuestion, score, input, winningScore } from "./code.js"
import { restartGame } from "./view.js";
import CongratsMessage from "./CongratsMessage.js";

let form = document.querySelector('form');

export let winLoseStatus = false;

export function updateWinLoseStatus (value) {
    winLoseStatus = value
};

export function submitAnswer (e) {
    e.preventDefault();
    let header = document.querySelector('h1');
    let questionContainer = document.getElementById('questionContainer');
    let userInput = input.value;
    if (checkAnswer(userInput)) {
        scoreIncrementer();
    } else {
        restartGame();
        winLoseStatus = null
        return
    }
    if (score === winningScore) {
        restartGame()
    } else {
        header.remove();
        questionContainer.remove();
        CongratsMessage();
        let scoreElement = document.getElementById('userScore');
        scoreElement.innerHTML = `Score: ${score}`;
        let newQuestion = pickRandomQuestion(arrayOfQuestions)
        setQuestion(newQuestion);
        setTimeout(() => {
            const congratsMessageDiv = document.getElementById('congrats-message-container');
            congratsMessageDiv.remove();
            displayQuestion(newQuestion)}, 3000);
    }

};