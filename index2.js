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
  if (secondNumber === 0) return "Division by zero is not allowed";
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

function updateDisplay
// code to update display
    
function updateNumber
// code to update first or second number
    
function setOperator
// code to set operator to button pressed
    
function clearCalculator
//code to clear
    
function calculateResult
//code to pass arguments to operate and update display
    
.addEventListener
// digit button
// operator button
// equals button
// clear button

