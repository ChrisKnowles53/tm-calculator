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
    // If an operator is present, calculate the result with numberOne and numberTwo
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
    calculateResult(); // ✨✨need to pass in the arguments
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
    if (displayValue === "0") {
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
      console.log(numberTwo);
      numberOne = calculateResult(
        parseFloat(numberOne),
        parseFloat(numberTwo),
        operator
      ).toString();
      operator = buttonLabel;
      displayValue = "0";
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

// Rules

// ✅ Step1: listen for digits being entered and display in displayValue
// ✅ Step2: listen for an operator button being pressed and store displayValue as numberOne
// Step3: listen for digits being entered and display in displayValue
//💭 if numberOne is not empty then we are working on numberTwo
// if = is pressed store displayValue as numberTwo, calculateResult updating displayValue with the answer
// if an operater is pressed, calculateResult and store it as numberOne, repeat step3
