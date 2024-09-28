function calculateScore() {
        let score = 0;

        const houseAnswer = document.querySelector('input[name="house1"]:checked');
        const princeAnswer = document.querySelector('input[name="prince"]:checked');
        const creatureAnswer = document.querySelector('input[name="creature"]:checked');

        if (houseAnswer && houseAnswer.value === "Gryffindor") {
            score++;
        }
        if (princeAnswer && princeAnswer.value === "Snape") {
            score++;
        }
        if (creatureAnswer && creatureAnswer.value === "Hippogriff") {
            score++;
        }

        return score;
    }

    function displayFeedback(score) {
        let feedbackMessage;

        if (score === 3) {
            feedbackMessage = "Fantastic! You got all answers correct!";
        } else if (score === 2) {
            feedbackMessage = "Great job! You got 2 out of 3 correct!";
        } else if (score === 1) {
            feedbackMessage = "Not bad! You got 1 out of 3 correct.";
        } else {
            feedbackMessage = "Oops! You didn't get any correct. Try again!";
        }

        alert(`You scored ${score} out of 3. ${feedbackMessage}`);
    }

    document.getElementById('submit-quiz').addEventListener('click', function() {
        const score = calculateScore();
        displayFeedback(score);

        document.getElementById('quiz-form-1').reset();
        document.getElementById('quiz-form-2').reset();
        document.getElementById('quiz-form-3').reset();
    });

