const numBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operation]');
const eqBtn = document.getElementById('eq');
const acBtn = document.getElementById('ac');
const delBtn = document.getElementById('del');
const prevOp = document.querySelector('[data-prev-op]');
const currOp = document.querySelector('[data-curr-op]');

class Calculator {
    constructor(prevOp, currOp) {
        this.prevOp = prevOp;
        this.currOp = currOp;
        this.clear;
    }

    clear = () => {
        this.currOp = '';
        this.prevOp = '';
        this.op = undefined;
    }

    delete = () => {

    }

    appendNum = (num) => {
        this.currOp = num;
    }

    chooseOp = (op) => {

    }

    compute = () => {

    }

    updateDisplay = () => {
        this.currOp.innerText = currOp;
    }
}

const calculator = new Calculator(prevOp, currOp)
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNum(btn.innerText);
        calculator.updateDisplay();
    })
})