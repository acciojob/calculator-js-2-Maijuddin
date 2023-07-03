function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearOneCharacter() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

function calculate() {
    var displayValue = document.getElementById("display").value;
    var result = eval(displayValue);
    document.getElementById("display").value = result;
}
