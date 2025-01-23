import random

class NumberGuessingGame:
    def __init__(self, min_range=1, max_range=100, max_attempts=10):
        self.secret_number = random.randint(min_range, max_range)
        self.min_range = min_range
        self.max_range = max_range
        self.max_attempts = max_attempts
        self.attempts = 0

    def play(self):
        print(f"Welcome to the Number Guessing Game!")
        print(f"Guess a number between {self.min_range} and {self.max_range}")
        while self.attempts < self.max_attempts:
            try:
                user_guess = int(input("Enter your guess: "))
                self.attempts += 1
                if user_guess < self.secret_number:
                    print("Too Low! Try again.")
                elif user_guess > self.secret_number:
                    print("Too High! Try again.")
                else:
                    print(f"Congratulations! You guessed the number in {self.attempts} attempts.")
                    return True
                remaining_attempts = self.max_attempts - self.attempts
                print(f"You have {remaining_attempts} attempts left.")
            except ValueError:
                print("Please enter a valid integer.")

        print(f"Game Over! The secret number was {self.secret_number}.")
        return False

# Move main() outside of the class
def main():
    game = NumberGuessingGame()
    game.play()
    while True:
        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != "yes":
            break
        game = NumberGuessingGame()
        game.play()

# Ensure that main() runs only when executed directly
if __name__ == "__main__":
    main()
