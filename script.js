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