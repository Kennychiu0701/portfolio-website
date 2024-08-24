let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 10;
let guesses = []; // Add this line to declare the array.

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guessesElement = document.getElementById("guesses"); // Add this line to get the guesses element

  let guess = parseInt(inputElement.value, 10);

  if (isNaN(guess)) {
    feedbackElement.innerHTML = "Please enter a valid number.";
    feedbackElement.style.color = "red";
    return;
  }

  if (attempts <= 0) {
    feedbackElement.innerHTML = "Game Over";
    feedbackElement.style.color = "red";
    return;
  }

  attempts--;
  guesses.push(guess); // Add each guess to the array.
  guessesElement.innerHTML = `Guesses so far: ${guesses.join(", ")}`; // Update the guesses display

  if (guess === randomNumber) {
    feedbackElement.innerHTML = "Number Guessed!";
    feedbackElement.style.color = "green";
  } else if (attempts === 0) {
    feedbackElement.innerHTML = "Game Over";
    feedbackElement.style.color = "red";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = `Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = `Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  attempts = 10;
  guesses = []; // Reset the guesses array
  document.getElementById("guess").value = "";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("guesses").innerHTML = ""; // Clear the guesses display on restart
}
