import { main, score, winningScore } from "./code.js";
import { submitAnswer, winLoseStatus, updateWinLoseStatus } from "./submitAnswer.js";

const questionContainer = document.getElementById('questionContainer');

export function displayQuestion (question)  {
    let userScore = document.getElementById('userScore');
    userScore.innerHTML = `Score: ${score}`
    let title = document.createElement('h1');
    let questionContainer = document.createElement('section');
    questionContainer.id = 'questionContainer';
    title.innerHTML = 'Hip-Hop Trivia';
    main.append(title);
    main.append(questionContainer);
    let question1 = question
    let questionDiv = document.createElement('div');                     
    let form = document.createElement('form');
    let input = document.createElement('input');
    questionDiv.classList.add('questionDiv');
    questionDiv.id = 'question-div';
    questionDiv.innerHTML = question1.question;
    questionDiv.innerHTML += '<br>' + '<br>';
    form.append(input);
    form.addEventListener('submit', submitAnswer)
    questionDiv.append(form);
    questionContainer.append(questionDiv);
    input.focus();
    console.log(question1.answer);
};


export function restartGame () {
    let message = '';
    if (score === winningScore) {
        updateWinLoseStatus(true)
    }
    if (winLoseStatus === false) {
        message = 'You Lose!'
    } else {
        message = 'You Win!'
    }
    const button = document.createElement('button');
    const congratsImage = document.createElement('img');
    congratsImage.src = 'https://media.giphy.com/media/WrgtbRE1zywNy/giphy.gif';
    button.innerText = 'Play Again?';
    button.addEventListener('click', () => window.location.reload());
    main.innerHTML = `<h1>${message}</h1>`;
    main.append(congratsImage, button);
    button.focus()
};