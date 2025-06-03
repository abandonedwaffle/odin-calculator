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
calculatorDisplay.textContent = 0;
