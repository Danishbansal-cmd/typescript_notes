"use strict";
//syntax for the function in TS
function getTime() {
    return new Date().getTime();
}
//void function
function returnVoid() {
    let a = 23, b = 34;
    console.log(`The sum is ${a + b}`);
}
//parameter function
function multiply(a, b) {
    return a * b;
}
console.log(`The function multiply(2,3) executed and the result is ${multiply(2, 3)}`);
//optional parameters and union type
function divide(a, b, c) {
    if (typeof c === 'string') {
        return a * b;
    }
    else if (c === undefined) {
        return a * b;
    }
    else {
        return a * c;
    }
}
console.log(`divide(2,3,4) value is ${divide(2, 3, 4)}`);
console.log(`divide(2,3,4) value is ${divide(2, 3, "string")}`);
console.log(`divide(2,3) value is ${divide(2, 3)}`);
//default parameters
function parameterDefault(a, b = 30) {
    return a * b;
}
console.log(`parameterDefault(2,3) value is ${parameterDefault(2, 3)}`);
console.log(`parameterDefault(2) value is ${parameterDefault(2)}`);
console.log(`parameterDefault(8) value is ${parameterDefault(8)}`);
//named parameters as normal parameters
function namedParameter({ dividend, divisor }) {
    return Math.round(dividend / divisor);
}
console.log(`namedParameter({dividend: 4, divisor: 8}) value is ${namedParameter({ dividend: 4, divisor: 8 })}`);
console.log(`namedParameter({dividend: 432345,divisor: 23}) value is ${namedParameter({ dividend: 432345, divisor: 23 })}`);
//rest parameters
function restAdd(a, b, ...rest) {
    return a + b + rest.reduce((total, value) => total + value, 0);
}
console.log(`restAdd(23,23,34,34,434,34,3456,87) value is ${restAdd(23, 23, 34, 34, 434, 34, 3456, 87)}`);
let hahaFunction = (value) => value * -1;
console.log("hahaFunction(34): " + hahaFunction(34));
console.log("hahaFunction(454): " + hahaFunction(454));
//# sourceMappingURL=05_functions.js.map