const quizData = [
    {
        question: "With over 222 million units sold, what is Apple's highest-selling iPhone model?",
        a: "iPhone 6/6 Plus",
        b: "iPhone 7/7 Plus",
        c: "iPhone 8/8 Plus",
        d: "iPhone Xr/Xs/XS Max",
        correct: "a",
    },
    {
        question: "In which year was the Microsoft XP operating system released?",
        a: "1998",
        b: "1999",
        c: "2000",
        d: "2001",
        correct: "d",
    },
    {
        question: "Elon Musk is the CEO of which global brand",
        a: "Microsoft",
        b: "Tesla",
        c: "Bitcoin",
        d: "Google",
        correct: "b",
    },
    {
        question: "Which operating system does a Google Pixel phone use?",
        a: "Android",
        b: "iOs",
        c: "Windows Phone OS",
        d: "Blackberry OS",
        correct: "a",
    },
    {
        question: "In which year was the Sony Playstation 5 first release?",
        a: "2018",
        b: "2019",
        c: "2020",
        d: "2021",
        correct: "c",
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