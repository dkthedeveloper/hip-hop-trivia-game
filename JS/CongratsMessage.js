import { main } from "./code.js";

const CongratsMessage = () => {
    const congratsMessageContainer = document.createElement('div');
    congratsMessageContainer.id = 'congrats-message-container';
    const congratsImage = document.createElement('img');
    const congratsMessageElement = document.createElement('h3');
    congratsMessageElement.innerText = "Correct!";
    congratsImage.src = 'https://media.giphy.com/media/WrgtbRE1zywNy/giphy.gif';
    congratsMessageContainer.append(congratsMessageElement, congratsImage);
    main.append(congratsMessageContainer);
};

export default CongratsMessage;