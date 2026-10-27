let array=[80,75,65,85,96]
console.log("maximum number"+Math.max(...array))
console.log("minimum number"+Math.min(...array))
let decimal=15.8;
let rounded = Math.round(decimal);
let floored = Math.floor(decimal);
let ceiled = Math.ceil(decimal);
let truncated = Math.trunc(decimal);
console.log(rounded);
console.log(floored);
console.log(ceiled);
console.log(truncated);
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
let roundedArea = area.toFixed(2);
console.log(area)
console.log(roundedArea)
let a = 3;
let b = 4;
let hypotenuse = Math.hypot(a, b);
console.log(hypotenuse)
let number = -25;
let absoluteValue = Math.abs(number);
let sign = Math.sign(number);
console.log(number)
console.log(absoluteValue)
console.log(sign)
let power = Math.pow(2, 3);
let squareRoot = Math.sqrt(64);
let cubeRoot = Math.cbrt(27);
console.log(power)
console.log(squareRoot)
console.log(cubeRoot)
