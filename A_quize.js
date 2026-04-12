const quizData = {
    html: [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Madrid", "Rome"],
            answer: "Paris"
        },
        {
            question: "3+3",
            options: ["4", "3", "6"],
            answer: "6"
        },
        {
            question: "A+4",
            options: ["NAN", "3", "6"],
            answer: "NAN"
        }
    ],
  css: [
        {
            question: "What is the capital of Maroc?",
            options: ["agadir", "fes", "casa"],
            answer: "Rabat"
        }
    ],
  js: [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome"],
        answer: "Paris"
    }
    ],
  accessi: [
        {
            question: "2 + 2 = ?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        }
    ]
  }

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const btnNext = document.getElementById("next")
const ques_counter = document.getElementById("Ques_counter")

let currentQuestionIndex = 0
let score=0
const subjectNames = ["html", "css", "js", "accessi"];
const subject = new URLSearchParams(window.location.search).get("subject");
let len_question = quizData[subject].length;

function goToQuiz(index) {
    window.location.href = "A_quize.html?subject=" + subjectNames[index];
} 




function StartQuize() {
  currentQuestionIndex = 0
  score=0
  showQuestion()
}

function showQuestion() {
  let currentQuestion = quizData[subject][currentQuestionIndex];
  let ques_Num = currentQuestionIndex + 1
  ques_counter.innerHTML= `Question ${ques_Num} of ${len_question}`
    questionElement.innerText = currentQuestion.question;


    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const button = document.createElement("button");
      button.id = "btn_option";
      button.className =
        "w-full flex items-center p-5 bg-color-bleu-800 rounded-3xl hover:ring-2 hover:ring-purple-600 transition-all group";

      // First span (A)
      const letterSpan = document.createElement("span");
      letterSpan.className =
        "w-14 h-14 flex items-center justify-center bg-purple-600 text-white text-2xl font-bold rounded-xl mr-8";
      letterSpan.textContent = String.fromCharCode(65 + i);

      // Second span (4.5:1)
      const textSpan = document.createElement("span");
      textSpan.className = "text-2xl font-medium";
      textSpan.textContent = currentQuestion.options[i];

      // Add spans inside button
      button.appendChild(letterSpan);
      button.appendChild(textSpan);

      // Add button to page
      document.getElementById("options").appendChild(button);
      button.addEventListener("click", selectAnswer);
      
    } 

}

function selectAnswer(e) {
    const selectedButton = e.currentTarget;
    const selectedText = selectedButton.children[1].innerText;

    const answer = quizData[subject][currentQuestionIndex].answer;

     const letterSpan = selectedButton.children[0]; 

    if (selectedText === answer) {
        score++;
        selectedButton.classList.add("correct_answer");
        letterSpan.classList.add("correct_icons");
    }
    else{
      selectedButton.classList.add("wrong_answer");
      letterSpan.classList.add("wrong_icons");
    }
}


function nextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < len_question) {
    console.log(currentQuestionIndex)
    showQuestion()
  } else {
    goToscore()
  }
}


btnNext.addEventListener("click", () => {
  if (currentQuestionIndex < len_question - 1) {
    nextButton();
  } else {
    goToscore();
  }
});


function goToscore() {
  window.location.href = `A_score.html?subject=${subject}&score=${score}&total=${len_question}`;
} 
StartQuize()
