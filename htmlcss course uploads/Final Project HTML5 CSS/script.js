const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "",
    },
   
	  {
       question: "What year was CSS launched?",
        a: "1950",
        b: "1996",
        c: "2013",
        d: "none of the above",
        correct: "",
    },
	  {
        question: "Who makes Web Standards?",
        a: "Google",
        b: "IEEE",
        c: "W3C",
        d: "none of the above",
        correct: "",
    },
	  {
        question: "Which is the HTML element for the largest heading?",
        a: "<header>",
        b: "<h1>",
        c: "<h6>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<break>",
        c: "<span>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which adds a background color?",
        a: "<background>yellow</background>",
        b: "<body bg=yellow>",
        c: "<bgColor>red</bgColor>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which of the following is STRONGLY emphasized text?",
        a: "<strong>",
        b: "<i>",
        c: "!important",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which creates a hyperlink?",
        a: "<link>",
        b: "<a href='http://www.google.com'>click</a>",
        c: "<a name='top'></a>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which of these elements are all <table> elements?",
        a: "<table><tr><td>",
        b: "<table><tr><head>",
        c: "<table><tr><foot>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "By default in HTML, inline elements are normally displayed without starting a new line.",
        a: "true",
        b: "false",
        c: "sometimes",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "<body>",
        b: "anywhere",
        c: "<head>",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "<style>",
        c: "class",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which is correct?",
        a: "{body:background:gray}",
        b: "body{background:gray}",
        c: "body=background:grey",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which CSS property changes the text color?",
        a: "font-color",
        b: "color",
        c: "background-color",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "Which CSS property changes the background color?",
        a: "bgcolor",
        b: "background-color only with no shortcut",
        c: "background-color or just background for short",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "What is an example of relative sizes?",
        a: "2em",
        b: "150%",
        c: "a and b",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "What is the correct CSS syntax for making all the <p> elements in the whole file bold?",
        a: "div p",
        b: "p + ul",
        c: "p.active",
        d: "none of the above",
        correct: "",
    },
		  {
        question: "How do you display hyperlinks without an underline?",
        a: "a{text-decoration:none;}",
        b: "a{underline:none;}",
        c: "a{text-decoration:no-underline;}",
        d: "none of the above",
        correct: "",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})