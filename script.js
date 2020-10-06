class Calculator {
    constructor(prevOpElem, currOpElem) {
        this.prevOpElem = prevOpElem;
        this.currOpElem = currOpElem;
        this.clear();
    }

    clear = () => {
        this.currOp = '';
        this.prevOp = '';
        this.op = undefined;
    }

    delete = () => {

    }

    appendNum = (num) => {
        if(num === '.' && this.currOp.includes('.')) return;
        this.currOp = this.currOp.toString() + num.toString();
    }

    chooseOp = (op) => {
        if (this.currOp === "") return;
        if (this.prevOp !== "") {
            this.compute();
        }
        this.op = op;
        this.prevOp = this.currOp;
        this.currOp = '';
    }

    compute = () => {

    }

    updateDisplay = () => {
        this.currOpElem.innerText = this.currOp;
        this.prevOpElem.innerText = this.prevOp;
    }
}

const numBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operation]');
const eqBtn = document.getElementById('eq');
const acBtn = document.getElementById('ac');
const delBtn = document.getElementById('del');
const prevOpElem = document.querySelector('[data-prev-op]');
const currOpElem = document.querySelector('[data-curr-op]');

const calculator = new Calculator(prevOpElem, currOpElem)

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNum(btn.innerText);
        calculator.updateDisplay();
    })
})

opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOp(btn.innerText);
        calculator.updateDisplay();
    })
})