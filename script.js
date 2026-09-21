const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#input");
const timerEl = document.querySelector("#timer");
const accuracyEl = document.querySelector("#accuracy");

let time = 0; 
let timer; 
let started = false; 
const sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

sentence.split("").forEach ((character) => { 
    const span = document.createElement("span");
    span.textContent = character; 
    textEl.appendChild(span); 
});

function startTimer() {
    timer = setInterval(() => { 
        time++;
        timerEl.textContent = `Time: ${time}s`;
    }, 1000); 
}

inputEl.addEventListener("input", () => {
    if (!started) {
        startTimer();
        started = true;
    }

    const typedText = inputEl.value; 
    const characters = textEl.querySelectorAll("span"); 

    let correctCharacteres = 0;

    characters.forEach((character, index) => {
        if (typedText[index] === undefined) { 
            character.classList.remove("correct");
            character.classList.remove("wrong");
        }else if (typedText[index] === character.textContent) { 
            character.classList.add("correct");
            character.classList.remove("wrong");

            correctCharacteres++;
        } else { 
            character.classList.add("wrong");
            character.classList.remove("correct");
        }
    });

    // Calculate accuracy
    if (typedText.length > 0) {
        const accuracy = (correctCharacteres / typedText.length) * 100;
        accuracyEl.textContent = `Accuracy: ${accuracy.toFixed(0)}%`;
    }

    if (typedText.length === sentence.length) {
        clearInterval(timer);
    }
});