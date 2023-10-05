// eventually these three variables will be linked to an event listenre to listen for each button being clicked
let numberOne = "";
let numberTwo = "";
let operator = "";

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

function operate(numberOne, numberTwo, operator) {
  switch (operator) {
    case "+":
      add(numberOne, numberTwo);
      break;
    case "-":
      subtract(numberOne, numberTwo);
      break;
    case "*":
      mulitply(numberOne, numberTwo);
      break;
    case "/":
      divide(numberOne, numberTwo);
      break;
    default:
      "Invalid operator";
  }
}

function createButton(label, buttonType) {
  const buttonDiv = document.getElementsByClassName(buttonType)[0];
  const button = document.createElement("button");
  button.innerText = label;
  if (buttonType === "operators") {
    button.style.backgroundColor = "grey";
    button.style.color = "black";
  } else {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  }
  button.style.fontSize = "25px";
  button.style.color = "white";
  button.style.borderRadius = "10px";
  button.style.width = "30px";

  buttonDiv.appendChild(button);
}

const operatorArray = ["+", "-", "*", "/"];

for (let i = 0; i <= 9; i++) {
  createButton(i.toString(), "digits");
}

operatorArray.forEach((operator) => {
  createButton(operator, "operators");
});
