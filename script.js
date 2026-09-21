const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#input");
const timerEl = document.querySelector("#timer");

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

    characters.forEach((character, index) => {
        if (typedText[index] === undefined) { 
            character.classList.remove("correct");
            character.classList.remove("wrong");
        }else if (typedText[index] === character.textContent) { 
            character.classList.add("correct");
            character.classList.remove("wrong");
        } else { 
            character.classList.add("wrong");
            character.classList.remove("correct");
        }
    });

    if (typedText.length === sentence.length) {
        clearInterval(timer);
    }
});