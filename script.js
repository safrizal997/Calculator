const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {

    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;

    }
    calculationOperator = operator;
    currentNumber = "0";
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});


const equelSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
}

equelSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
    const percent = currentNumber / 100;
    updateScreen(percent);
    currentNumber = percent;
});

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
}

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener("click", () => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});


