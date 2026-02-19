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
    switch (x) {
        case '+':
            return addNums(a,b);
        case '-':
            return subtractNums(a,b);
        case '*':
            return multiplyNums(a,b);
        case '/':
            return divideNums(a,b);
    }
}

const numArray = [1,2,3,4,5,6,7,8,9,0];
const operatorArray = ['=','+','-','*','/'];

body = document.querySelector("body");
titleBar = document.createElement("div");
titleBar.setAttribute("class", "title");
titleBar.textContent = "Odin Calculator";
calcDisplay = document.createElement("div");
calcDisplay.setAttribute("class", "display");
buttonPad = document.createElement("div");
buttonPad.setAttribute("class", "buttonPad");
numPad = document.createElement("div");
numPad.setAttribute("class", "numPad");
operatorPad = document.createElement("div");
operatorPad.setAttribute("class", "operatorPad");

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