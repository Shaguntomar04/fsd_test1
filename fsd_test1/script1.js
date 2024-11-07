const jokeArea = document.getElementById("jokeArea");
const charCount = document.getElementById("charCount");
const getJokeBtn = document.getElementById("getJokeBtn");
const clearJokeBtn = document.getElementById("clearJokeBtn");
const errorMsg = document.getElementById("errorMsg");


async function fetchJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }
        const jokeData = await response.json();
        const jokeText = `${jokeData.setup} - ${jokeData.punchline}`;
        
        jokeArea.textContent = jokeText;
        charCount.textContent = `Character Count: ${jokeText.length}`;
        errorMsg.textContent = ""; 
    } catch (error) {
        errorMsg.textContent = "Please try again.";
    }
}


function clearJoke() {
    jokeArea.textContent = "Click the button to get a joke!";
    charCount.textContent = "Character Count: 0";
    errorMsg.textContent = ""; 
}

getJokeBtn.addEventListener("click", fetchJoke);
clearJokeBtn.addEventListener("click", clearJoke);
