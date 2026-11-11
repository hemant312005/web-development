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
for(var i=0;i<5;i++)
{
    var pattern="";
    for(var j=0;j<i+1;j++)
    {
       pattern=pattern+"* ";
    }
    console.log(pattern);
}
let men=(function call(a,b)
{
console.log(a+b);
} )     
(5,);
// result(5,4);
let name="hemant";
let name1="rajawat";
let fullname=`${name}  ${name1}`;
console.log(fullname);
let num=4
console.log(`5* ${num}=${num*5}`)
let name4=()=>console.log(name4);
let arr= new Array(
    {name:"samsung",price:"25000"},{
        name:"redmi",price:"3000"},{name:"mi",price:"25000"
    }
)
let result=arr.filter((element)=>{
   console.log(element.price>=10000);
   return element.price>=10000;
})
 console.log(result)
 let array=[1,2,3,4,6,5,6,7,8,9]
 let res=array.filter((current,index,arra)=>{ return array.indexOf(current)==index})
 console.log(res);
 console.log([new Set(array)])
 array.sort((a,b)=>b-a);
 console.log( array.sort((a,b)=>a-b));
 console.log('hemant "singh" in \'"1985\'" \n and 1977 rajawat')
 let str='hello i am the best usecase';
let str1=Array.from(str);
 let resu=str1.map((element,index)=>`${element}-${index}`)
 console.log(resu)
 console.log(str.match("am"))
 console.log(str.endsWith("h",13))
 console.log(str.slice(6,9))
function ac(){
    for(let i=65;i<91;i++)
    {
       process.stdout.write(String.fromCharCode(i));
    }
 }
 ac()
