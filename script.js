function addition (a, b) {
    return a + b;
}

function subtraction (a, b) {
    return a - b;
}

function multiplication (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
}

let operandOne = 0;
let operandTwo = 0;
let operator = null;


const calculatorDisplay = document.getElementById("display");
calculatorDisplay.textContent = null;

const numButtons = document.querySelectorAll(".btn");

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedNumber = button.dataset.number;

        if (calculatorDisplay.textContent === '0') {
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
            operandTwo = calculatorDisplay.textContent;
        } else {
        operandOne = calculatorDisplay.textContent;
        operator = clickedOperator;
        calculatorDisplay.textContent = '0';
        
        }
  
    })
    
})


function operate (operator, num1, num2) {
    let result;
    switch(operator) {
        case '+':
           result = addition(num1, num2);
           return result;
        case '-':
            result =  subtraction(num1, num2);
            return result;
        case '*':
            result =  multiplication(num1, num2);
            return result;
        case '/':
            result =  division(num1, num2);
            return result;            
    }
}

