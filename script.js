document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correctAnswers = ['C', 'B', 'C', 'B', 'C'];
    let score = 0;

    correctAnswers.forEach((answer, index) => {
        const question = `q${index + 1}`;
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answer) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${correctAnswers.length}!`;
});