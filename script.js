let secretNumber;
let maxAttempts = 10; 
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('attempts-info').innerText = '';
    document.getElementById('play-again').style.display = 'none';
}

document.getElementById('submit-guess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('user-guess').value);
    
    if (isNaN(userGuess)) {
        document.getElementById('feedback').innerText = "Please enter a valid number.";
        return;
    }

    attempts++;
    
    if (userGuess < secretNumber) {
        document.getElementById('feedback').innerText = "Too Low! Try again.";
    } else if (userGuess > secretNumber) {
        document.getElementById('feedback').innerText = "Too High! Try again.";
    } else {
        document.getElementById('feedback').innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('play-again').style.display = 'block';
        return; // Exit the function after winning
    }

    if (attempts >= maxAttempts) {
        document.getElementById('feedback').innerText = `Game Over! The secret number was ${secretNumber}.`;
        document.getElementById('play-again').style.display = 'block';
        return; // Exit the function after losing
    }

    const remainingAttempts = maxAttempts - attempts;
    document.getElementById('attempts-info').innerText = `You have ${remainingAttempts} attempts left.`;
});

document.getElementById('play-again').addEventListener('click', function() {
    startGame(); // Reset the game state
});

// Start a new game when loading the page
startGame();
