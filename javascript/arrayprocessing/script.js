const arry=["apple",2.4,99,"a"];
var x=arry.forEach((element) =>
{
    if(typeof element==="number")
    {
        return element;
    }
}
);
// map concept similar to for each
 var y=arry.map((element) =>
{ return element;}
);
const number=[1,2,3,4,5];
const doublenumber=number.map(function(number)
{
    return number*2;
})
console.log(doublenumber);
console.log(number);
// var F=ar2.filter((item)=> item !==99);
// console.log("F"="f");

