const button = document.getElementById("findOut");
const score = document.getElementById("result");

button.addEventListener("click", scoreMe);

function scoreMe() {
  const form = document.getElementById("quiz");
  let result = 0;

  const questions = [
    "question1", "question2", "question3", "question4", 
    "question5", "question6", "question7", "question8", 
    "question9", "question10"
  ];

  questions.forEach((question) => {
    const answer = form.querySelector(`input[name="${question}"]:checked`);
    if (answer !== null) {
      result += parseInt(answer.value);
    }
  });

  score.innerText = `You are ${result} percent redneck!`;
}