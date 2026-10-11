sum(3,4);
function sum(a,b){
    let c=a+b;
    console.log(c);
}
sum(5,10);
function sum_with_d(x,y=10)
{
    console.log(x+y);
}
sum_with_d(1);
function calculate(x1,y1,z1)
{
    return x1+y1+z1;
}
let answer=calculate(5,2,3);
console.log(answer);
// function expression
const greet=function()
{  
    console.log("welcome to javascript");
}
greet();