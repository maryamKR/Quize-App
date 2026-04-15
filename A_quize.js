const quizData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Tabular Main Log",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<head>", "<h1>", "<header>"],
      answer: "<h1>",
    },
    {
      question: "What is the correct tag for a line break?",
      options: ["<lb>", "<br>", "<break>", "<line>"],
      answer: "<br>",
    },
    {
      question: "Which attribute is used to provide an image's source?",
      options: ["src", "href", "link", "path"],
      answer: "src",
    },
    {
      question: "How do you make a bulleted list?",
      options: ["<ol>", "<ul>", "<list>", "<li>"],
      answer: "<ul>",
    },
    {
      question: "Which HTML element is used for the title of a page?",
      options: ["<head>", "<title>", "<meta>", "<header>"],
      answer: "<title>",
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        "<a>http://google.com</a>",
        "<a href='http://google.com'>Google</a>",
        "<link>http://google.com</link>",
        "<href>Google</href>",
      ],
      answer: "<a href='http://google.com'>Google</a>",
    },
    {
      question: "Which character is used to indicate an end tag?",
      options: ["*", "<", "/", ">"],
      answer: "/",
    },
    {
      question: "Which element is a container for all visible HTML content?",
      options: ["<head>", "<body>", "<html>", "<main>"],
      answer: "<body>",
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: [
        "<check>",
        "<input type='check'>",
        "<input type='checkbox'>",
        "<box>",
      ],
      answer: "<input type='checkbox'>",
    },
  ],

  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Syntax",
        "Colorful Style System",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        "In the <body> section",
        "At the end of the document",
        "In the <head> section",
        "Inside <footer>",
      ],
      answer: "In the <head> section",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<script>", "<style>", "<design>"],
      answer: "<style>",
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: ["color", "background-color", "bgcolor", "background-style"],
      answer: "background-color",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["fgcolor", "text-style", "color", "font-color"],
      answer: "color",
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: ["#demo", ".demo", "demo", "*demo"],
      answer: "#demo",
    },
    {
      question: "How do you select elements with class name 'test'?",
      options: ["*test", ".test", "#test", "test"],
      answer: ".test",
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-style", "font-family", "font-weight", "text-font"],
      answer: "font-family",
    },
    {
      question: "How do you make the text bold?",
      options: ["font-weight: bold", "style: bold", "font: bold", "text: bold"],
      answer: "font-weight: bold",
    },
    {
      question: "Which property is used to center text?",
      options: [
        "text-align",
        "align-content",
        "vertical-align",
        "justify-text",
      ],
      answer: "text-align",
    },
  ],

  js: [
    {
      question: "What is the result of 10 + '5'?",
      options: ["15", "105", "NaN", "Error"],
      answer: "105",
    },
    {
      question: "Which keyword is used to declare a constant variable?",
      options: ["var", "let", "const", "static"],
      answer: "const",
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "msg('Hello World')",
        "alert('Hello World')",
        "console.log('Hello World')",
        "prompt('Hello World')",
      ],
      answer: "alert('Hello World')",
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function myFunction()",
        "function:myFunction()",
        "create function()",
        "new function myFunction()",
      ],
      answer: "function myFunction()",
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "run myFunction()",
      ],
      answer: "myFunction()",
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "=", "x", ":"],
      answer: "=",
    },
    {
      question: "What will 'typeof []' return?",
      options: ["array", "list", "object", "undefined"],
      answer: "object",
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if => i == 5"],
      answer: "if (i == 5)",
    },
    {
      question: "How does a FOR loop start?",
      options: [
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for i = 1 to 5",
        "loop (i = 0)",
      ],
      answer: "for (i = 0; i <= 5; i++)",
    },
    {
      question: "What is the result of Boolean(10 > 9)?",
      options: ["true", "false", "NaN", "undefined"],
      answer: "true",
    },
  ],

  accessibility: [
    {
      question: "What does WCAG stand for?",
      options: [
        "Web Content Accessibility Guidelines",
        "Web Compliance Advisory Group",
        "Wireless Center Accessibility Gate",
        "Web Coding Access Guide",
      ],
      answer: "Web Content Accessibility Guidelines",
    },
    {
      question: "Which attribute provides text descriptions for images?",
      options: ["title", "alt", "desc", "src"],
      answer: "alt",
    },
    {
      question:
        "What is the minimum contrast ratio for normal text (Level AA)?",
      options: ["2:1", "3:1", "4.5:1", "5:1"],
      answer: "4.5:1",
    },
    {
      question: "Which HTML element should be used for site navigation?",
      options: ["<div id='nav'>", "<nav>", "<section>", "<menu>"],
      answer: "<nav>",
    },
    {
      question: "What does ARIA stand for?",
      options: [
        "Accessible Rich Internet Applications",
        "Automated Reading Interface Area",
        "Advanced Responsive Internet Access",
        "Applied Reader Internet Access",
      ],
      answer: "Accessible Rich Internet Applications",
    },
    {
      question:
        "True or False: Color should be the only way to convey information.",
      options: ["True", "False", "Sometimes", "Only in dark mode"],
      answer: "False",
    },
    {
      question:
        "Which tag helps screen readers identify the main language of a page?",
      options: [
        "<meta lang='en'>",
        "<html lang='en'>",
        "<body lang='en'>",
        "<lang='en'>",
      ],
      answer: "<html lang='en'>",
    },
    {
      question: "What is the purpose of a 'Skip to Content' link?",
      options: [
        "To skip the footer",
        "To bypass repetitive navigation",
        "To go to the next page",
        "To reload content",
      ],
      answer: "To bypass repetitive navigation",
    },
    {
      question:
        "Which attribute is used to mark an element as decorative so screen readers ignore it?",
      options: [
        "aria-hidden='true'",
        "role='none'",
        "hidden='true'",
        "display='none'",
      ],
      answer: "aria-hidden='true'",
    },
    {
      question:
        "Why should you use semantic HTML tags like <button> instead of <div>?",
      options: [
        "They look better by default",
        "They have built-in keyboard and screen reader support",
        "They load faster",
        "They use less memory",
      ],
      answer: "They have built-in keyboard and screen reader support",
    },
  ],
};

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const btnNext = document.getElementById("next");
const ques_counter = document.getElementById("Ques_counter");

