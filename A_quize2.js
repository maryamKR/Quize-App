const quizData = {
  html: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tabular Main Log"], answer: "Hyper Text Markup Language" },
    { question: "Which tag is used for the largest heading?", options: ["<h6>", "<head>", "<h1>"], answer: "<h1>" },
    { question: "What is the correct tag for a line break?", options: ["<lb>", "<br>", "<break>"], answer: "<br>" },
    { question: "Which attribute is used to provide an image's source?", options: ["src", "href", "link"], answer: "src" },
    { question: "How do you make a bulleted list?", options: ["<ol>", "<ul>", "<list>"], answer: "<ul>" },
    { question: "Which HTML element is used for the title of a page?", options: ["<head>", "<title>", "<meta>"], answer: "<title>" },
    { question: "What is the correct HTML for creating a hyperlink?", options: ["<a>http://google.com</a>", "<a href='http://google.com'>Google</a>", "<link>http://google.com</link>"], answer: "<a href='http://google.com'>Google</a>" },
    { question: "Which character is used to indicate an end tag?", options: ["*", "<", "/"], answer: "/" },
    { question: "Which element is a container for all visible HTML content?", options: ["<head>", "<body>", "<html>"], answer: "<body>" },
    { question: "What is the correct HTML for making a checkbox?", options: ["<check>", "<input type='check'>", "<input type='checkbox'>"], answer: "<input type='checkbox'>" }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax"], answer: "Cascading Style Sheets" },
    { question: "Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <body> section", "At the end of the document", "In the <head> section"], answer: "In the <head> section" },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>"], answer: "<style>" },
    { question: "Which CSS property is used to change the background color?", options: ["color", "background-color", "bgcolor"], answer: "background-color" },
    { question: "Which CSS property is used to change the text color of an element?", options: ["fgcolor", "text-style", "color"], answer: "color" },
    { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo"], answer: "#demo" },
    { question: "How do you select elements with class name 'test'?", options: ["*test", ".test", "#test"], answer: ".test" },
    { question: "Which property is used to change the font of an element?", options: ["font-style", "font-family", "font-weight"], answer: "font-family" },
    { question: "How do you make the text bold?", options: ["font-weight: bold", "style: bold", "font: bold"], answer: "font-weight: bold" },
    { question: "Which property is used to center text?", options: ["text-align", "align-content", "vertical-align"], answer: "text-align" }
  ],
  js: [
    { question: "What is the result of 10 + '5'?", options: ["15", "105", "NaN"], answer: "105" },
    { question: "Which keyword is used to declare a constant variable?", options: ["var", "let", "const"], answer: "const" },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World')", "alert('Hello World')", "console.log('Hello World')"], answer: "alert('Hello World')" },
    { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "create function()"], answer: "function myFunction()" },
    { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction()"], answer: "myFunction()" },
    { question: "Which operator is used to assign a value to a variable?", options: ["*", "=", "x"], answer: "=" },
    { question: "What will 'typeof []' return?", options: ["array", "list", "object"], answer: "object" },
    { question: "How do you write an IF statement in JavaScript?", options: ["if i = 5 then", "if (i == 5)", "if i == 5"], answer: "if (i == 5)" },
    { question: "How does a FOR loop start?", options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"], answer: "for (i = 0; i <= 5; i++)" },
    { question: "What is the result of Boolean(10 > 9)?", options: ["true", "false", "NaN"], answer: "true" }
  ],
  accessibility: [
    { question: "What does WCAG stand for?", options: ["Web Content Accessibility Guidelines", "Web Compliance Advisory Group", "Wireless Center Accessibility Gate"], answer: "Web Content Accessibility Guidelines" },
    { question: "Which attribute provides text descriptions for images?", options: ["title", "alt", "desc"], answer: "alt" },
    { question: "What is the minimum contrast ratio for normal text (Level AA)?", options: ["2:1", "3:1", "4.5:1"], answer: "4.5:1" },
    { question: "Which HTML element should be used for site navigation?", options: ["<div id='nav'>", "<nav>", "<section>"], answer: "<nav>" },
    { question: "What does ARIA stand for?", options: ["Accessible Rich Internet Applications", "Automated Reading Interface Area", "Advanced Responsive Internet Access"], answer: "Accessible Rich Internet Applications" },
    { question: "True or False: Color should be the only way to convey information.", options: ["True", "False"], answer: "False" },
    { question: "Which tag helps screen readers identify the main language of a page?", options: ["<meta lang='en'>", "<html lang='en'>", "<body lang='en'>"], answer: "<html lang='en'>" },
    { question: "What is the purpose of a 'Skip to Content' link?", options: ["To skip the footer", "To bypass repetitive navigation", "To go to the next page"], answer: "To bypass repetitive navigation" },
    { question: "Which attribute is used to mark an element as decorative so screen readers ignore it?", options: ["aria-hidden='true'", "role='none'", "hidden='true'"], answer: "aria-hidden='true'" },
    { question: "Why should you use semantic HTML tags like <button> instead of <div>?", options: ["They look better by default", "They have built-in keyboard and screen reader support", "They load faster"], answer: "They have built-in keyboard and screen reader support" }
  ]
}

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const btnNext = document.getElementById("next")
const ques_counter = document.getElementById("Ques_counter")

let currentQuestionIndex = 0
let score=0


const subjectNames = ["html", "css", "js", "accessibility"];
const subject = new URLSearchParams(window.location.search).get("subject");

function goToQuiz(index) {
    window.location.href = "A_quize.html?subject=" + subjectNames[index];
} 


let len_question = quizData[subject].length;

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
      //button.id = "btn_option";
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

/*const progressClasses = [
    "spacing-100",
    "spacing-200",
    "spacing-300",
    "spacing-400",
    "spacing-500",
    "spacing-600",
    "spacing-800",
    "spacing-1600",
    "spacing-1800",
    "spacing-2300",
]*/
let progress_bar = document.getElementById("progress")
function selectAnswer(e) {
    const selectedButton = e.currentTarget;
    const selectedText = selectedButton.children[1].innerText;

    const answer = quizData[subject][currentQuestionIndex].answer;

     const letterSpan = selectedButton.children[0]; 
     const alert = document.getElementById("alert")
    

      if (selectedText === answer) {
        score++;
        selectedButton.classList.add("correct_answer");
        letterSpan.classList.add("correct_icons");

        /*progress_bar.classList.remove(...progressClasses)
        progress_bar.classList.add(progressClasses[score-1])
        console.log(progressClasses[score-1])*/
        let progress = (score / len_question) * 100
        progress_bar.style.width = `${progress}%`
      }
      else{
        selectedButton.classList.add("wrong_answer");
        letterSpan.classList.add("wrong_icons");
      }
      
      for (let i = 0; i < optionsElement.children.length; i++) {
        optionsElement.children[i].style.pointerEvents = "none";
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
    const alert = document.getElementById("alert");
    const isAnswerSelected = document.querySelector(".selected") !== null;

    if (!isAnswerSelected) {
        alert.classList.add("wrong_msg");
        alert.classList.remove("hidden");
        return; 
    }

    alert.classList.add("hidden"); 

    if (currentQuestionIndex < len_question - 1) {
        nextButton();
    } else {
        goToScore();
    }
});





function goToscore() {
  window.location.href = `A_score.html?subject=${subject}&score=${score}&total=${len_question}`;
} 
// funtion to switch between light and dark mode 
const themeToggle = document.getElementById("theme-toggle");

function toggleDarkMode(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        toggleDarkMode(themeToggle.checked);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (themeToggle) themeToggle.checked = true;
    }
});
StartQuize()
