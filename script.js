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
        this.currOp = this.currOp.toString().slice(0, -1);

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
        let computation
        const prev = parseFloat(this.prevOp);
        const curr = parseFloat(this.currOp);
        if (isNaN(prev) || isNaN(curr)) return;
        switch(this.op) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            default:
                return;
        }
        this.currOp = computation;
        this.op = undefined;
        this.prevOp = '';
    }

    getDisplayNum = (num) => {
        const strNum = num.toString();
        const intDigits = parseFloat(strNum.split('.')[0]);
        const decDigits = strNum.split('.')[1];
        let intDisplay;
        if (isNaN(intDigits)) {
            intDisplay = '';
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`
        } else {
            return intDisplay;
        }
    }

    updateDisplay = () => {
        this.currOpElem.innerText = this.getDisplayNum(this.currOp);
        if (this.op != null) {
            this.prevOpElem.innerText = `${this.getDisplayNum(this.prevOp)} ${this.op}`;
        } else {
            this.prevOpElem.innerText = '';
        }
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

eqBtn.addEventListener('click', btn => {
    calculator.compute();
    calculator.updateDisplay();
})

acBtn.addEventListener('click', btn => {
    calculator.clear();
    calculator.updateDisplay();
})

delBtn.addEventListener('click', btn => {
    calculator.delete();
    calculator.updateDisplay();
})