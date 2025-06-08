function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Can't divide by 0!"
    } else {
        return a / b;
    }

}

let operandOne = 0;
let operandTwo = 0;
let operator = null;
let awaitingNextNumber = false;



const calculatorDisplay = document.getElementById("display");
calculatorDisplay.textContent = null;

const numButtons = document.querySelectorAll(".btn");

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedNumber = button.dataset.number;
        if (awaitingNextNumber == true) {
            calculatorDisplay.textContent = clickedNumber;
            awaitingNextNumber = false;
        } else if (calculatorDisplay.textContent === '0') {
            calculatorDisplay.textContent = clickedNumber;
        } else {
            calculatorDisplay.textContent += button.dataset.number;
        }

    })

})


const operatorButtons = document.querySelectorAll(".btn-operator");

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedOperator = button.dataset.operator;
        if (clickedOperator === '=') {
            if (operator === null) {
                calculatorDisplay.textContent = 0;
            } else {
                operandTwo = calculatorDisplay.textContent;
                let result = operate(operator, operandOne, operandTwo);
                calculatorDisplay.textContent = result;
                awaitingNextNumber = true;
                operator = null;
                operandOne = null;
                operandTwo = null;
            }
        } else {
            if ((operator !== null && operandOne !== null) && (calculatorDisplay.textContent !== '0')) {
                operandTwo = calculatorDisplay.textContent;
                let result = operate(operator, operandOne, operandTwo)
                operandOne = result;
                calculatorDisplay.textContent = result;
            } else {
                operandOne = calculatorDisplay.textContent;
            }
            operator = clickedOperator;
            calculatorDisplay.textContent = '0';

        }

    });

});


function operate(operator, num1, num2) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            result = addition(num1, num2);
            result = parseFloat(result.toFixed(2));
            return result;
        case '-':
            result = subtraction(num1, num2);
            result = parseFloat(result.toFixed(2));
            return result;
        case '*':
            result = multiplication(num1, num2);
            result = parseFloat(result.toFixed(2));
            return result;
        case '/':
            result = division(num1, num2);
            if (typeof result === 'string') {
                return result;
            } else {
                result = parseFloat(result.toFixed(2));
                return result;
            }

    }
}

const clearButton = document.querySelector(".btn-clear");

clearButton.addEventListener("click", () => {
    operandOne = 0;
    operandTwo = 0;
    operator = null;
    calculatorDisplay.textContent = '0';
})