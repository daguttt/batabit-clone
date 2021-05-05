({
    plugins: ['jsdom-quokka-plugin']
})
'use strict';

// =======================================================
// Button CTA
// =======================================================
const scroll = id => {
    let a = document.getElementById(id);
    a.scrollIntoView({
        behavior: "smooth"
    });
}
const cta = document.querySelector('#cta'); 
cta.addEventListener('click', () => {
    scroll('plans');
});

// =======================================================
// Exchange rates section
// =======================================================
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const exchangeCardsContainer = document.getElementsByClassName('exchange__card-container');
rightArrow.addEventListener('click', () => {
    for (let key in exchangeCardsContainer) {
        key = parseInt(key)
        if (key !== NaN) {
            exchangeCardsContainer[key].style.marginLeft = '-100%'
            rightArrow.style.display = 'none';
            leftArrow.style.display = 'inline';
        }
        return;
    }
})
leftArrow.addEventListener('click', () => {
    for (let key in exchangeCardsContainer) {
        key = parseInt(key)
        if (key !== NaN) {
            exchangeCardsContainer[key].style.marginLeft = ''
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'inline';
        }
        return;
    }
})

// =======================================================
// Questions section
// =======================================================
const questions = document.getElementsByClassName('questions__question');
const answers = document.getElementsByClassName('questions__answer');
const arrowsY = document.getElementsByClassName('questions__flechas');
const srcDownArrow = './assets/flecha-abajo.svg';
const srcUpArrow = './assets/flecha-arriba.svg';
const hideAnswer = (index, status) => {
    for (let key in answers) {
        if (key == index) {
            if (answers[key].style.display == 'block') {
                // Change display to none
                answers[key].style.display = '';
                status = false
                return status;
            }
        }
    }
}

const showAnswer = (index, status) => {
    for (let key in answers) {
        if (key == index) {
            if (answers[key].style.display == '') {
                // Change display to block
                answers[key].style.display = 'block';
                status = true
                return status;
            }
        }
    }
}
const changeArrow = (element, type) => {
    if (type == 'down') {
        element.setAttribute('src', srcDownArrow);
    }
    if (type == 'up') {
        element.setAttribute('src', srcUpArrow);
    }
}
const verifyIfObject = (value) => {
    if (typeof value == 'object') {
        return value;
    }
    return undefined;
}
for (let key in questions) {
    let question = verifyIfObject(questions[key]);
    if (question) {
        let status = false;
        question.addEventListener('click', () => {
            if (status) {
                status = hideAnswer(key, status)
                changeArrow(arrowsY[key], 'down');
                return;
            }
            status = showAnswer(key, status);
            changeArrow(arrowsY[key], 'up');
        });
    }
}

