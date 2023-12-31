const startbutton = document.getElementById('start-btn');
const questioncontainerelement = document.getElementById('question-container');
const nextbutton = document.getElementById('next-btn');
const questionelement = document.getElementById('question');
const answerebuttonelement = document.getElementById('answer-buttons');
let shuffledquestions, currentquestionindex

startbutton.addEventListener('click', startquiz)

nextbutton.addEventListener('click', () => {
    currentquestionindex++
    setnextquestion()
})


function startquiz() {
    console.log("the quiz is started");
    startbutton.classList.add('hide');
    shuffledquestions = questions.sort(() => Math.random() - .5);
    currentquestionindex = 0;
    questioncontainerelement.classList.remove('hide');
    setnextquestion()
}

function setnextquestion() {
    resetstate()
    showquestion(shuffledquestions[currentquestionindex])
}

function showquestion(question) {

    questionelement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectanswer)
        answerebuttonelement.appendChild(button)
    });
}

function resetstate() {
    clearstatusclass(document.body)
    nextbutton.classList.add('hide')
    while (answerebuttonelement.firstChild) {
        answerebuttonelement.removeChild(answerebuttonelement.firstChild)
    }
}

function selectanswer(e) {
    const selectedbutton = e.target
    const correct = selectedbutton.dataset.correct
    setstatusclass(document.body, correct)
    Array.from(answerebuttonelement.children).forEach(button => {
        setstatusclass(button, button.dataset.correct)
    })
    if (shuffledquestions.length > currentquestionindex + 1) {
        nextbutton.classList.remove('hide')
    } else {
        startbutton.innerText = 'Restart'
        startbutton.classList.remove('hide')
    }

}

function setstatusclass(element, correct) {
    clearstatusclass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearstatusclass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [{
    question: 'what is capital city of USA ?',
    answers: [
        { text: 'washingtoncity', correct: true },
        { text: 'newyork', correct: false }
    ]
}, {
    question: 'which one is scripting language?',
    answers: [
        { text: 'javascript', correct: true },
        { text: 'python', correct: false },
        { text: 'c++', correct: false },
        { text: 'rubi', correct: false }
    ]
},{
    question: "'OS' computer abbreviation usually means ?",
    answers: [
        { text: 'Order of Significance', correct: false },
        { text: 'Open Software', correct: false },
        { text: 'Operating System', correct: true },
        { text: 'Optical Sensor', correct: false }
    ]
},{
    question: 'How many tags are in a regular HTML element?',
    answers: [
        { text: 'javascript', correct: true },
        { text: 'python', correct: false },
        { text: 'c++', correct: false },
        { text: 'rubi', correct: false }
    ]
}]



//how to use object in js application
