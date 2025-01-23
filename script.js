let secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let maxAttempts = 10; 
let attempts = 0;

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
    secretNumber = Math.floor(Math.random() * 100) + 1; // Reset the secret number
    attempts = 0; // Reset attempts
    document.getElementById('feedback').innerText = '';
    document.getElementById('attempts-info').innerText = '';
    this.style.display = 'none'; // Hide play again button
});
