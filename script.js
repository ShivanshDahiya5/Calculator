let display = document.getElementById("input");

let currentValue = "";
let previousValue = "";
let operator = "";

function updateDisplay() {
    if (previousValue && operator) {
        display.value = previousValue + "" + operator + "" + currentValue;
    } else {
        display.value = currentValue || "0";
    }
}

function appendValue(value) {
    if (value === "." && currentValue.includes(".")) return;

    currentValue += value;
    updateDisplay();
}

function setOperator(op) {
    if (currentValue === "") return;

    if (previousValue !== "") {
        calculate();
    }

    operator = op;
    previousValue = currentValue;
    currentValue = "";

    updateDisplay(); // show "12 +"
}

function clearDisplay() {
    currentValue = "";
    previousValue = "";
    operator = "";
    display.value = "0";
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (currentValue === "" || previousValue === "") return;

    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentValue);
    let result;

