const riddles = [
    { question: "I live under a bridge and demand a toll. What am I?", answer: "Troll", hint: "classic creature that tests you" },
    { question: "I turn pumpkins into carriages and rags into gowns. Who am I?", answer: "Fairy Godmother", hint: "Seen in Cinderella" },
    { question: "A circle of mushrooms is my dance floor. What am I? ", answer: "Fairy", hint: "Has wings and its small" },
    { question: "I brew potions and cast spells with my wand. What am I?", answer: "Witch", hint: "I also have a broomstick" },

    // Add more riddles for other levels
];

let currentRiddleIndex = 0;

function loadRiddle() {
    const riddleText = document.getElementById("riddle-text");
    const answerInput = document.getElementById("answer");
    const messageDiv = document.querySelector(".message");
    const revealedMessage = document.querySelector(".revealed-message");
    const nextLevelButton = document.getElementById("next-level");

    const currentRiddle = riddles[currentRiddleIndex];
    riddleText.textContent = currentRiddle.question;
    answerInput.value = "";
    messageDiv.classList.add("hidden");
    revealedMessage.classList.add("hidden");
    nextLevelButton.classList.add("hidden");

    document.getElementById("check").onclick = function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === currentRiddle.answer.toLowerCase()) {
            messageDiv.classList.remove("hidden");
            messageDiv.textContent = "Congratulations! You've solved the riddle.";
            nextLevelButton.classList.remove("hidden");
        } else {
            revealedMessage.classList.remove("hidden");
            revealedMessage.textContent = "Sorry, that's incorrect. Try again.";
        }
    };

    document.getElementById("hint").onclick = function() {
        revealedMessage.classList.remove("hidden");
        revealedMessage.textContent = `Hint: ${currentRiddle.hint}`;
    };
}

function nextLevel() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const currentRiddle = riddles[currentRiddleIndex];

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        currentRiddleIndex++;
        if (currentRiddleIndex < riddles.length) {
            loadRiddle(); // Load the next riddle
        } else {
            alert("You've completed all levels!");
            // Optionally redirect to a completion page or reset
        }
    } else {
        alert("You must answer the current riddle correctly before proceeding to the next level.");
    }
}

function goBack() {
    window.location.href = 'worlds.html'; // Redirect to the worlds page
}

// Load the riddle when the page is loaded
window.onload = loadRiddle;

function showLevels(world) {
    // Hide all levels initially
    const allLevels = document.querySelectorAll('.levels');
    allLevels.forEach(level => {
        level.style.display = 'none';
    });

    // Show the selected world's levels
    const selectedLevels = document.getElementById(`levels${world}`);
    if (selectedLevels) {
        selectedLevels.style.display = 'block'; // Ensure the selected levels are displayed
    }
}

function goBackHome() {
    window.location.href = 'index2.html'; // Redirect to the home page
}