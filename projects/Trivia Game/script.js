document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
});

const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
  // Add more questions here
];

const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
  // Add corresponding choices here
];

const correctAnswers = [
  "Mars",
  "Da Vinci",
  // Add corresponding correct answers here
];

let currentQuestionIndex = 0;
let score = 0;

function checkAnswer(button) {
  if (correctAnswers[currentQuestionIndex] === button.value) {
    document.getElementById("result").innerHTML = "Correct!";
    button.style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("result").innerHTML = "Wrong!";
    button.style.backgroundColor = "red";
  }

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`choice${i}`).disabled = true;
  }

  currentQuestionIndex++;
  setTimeout(() => {
    resetButtonStyles();
    displayQuestion();
  }, 2000);
}

function resetButtonStyles() {
  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById(`choice${i}`);
    btn.style.backgroundColor = "slategray";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("result").innerHTML = "";
    const element = document.getElementById("question");
    element.innerHTML = questions[currentQuestionIndex];

    const currentChoices = [...choicesArray[currentQuestionIndex]];
    shuffle(currentChoices);

    console.log("Displaying question:", questions[currentQuestionIndex]); // Debugging line
    console.log("Choices:", currentChoices); // Debugging line

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      console.log(`Setting button #${i + 1} text to:`, currentChoices[i]); // Debugging line
      btn.innerHTML = currentChoices[i];
      btn.value = currentChoices[i];
      btn.disabled = false;
    }
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML =
      '<button onclick="restartQuiz()">Restart Quiz</button>';
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("choices").innerHTML = `
    <button id="choice1" onclick="checkAnswer(this)"></button>
    <button id="choice2" onclick="checkAnswer(this)"></button>
    <button id="choice3" onclick="checkAnswer(this)"></button>
    <button id="choice4" onclick="checkAnswer(this)"></button>
  `;
  displayQuestion();
}

// Initialize the first question
displayQuestion();
