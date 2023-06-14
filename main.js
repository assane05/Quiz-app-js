var myQuestions = [
  {
    question: "1) Que signifie HTML ?",
    answers: {
      a: "hyperlinks and text markup language",
      b: "Hyper text Markup language",
      c: "Home tool markup language",
    },
    correctAnswer: "b",
  },
  {
    question: "2) Qui fait les standards du Web ?",
    answers: {
      a: "Google",
      b: "Facebook",
      c: "The world wide web consortium",
      d: "Mozila",
    },
    correctAnswer: "c",
  },
  {
    question:
      "3) Choisissez l'element html correct pour le titre le plus grand  ?",
    answers: {
      a: "&lt;heading&gt;",
      b: "&lt;h5&gt;",
      c: "&lt;title&gt;",
      d: "&lt;h1&gt;",
    },
    correctAnswer: "d",
  },
  {
    question:
      "4) Choisissez l'element html correct pour inserer un saut de ligne ?",
    answers: {
      a: "&lt;hr&gt;",
      b: "&lt;br&gt;",
      c: "&lt;lb&gt;",
      d: "&lt;break&gt;",
    },
    correctAnswer: "b",
  },
  {
    question:
      "5) Choisissez l'element html correct pour inserer une ligne horizontal ?",
    answers: {
      a: "&lt;hr&gt;",
      b: "&lt;br&gt;",
      c: "&lt;lb&gt;",
      d: "&lt;break&gt;",
    },
    correctAnswer: "a",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];
      var answers = [];

      for (letter in question.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${i}" value="${letter}">
            ${letter}: ${question.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question">${question.question}</div>
         <div class="answers">${answers.join("")}</div>`
      );
    }

    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var userAnswers = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      var answerContainer = answerContainers[i];
      var selectedInput = answerContainer.querySelector(
        `input[name="question${i}"]:checked`
      );

      if (selectedInput) {
        var selectedAnswer = selectedInput.value;

        if (selectedAnswer === questions[i].correctAnswer) {
          numCorrect++;
          selectedInput.parentElement.classList.add("correct");
        } else {
          selectedInput.parentElement.classList.add("incorrect");
        }
      }
    }

    resultsContainer.innerHTML = `${numCorrect} réponse(s) trouvée(s) sur ${questions.length}`;
  }

  showQuestions(questions, quizContainer);
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
