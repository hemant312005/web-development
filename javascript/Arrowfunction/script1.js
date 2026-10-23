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

