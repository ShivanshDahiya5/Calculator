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