let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

const subjectNames = ["html", "css", "js", "accessibility"];
const subject = new URLSearchParams(window.location.search).get("subject");

function goToQuiz(index) {
  window.location.href = "A_quize.html?subject=" + subjectNames[index];
}

let len_question = quizData[subject].length;

function StartQuize() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  isAnswered = false;
  let currentQuestion = quizData[subject][currentQuestionIndex];
  let ques_Num = currentQuestionIndex + 1;

  //Number of Question
  ques_counter.innerHTML = `Question ${ques_Num} of ${len_question}`;
  questionElement.innerText = currentQuestion.question;

  // Options
  optionsElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const iconImg = document.createElement("img");
    iconImg.className = "ml-auto hidden w-[32px] h-[32px]";

    const button = document.createElement("button");
    //button.id = "btn_option";
    button.className = "answers transition-all group";

    // First span (A)
    const letterSpan = document.createElement("span");
    letterSpan.className =
      "answers_icons text-Preset4 bg-grey-50 text-grey-500 group-hover:bg-purple-600 group-hover:text-white";
    letterSpan.textContent = String.fromCharCode(65 + i);

    // Second span (4.5:1)
    const textSpan = document.createElement("span");
    textSpan.className = "text-2xl font-medium";
    textSpan.textContent = currentQuestion.options[i];

    // Add spans inside button
    button.appendChild(letterSpan);
    button.appendChild(textSpan);
    button.appendChild(iconImg);

    // Add button to page
    document.getElementById("options").appendChild(button);
    button.addEventListener("click", selectAnswer);
  }
}

let progress_bar = document.getElementById("progress");


function selectAnswer(e) {
  const selectedButton = e.currentTarget;
  let selectedText = selectedButton.children[1].innerText;

  const answer = quizData[subject][currentQuestionIndex].answer;

  const letterSpan = selectedButton.children[0];
  const iconImg = selectedButton.children[2];
  isAnswered = true;

  document.getElementById("alert").classList.add("hidden");

   //if answer is correct
  if (selectedText === answer) {
    score++;
    selectedButton.classList.add("correct_answer");
    letterSpan.classList.add("correct_icons");

    iconImg.src = "assets/fluent_checkmark-circle-16-regular.png";
    iconImg.classList.remove("hidden");

        // Progress Bar
    let progress = score * len_question;
    progress_bar.style.width = `${progress}%`;
  } 
  // if answer is wrong
  else { 
    selectedButton.classList.add("wrong_answer");
    letterSpan.classList.add("wrong_icons");

    iconImg.src = "assets/fluent_dismiss-circle-16-regular.png";
    iconImg.classList.remove("hidden");

    goToscore();
  }

  // disable the other buttons
  for (let i = 0; i < optionsElement.children.length; i++) {
    optionsElement.children[i].style.pointerEvents = "none";
  }
}

function nextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < len_question) {
    console.log(currentQuestionIndex);
    showQuestion();
  } else {
    goToscore();
  }
}

btnNext.addEventListener("click", () => {
  const alert = document.getElementById("alert");
  // If you don’t click any answer
  if (!isAnswered) {
    alert.classList.remove("hidden");
    return
  }

  alert.classList.add("hidden");

  if (currentQuestionIndex < len_question - 1) {
    nextButton();
  } else {
    goToscore();
  }
});

// got To score page
function goToscore() {
  window.location.href = `A_score.html?subject=${subject}&score=${score}&total=${len_question}`;
}

StartQuize();
