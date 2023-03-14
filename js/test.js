const DATA = [
    {
        question: 'Может назвать полностью свое имя, отчество и фамилию, свой возраст и дату рождения, половую принадлежность',
        answers: [
            {
                id: '1',
                value: '0 баллов – обучающийся не отвечает на поставленный вопрос, даже при помощи педагога',
                correct: true
            },
            {
                id: '2',
                value: '1 балл – обучающийся правильно отвечает на поставленный вопрос при значительной помощи (нескольких наводящих вопросов) педагога;',
                correct: false
            },
            {
                id: '3',
                value: '2 балл – обучающийся правильно отвечает на вопрос при незначительной помощи (не более чем одного наводящего вопроса) педагога;',
                correct: false
            },
            {
                id: '4',
                value: '3 балла – обучающийся сразу правильно без помощи педагога отвечает на поставленный вопрос.',
                correct: false
            }
        ]
    },
    {
        question: 'Вопрос 2',
        answers: [
            {
                id: '4',
                value: 'Ответ 4',
                correct: false
            },
            {
                id: '5',
                value: 'Ответ 5',
                correct: true
            }
        ]
    }
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

// рендер вопросов. Выводить какие-то вопросы
const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    // рендерит ответы относящиеся к определенному вопросу
    const renderAnswers = () => 
        DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
            `)
        .join('');
    
    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item__question"> ${DATA[index].question} </div>
        <ul class="quiz-questions-item__answers"> ${renderAnswers()} </ul>
    </div>
    `;
    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item__question"> ${DATA[index].question} </div>
        <ul class="quiz-questions-item__answers"> ${renderAnswers()} </ul>
    </div>
    `;
};

// рендер результатов
const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if(!answer.correct && answer.id === localResults[questionIndex]){
            classname = 'answer--invalid';
        } else if(answer.correct){
            classname = 'answer--valid';
        }


        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
    .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');                  
    

    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
        <div class="quiz-results-item__question"> ${question.question} </div>
        <ul class="quiz-results-item__answers">${getAnswers(index)} </ul>
        </div>
        `;
    });

    results.innerHTML = content;

};

// рендер индикатора
const renderIndicator = (currentStep) => {
    indicator.innerHTML = `
        ${currentStep}/${DATA.length}
    `;
};

// 1. Добавить слушатели (Почитать что это такое)

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('answer-input')){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    //проверяет нажатие на кнопки Далее или С начала
    
    if(event.target.classList.contains('btn-next')){
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if(DATA.length === nextQuestionIndex){
            
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hedden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            
            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
            //переход к следующему вопросу
        }
        
        btnNext.disabled = true;

    }

    if(event.target.classList.contains('btn-restart')){
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hedden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);