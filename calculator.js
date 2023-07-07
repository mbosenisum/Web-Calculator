
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let val1 = null;
let val2 = null;
let opVal = null;

let digits = document.getElementById("digits");

let opChars = ['+', '-', '*', '/', '=', '.', 'clear'];


// digits html buttons
// clean up with additional functions? 
for (let i = 2; i >= 0; i--) {
    let digitRow = document.createElement('div');
    digitRow.classList.add("digitRow");
    for (let j = 1; j < 4; j++) {
        let digit = document.createElement('button');
        digit.textContent = `${i * 3 + j}`;
        digit.classList.add("square");
        digit.addEventListener("click", numPress);
        digitRow.appendChild(digit);
    }
    digits.appendChild(digitRow);
}

let digitRow = document.createElement('div');
digitRow.classList.add("digitRow");
let digit = document.createElement('button');
digit.textContent = "0";
digit.classList.add("square");
digit.addEventListener("click", numPress);
digitRow.appendChild(digit);
digits.appendChild(digitRow);


// operation html buttons

let ops = document.getElementById("operations");

for (i = 0; i < opChars.length; i++) {
    let op = document.createElement('button');
    op.textContent = `${opChars[i]}`;
    if (opChars[i] == "=") {
        op.addEventListener("click", operate);
    }
    else if (opChars[i] == '.') {
        op.addEventListener("click", numPress);
    }
    else if (opChars[i] == "clear") {
        op.addEventListener("click", btnClear);
        op.setAttribute('id', 'clear');
    }
    else {
        op.addEventListener("click", opPress);
    }
    op.classList.add("operation");
    ops.appendChild(op);
}

function opPress() {
    let op = this.textContent;
    console.log(op);
    opVal = op;
}

let display = document.getElementById("display");

function btnClear() {
    display.textContent = "00";
    display.style.color = "grey";
    val1 = null;
    val2 = null;
    opVal = null;
}

function numPress() {
    display.style.color = "black";
    let digit = this.textContent;
    console.log(digit);
    display.textContent = digit;
    if (val1 == null) {
        val1 = digit; //first digit
    }
    else if (opVal != null && val2 == null) {
        display.textContent = digit;
        val2 = digit;
    }
    else if (opVal != null) {
        val2 = `${val2}${digit}`;
        display.textContent = val2;
    }
    else {
        val1 = `${val1}${digit}`;
        display.textContent = val1;
    }
}

function operate() {
    if (val2 == null) {
        return;
    }

    a = parseFloat(val1);
    b = parseFloat(val2);
    let res = 0;
    if (opVal == "+") {
        val1 = add(a, b);
    }
    else if (opVal == "-") {
        val1 = subtract(a, b);
    }
    else if (opVal == "*" || opVal == "x") {
        val1 = multiply(a, b);
    }
    else if (opVal == "/") {
        if (b == 0) {
            console.log("you can't do that");
            return;
        }
        val1 = divide(a, b); 7
    }
    console.log(`result = ${val1}`);
    opVal = null;
    val2 = null;
    if (val1 != val1.toPrecision(2)) {
        val1 = val1.toPrecision(8);
    }
    display.textContent = val1;
    return res;
}


