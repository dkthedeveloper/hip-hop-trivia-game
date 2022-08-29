import { main, question, score } from "./code.js";
import { displayQuestion } from "./code.js";

export function welcomeUser () {
    let welcomeMessage = 'Welcome to Hip-Hop Trivia!' + '<br>' + 'Press "Start" to continue'
    let button = document.createElement('button')
    button.innerText = 'Start';
    main.innerHTML = `<h1>${welcomeMessage}</h1>`;
    button.addEventListener('click', () => {
        main.innerHTML = "";
        let scoreContainer = document.createElement('section');
        scoreContainer.id = 'scoreContainer';
        let userScore = document.createElement('h2');
        userScore.innerHTML = `Score: ${score}`;
        userScore.id = 'userScore'
        scoreContainer.append(userScore);
        main.append(scoreContainer);
        displayQuestion(question)}
    )
    main.append(button);
    button.focus()
};