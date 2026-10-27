let studentmark="87";
let feespaid="12500.750";
let mark=Number.parseInt(studentmark)
let fees=Number.parseFloat(feespaid)
console.log("ismark no is number "+Number.isInteger(mark))
console.log("Are mark finite"+Number.isFinite(mark))
console.log("Are marks a safe integer"+Number.isSafeInteger(mark))
console.log("Parsed fees with 2 decimal point"+ fees.toFixed(2))
console.log("fees in indian format"+fees.toLocaleString("en-In"))
console.log(mark.toPrecision(4))
console.log(mark.toExponential(2))
let strnumber=mark.toString()
console.log("marks as string"+ strnumber +"dataype"+typeof strnumber)

