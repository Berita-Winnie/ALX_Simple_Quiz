function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // If no answer is selected, do nothing
    if (!userAnswer) {
        return;
    }

    // Compare the user's answer with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);