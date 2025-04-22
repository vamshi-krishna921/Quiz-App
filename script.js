let question = document.querySelector(".question");
let answers = document.querySelector(".answers");
let answer = document.querySelectorAll(".answer");
let nxtBtn = document.querySelector(".next");
let questions = [
  {
    question: "1. What is the capital of France?",
    answers: [
      { text: "Madrid", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "2. How many legs does a spider have?",
    answers: [
      { text: 6, correct: false },
      { text: 8, correct: true },
      { text: 4, correct: false },
      { text: 10, correct: false },
    ],
  },
  {
    question: "3. What color do you get when you mix red and yellow?",
    answers: [
      { text: "Purple", correct: false },
      { text: "Green", correct: false },
      { text: "Orange", correct: true },
      { text: "Blue", correct: false },
    ],
  },
  {
    question: "4. Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "5. Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Leapord", correct: false },
      { text: "Lion", correct: true },
    ],
  },
];
let curQuestionIndex = 0;
let score = 0;
function quizStart() {
  curQuestionIndex = 0;
  score = 0;
  showQuestions();
}

function showQuestions() {
  reset();
  let curQuestion = questions[curQuestionIndex];
  let curQuestionElem = curQuestion.question;
  question.innerText = curQuestionElem;
  showAnswers(curQuestion);
}

function reset() {
  nxtBtn.style.display = "none";
  answers.innerHTML = "";
}

function showAnswers(curQuestion) {
  curQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer");
    answers.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAns);
  });
}
function selectAns(e) {
  let selectedAns = e.target;
  let isCorrect = selectedAns.dataset.correct === "true";
  if (isCorrect) {
    selectedAns.classList.add("correct");
    score++;
  } else {
    selectedAns.classList.add("incorrect");
  }
  Array.from(answers.children).forEach((selectedAns) => {
    if (selectedAns.dataset.correct === "true") {
      selectedAns.classList.add("correct");
    }
    selectedAns.disabled = true;
  });
  nxtBtn.style.display = "block";
}
nxtBtn.addEventListener("click", () => {
  curQuestionIndex++;
  if (curQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
});

function showScore() {
  reset();
  question.innerText = `Congrajulations 🎉. Your score is ${score}/5`;
  nxtBtn.display = "none";
}
quizStart();
