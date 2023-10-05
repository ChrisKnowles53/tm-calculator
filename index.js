let numberOne = "";
let numberTwo = "";
let operator = "";
let displayValue = "";

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function mulitply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
  if (numberTwo === 0) return "Division by zero is not allowed";
  return numberOne / numberTwo;
}

function calculateResult(numberOne, numberTwo, operator) {
  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);
    case "-":
      return subtract(numberOne, numberTwo);
    case "*":
      return mulitply(numberOne, numberTwo);
    case "/":
      return divide(numberOne, numberTwo);
    default:
      "Invalid operator";
  }
}

const operatorArray = ["+", "-", "*", "/"];
operatorArray.forEach((operator) => {
  createButton(operator, "operators");
});

for (let i = 0; i <= 9; i++) {
  createButton(i.toString(), "digits");
}

function createButton(label, buttonType) {
  const buttonDiv = document.getElementsByClassName(buttonType)[0];
  const button = document.createElement("button");
  button.innerText = label;
  button.style.fontSize = "25px";
  button.style.color = "white";
  button.style.borderRadius = "10px";
  button.style.width = "30px";
  button.classList.add(buttonType);

  if (buttonType === "operators") {
    button.style.backgroundColor = "grey";
    button.style.color = "black";
  } else {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  }

  buttonDiv.appendChild(button);

  button.addEventListener("click", function () {
    handleButtonClick(label);
  });
}

document.querySelector(".equals").addEventListener("click", function () {
  calculateResult();
});

document.querySelector(".clear").addEventListener("click", function () {
  clearCalculator();
});

function handleButtonClick(buttonLabel) {
  if (buttonLabel === "Clear") {
    clearCalculator();
  } else if (buttonLabel === "=") {
    calculateResult(); // ✨✨need to pass in the arguments
  } else {
    updateDisplay(buttonLabel);
  }
}

function clearCalculator() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  displayValue = "";
  const display = document.querySelector(".calculator-display");
  display.innerText = displayValue;
}

//update display
// when a digit button is pressed update the DisplayValue
// when an operator Button is pressed update the numberOne value with the displayValue

function updateDisplay(buttonLabel) {
  const display = document.querySelector(".calculator-display");
  if (isDigit(buttonLabel)) {
    displayValue += buttonLabel;
  } else if (isOperator(buttonLabel)) {
    numberOne = displayValue;
    operator = buttonLabel;
    displayValue = "";
    console.log(numberOne);
    console.log(operator);
  }
  display.innerText = displayValue;
}

function isDigit(buttonLabel) {
  return !isNaN(buttonLabel);
}

function isOperator(buttonLabel) {
  return operatorArray.includes(buttonLabel);
}

clearCalculator(); // clears the calculator on page load
