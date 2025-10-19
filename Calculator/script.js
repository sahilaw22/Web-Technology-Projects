document.getElementById("display").value = "0";
function addValue(value) {
    let display = document.getElementById("display");
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}
function deleteLast() {
    let display = document.getElementById("display");
    if (display.value = display.value.slice(0, -1)) {
        display.value = display.value.slice(0, -1);
    }   else {
        display.value = "0";
}
}
function clearDisplay() {
    document.getElementById("display").value = "0";
}
function calculate() {
    let result = document.getElementById("display").value;

    try { 
    document.getElementById("display").value = eval(result);
    }   catch (error) {
        alert("Invalid input");
    }
}