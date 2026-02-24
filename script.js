function addNums(a, b) {
    return parseInt(a + b);
}

function subtractNums(a,b) {
    return a - b;
}

function multiplyNums(a,b) {
    return a * b;
}

function divideNums(a,b) {
    return Math.floor(a / b);
}

function operate(a,x,b) {
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a)) {
        return b;
    }
    switch (x) {
        case '+':
            return addNums(a,b);
        case '-':
            return subtractNums(a,b);
        case '*':
            return multiplyNums(a,b);
        case '/':
            return divideNums(a,b);
        case 'Clear':
            return 0;
    }
}

const numArray = ['1','2','3','4','5','6','7','8','9','0'];
const operatorArray = ['=','+','-','*','/','Clear'];

body = document.querySelector("body");
titleBar = document.createElement("div");
titleBar.setAttribute("class", "title");
titleBar.textContent = "Odin Calculator";
calcDisplay = document.createElement("div");
calcDisplay.setAttribute("class", "display");
calcDisplay.textContent = ""; // initial display
buttonPad = document.createElement("div");
buttonPad.setAttribute("class", "buttonPad");

numPad = document.createElement("div");
numPad.setAttribute("class", "numPad");
numPad.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        updateNumber(event.target.textContent);
        updateDisplay(numB);
        console.log(event.target.textContent);
        console.log(numA, numB);
    }
});

operatorPad = document.createElement("div");
operatorPad.setAttribute("class", "operatorPad");
operatorPad.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        let newOperator = event.target.textContent;
        if (newOperator === 'Clear') {
            numA = operate(numA, newOperator, numB);
            updateDisplay(numA);
            numA = '';
            numB = '';
            storedOperator = '';
        }
        else if (numB != '') {
            numA = operate(numA, storedOperator, numB);
            numB = '';
            updateDisplay(numA);
            console.log(storedOperator, newOperator);
            storedOperator = newOperator;
        }else {
            storedOperator = newOperator;
        }
        console.log(event.target.textContent);
        console.log(numA, numB, newOperator, storedOperator);
    }
});

body.appendChild(titleBar);
body.appendChild(calcDisplay);
body.appendChild(buttonPad);
buttonPad.appendChild(numPad);
buttonPad.appendChild(operatorPad);

//create numPad
let numCount = 0;
while (numCount < numArray.length) {
    numRow = document.createElement("div");
    numRow.classList.add("numRow");
    numPad.appendChild(numRow);
    for (let i = 0; i < 3; i++) {
        if (numArray[numCount] === undefined) {
            continue;
        }
        numButton = document.createElement("button");
        numButton.classList.add("numButton");
        numButton.textContent = `${numArray[numCount]}`;
        numRow.appendChild(numButton);
        numCount++;
    }
}

// create operatorPad
let operatorCount = 0;
while (operatorCount < operatorArray.length) {
    operatorButton = document.createElement("button");
    operatorButton.classList.add("operatorButton");
    operatorButton.textContent = `${operatorArray[operatorCount]}`;
    operatorPad.appendChild(operatorButton);
    operatorCount++;
}

let numA = '';
let numB = '';
let newOperator = '';
let storedOperator = '';

function updateNumber(b) {
    numB += b;
}

function updateDisplay(text) {
    calcDisplay.textContent = `${text}`;
}