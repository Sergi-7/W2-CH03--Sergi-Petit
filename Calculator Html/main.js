const output = document.getElementById("output");
const numbers = document.querySelectorAll(".num");
const dot = document.getElementById("dot");
const operands = document.querySelectorAll(".operand");
const result = document.getElementById("result");
const ac = document.getElementById("clean");
const deleteNumber = document.getElementById("delete");
const currentOperation = document.getElementById("currentOperation");

numbers.forEach((number) => {
  number.addEventListener("click", (addNum) => {
    output.innerText += number.innerText;
    currentOperation.innerText += number.innerText;
  });
});

operands.forEach((operand) =>
  operand.addEventListener("click", (addOperand) => {
    output.innerText += operand.innerText;
    currentOperation.innerText += operand.innerText;
  })
);

dot.addEventListener("click", addDot);
ac.addEventListener("click", clean);
result.addEventListener("click", addResult);
deleteNumber.addEventListener("click", deleteNum);

function clean() {
  output.innerText = "";
  currentOperation.innerText = "";
}

function deleteNum() {
  const operand = output.innerText;
  const operand2 = currentOperation.innerText;
  const length1 = operand.length - 1;
  const length2 = operand2.length - 1;
  output.innerText = operand.substring(0, length1);
  currentOperation.innerText = operand2.substring(0, length2);
}

function addDot() {
  output.innerText += dot.innerText;
  currentOperation.innerText += dot.innerText;
}

function addResult() {
  let result = output.innerText;
  result = eval(result);
  output.innerText = new Intl.NumberFormat("en-US").format(result);
}
