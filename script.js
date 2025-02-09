const riddles = {
    "level1.1": { question: "I live under a bridge and demand a toll. What am I?", answer: "troll", hint: "classic creature that tests you" },
    "level1.2": { question: "I turn pumpkins into carriages and rags into gowns. Who am I?", answer: "fairy godmother", hint: "Seen in Cinderella" },
    "level1.3": { question: "A circle of mushrooms is my dance floor. What am I?", answer: "fairy", hint: "Has wings and is small" },
    "level1.4": { question: "I brew potions and cast spells with my wand. What am I?", answer: "witch", hint: "I also have a broomstick" },
    "level2.1": { question: "I bubble and brew with magical might, mix the wrong thing, and it won’t taste right. What am I? ", answer: "Cauldron", hint: "C__ld___"},
    "level2.2": { question: "I slink and prowl, my eyes glow bright, I’m her companion in the night. What am I?", answer: "cat", hint: "_a_" },
    "level2.2": { question: "I’m pointed, long, and full of power, used to cast spells at any hour. What am I?", answer: "wand", hint: "__n_" },
    "level2.3": { question: "By day, I walk as one of you, but when night falls, I change too. What am I?", answer: "werewolf", hint: "___e__l_" },
    // Add more riddles for other levels as needed
};

let isWorld1Complete = localStorage.getItem('isWorld1Complete') === 'true'; // Load completion status from local storage

function completeWorld1() {
    isWorld1Complete = true; // Set the completion status to true
    localStorage.setItem('isWorld1Complete', 'true'); // Save completion status to local storage
    document.getElementById("next-world-button").disabled = false; // Enable the button for the next world
    alert("Congratulations! You've completed World 1. You can now access World 2.");
    document.getElementById("next-world-button").classList.add("completed"); // Add a class for visual feedback
}


// Example function to simulate completing a task in World 1
function someTaskInWorld1() {
    // Logic for completing a task
    completeWorld1(); // Call this function when the task is completed
}

// Load the riddle when the page is loaded
window.onload = function() {
    loadRiddle();
    document.getElementById("next-world-button").disabled = !isWorld1Complete; // Set button state based on completion status
};



function loadRiddle(level) {
    const riddle = riddles[level];
    if (riddle) {
        const riddleText = document.getElementById("riddle-text");
        const answerInput = document.getElementById("answer");
        const messageDiv = document.querySelector(".message");
        const revealedMessage = document.querySelector(".revealed-message");
        const nextLevelButton = document.getElementById("next-level");

        riddleText.textContent = riddle.question;
        answerInput.value = "";
        messageDiv.classList.add("hidden");
        revealedMessage.classList.add("hidden");
        nextLevelButton.classList.add("hidden");

        // Add event listeners for checking answers and hints
        document.getElementById("check").onclick = function() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            if (userAnswer === riddle.answer.toLowerCase()) {
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
            revealedMessage.textContent = `Hint: ${riddle.hint}`;
        };
    } else {
        console.error("Riddle not found for level:", level);
    }
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

function goToWorld2() {
    // Check if the current world is complete before allowing access to the next world
    if (currentRiddleIndex >= riddles.length) {
        window.location.href = 'world2.html'; // Redirect to World 2
    } else {
        alert("You must complete all riddles in the current world before accessing World 2.");
    }
}

function goBack() {
    window.location.href = 'index.html'; // Redirect to the worlds page
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