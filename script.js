const riddles = [
    { question: "I live under a bridge and demand a toll. What am I?", answer: "troll", hint: "classic creature that tests you" },
    { question: "I turn pumpkins into carriages and rags into gowns. Who am I?", answer: "fairy godmother", hint: "Seen in Cinderella" },
    { question: "A circle of mushrooms is my dance floor. What am I?", answer: "fairy", hint: "Has wings and is small" },
    { question: "I brew potions and cast spells with my wand. What am I?", answer: "witch", hint: "I also have a broomstick" },
    { question: "I bubble and brew with magical might, mix the wrong thing, and it won’t taste right. What am I?", answer: "cauldron", hint: "C__ld___" },
    { question: "I slink and prowl, my eyes glow bright, I’m her companion in the night. What am I?", answer: "cat", hint: "_a_" },
    { question: "I’m pointed, long, and full of power, used to cast spells at any hour. What am I?", answer: "wand", hint: "__n_" },
    { question: "By day, I walk as one of you, but when night falls, I change too. What am I?", answer: "werewolf", hint: "___e__l_" },
    
];

let currentRiddleIndex = 0;

function loadRiddle() {
    const riddleText = document.getElementById("riddle-text");
    const answerInput = document.getElementById("answer");
    const messageDiv = document.querySelector(".message");
    const revealedMessage = document.querySelector(".revealed-message");
    const nextLevelButton = document.getElementById("next-level");
    const levelTitle = document.getElementById("level-title"); // Reference the level title element

    const currentRiddle = riddles[currentRiddleIndex];
    riddleText.textContent = currentRiddle.question;
    answerInput.value = "";
    messageDiv.classList.add("hidden");
    revealedMessage.classList.add("hidden");
    nextLevelButton.classList.add("hidden"); // Hide the next level button initially

    // Update the level title based on the current riddle index
    //levelTitle.textContent = `Level ${currentRiddleIndex + 1}`; // Display the correct level number

    // Set up the check button click event
    document.getElementById("check").onclick = function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === currentRiddle.answer.toLowerCase()) {
            messageDiv.classList.remove("hidden");
            messageDiv.textContent = "Congratulations! You've solved the riddle.";
            nextLevelButton.classList.remove("hidden"); // Show the next level button
        } else {
            revealedMessage.classList.remove("hidden");
            revealedMessage.textContent = "Sorry, that's incorrect. Try again.";
        }
    };

    // Set up the hint button click event
    document.getElementById("hint").onclick = function() {
        revealedMessage.classList.remove("hidden");
        revealedMessage.textContent = `Hint: ${currentRiddle.hint}`;
    };
}

// Function to go to the next level
function nextLevel() {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
        loadRiddle(); // Load the next riddle
        // Redirect to the next level HTML file
        const nextLevelNumber = currentRiddleIndex + 1; // Calculate the next level number
        window.location.href = `level1${nextLevelNumber}.html`; // Redirect to the next level HTML file
    }
    else {
        alert("No more riddles, see you later!");
    }
}

// Load the riddle when the page is loaded
window.onload = loadRiddle;

function goToWorld2() {
    if (isWorld1Complete) {
        window.location.href = 'world2.html'; // Redirect to World 2
    } else {
        alert("You must complete all riddles in the current world before accessing World 2.");
    }
}

function goBack() {
    window.location.href = 'worlds.html'; // Redirect to the worlds page
}

window.onload = function() {
    loadRiddle("level1.1"); // Load the first riddle of World 1
    document.getElementById("next-world-button").disabled = !isWorld1Complete; // Set button state based on completion status
};

function showCompletionMessage(worldMessage, returnButtonText, nextWorldButtonText, nextWorldLevel) {
    const messageDiv = document.querySelector(".message");
    const returnButton = document.createElement("button");
    const nextWorldButton = document.createElement("button");

    messageDiv.textContent = worldMessage;
    messageDiv.classList.remove("hidden");

    returnButton.textContent = returnButtonText;
    returnButton.onclick = function() {
        window.location.href = 'worlds.html'; // Redirect to the main menu
    };

    nextWorldButton.textContent = nextWorldButtonText;
    nextWorldButton.onclick = function() {
        window.location.href = `${nextWorldLevel}.html`; // Redirect to the first level of the next world
    };

    messageDiv.appendChild(returnButton);
    messageDiv.appendChild(nextWorldButton);
}

function showLevels(world) {
    const allLevels = document.querySelectorAll('.levels');
    allLevels.forEach(level => {
        level.style.display = 'none';
    });

    const selectedLevels = document.getElementById(`levels${world}`);
    if (selectedLevels) {
        selectedLevels.style.display = 'block'; // Ensure the selected levels are displayed
    }
}

function goBackHome() {
    window.location.href = 'index2.html'; // Redirect to the home page
}
