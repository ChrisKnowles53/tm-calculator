let firstNumber = "";
let secondNumber = "";
let operator = "";

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function mulitply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "Division by zero is not allowed";
  }
  return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return mulitply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      "Invalid operator";
  }
}

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = value;
}

function updateNumber(digit) {
  if (operator === "") {
    firstNumber += digit;
    updateDisplay(firstNumber);
  } else {
    secondNumber += digit;
    updateDisplay(secondNumber);
  }
}

function setOperator(operatorValue) {
  if (secondNumber !== "") {
    calculateResult();
  }
  operator = operatorValue;
}

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay("0");
}

function calculateResult() {
  if (operator && firstNumber !== "" && secondNumber !== "") {
    const result = operate(
      parseFloat(firstNumber),
      parseFloat(secondNumber),
      operator
    );
    updateDisplay(result);
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
  }
}

// EventListeners
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

digits.forEach((digit) => {
  digit.addEventListener("click", () => updateNumber(digit.textContent));
});

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () =>
    setOperator(operatorButton.textContent)
  );
});

equalsButton.addEventListener("click", calculateResult);
clearButton.addEventListener("click", clearCalculator);
