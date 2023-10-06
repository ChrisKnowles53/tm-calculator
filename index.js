let numberOne = "";
let numberTwo = "";
let operator = "";
let displayValue = "0";

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
  const display = document.querySelector(".calculator-display");
  display.innerText = displayValue;
  if (operator !== "") {
    numberTwo = displayValue;
    const result = calculateResult(
      parseFloat(numberOne),
      parseFloat(numberTwo),
      operator
    );
    displayValue = result.toString();
    numberOne = "";
    numberTwo = "";
    operator = "";
    display.innerText = displayValue;
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  clearCalculator();
});

function handleButtonClick(buttonLabel) {
  if (buttonLabel === "Clear") {
    clearCalculator();
  } else if (buttonLabel === "=") {
    calculateResult();
  } else {
    updateDisplay(buttonLabel);
  }
}

function clearCalculator() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  displayValue = "0";
  const display = document.querySelector(".calculator-display");
  display.innerText = displayValue;
}

function updateDisplay(buttonLabel) {
  const display = document.querySelector(".calculator-display");
  if (isDigit(buttonLabel)) {
    if (displayValue === "0" || operator !== "") {
      displayValue = buttonLabel;
    } else {
      displayValue += buttonLabel;
    }
  } else if (isOperator(buttonLabel)) {
    if (numberOne === "") {
      numberOne = displayValue;
      operator = buttonLabel;
      displayValue = "0";
      console.log(numberOne);
      console.log(operator);
    } else {
      numberTwo = displayValue;
      numberOne = calculateResult(
        parseFloat(numberOne),
        parseFloat(numberTwo),
        operator
      ).toString();
      operator = buttonLabel;
      displayValue = numberOne;
    }
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
