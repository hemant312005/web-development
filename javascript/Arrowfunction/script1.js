let result=function(a,b,c)
{
    switch(b){
        case "-":
            return a-c;
                break;
        case "+" :
            return a+c;
            break;
        case "-":
            return a-c;
            break;
        case "*":
            return a*c;
            break;
        default :
        return "unknowe";    
    }
}
console.log(result(5,'+',6));
//reverse an string
function isstring(str)
{
    
    for(let i=str.length-1;i>=0;i--)
    {
        process.stdout.write(str[i]);
    }
}
isstring("hello my name is hemant")

function pallindrome(str)
{
    let i=0;
    let j=str.length-1;
    while(i<j)
    {
        if(str[i]!=str[j])
        {
            console.log("it is not pallindrome");
            return;
        }
        i++;
        j--;
    }
    console.log("it is pallindrome");
}
pallindrome("majmajn");

let name=new Array("j","m","k","i");
console.log(name);
let nam=["he","jej"];
nam.push("hellow")
nam.pop()
nam.pop()
console.log(nam);
nam.map((element) =>{console.log(element)})
// for(let i of nam)
// {
//    console.log(i);
// }
//  console.log(name.splice(2,2,"hello"))
// console.log(name)
console.log(name.indexOf("i"))
console.log(name.includes("i"))

const array=new Array(1,2,3,4,5,6,7,8,9)
let result1=array.filter((element)=>{
    return element!=6;
})
console.log(result1);
