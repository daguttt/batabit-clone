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
// Questions section
// =======================================================
const downArrows = document.getElementsByClassName('questions__flecha-abajo');
const upArrows = document.getElementsByClassName('questions__flecha-arriba');
const answers = document.getElementsByClassName('questions__answer');

const hideAnswer = (index) => {
    for (let key in answers) {
        if (key == index) {
            if (answers[key].style.display == 'block') {
                // Change display to none
                answers[key].style.display = '';
                return;
            }
        }
    }
}

const showAnswer = (index) => {
    for (let key in answers) {
        if (key == index) {
            if (answers[key].style.display == '') {
                // Change display to block
                answers[key].style.display = 'block';
                return;
            }
        }
    }
}
const changeArrow = (index, type) => {
    if (type == 'down') {
        for (let key in upArrows) {
            if (key == index) {
                if (upArrows[key].style.display === 'inline') {
                    upArrows[key].style.display = 'none';
                    downArrows[key].style.display = 'inline';
                }
            }
        }
    }
    if (type == 'up') {
        for (let key in downArrows) {
            if (key == index) {
                if (downArrows[key].style.display.length === 0 || downArrows[key].style.display === 'inline') {
                    downArrows[key].style.display = 'none';
                    upArrows[key].style.display = 'inline';
                }
            }
        }
    }
    
}
const verifyIfObject = (value) => {
    if (typeof value == 'object') {
        return value;
    }
    return undefined;
}
for(let key in downArrows) {
    let downArrow = verifyIfObject(downArrows[key]);
    if (downArrow) {
        downArrow.addEventListener('click', () => {
            showAnswer(key);
            changeArrow(key, 'up');
        });
    }
}
for (let key in upArrows) {
    let upArrow = verifyIfObject(upArrows[key]);
    if (upArrow) {
        upArrow.addEventListener('click', () => {
            hideAnswer(key);
            changeArrow(key, 'down');
        })
    }
}
