// Function to check the answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer= document.querySelector.value('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // Provide feedback for correct answer
            feedback.textContent = "Correct! Well done.";
        } else {
            // Provide feedback for incorrect answer
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, ask the user to select an answer
        feedback.textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);