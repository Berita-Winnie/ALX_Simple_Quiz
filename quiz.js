function checkAnswer() {
    let correctAnswer=4;
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        // If the answer is correct, display a success message
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If the answer is incorrect, display an error message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);