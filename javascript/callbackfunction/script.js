function greet()
{
    console.log("call through call back");
}

function callback(call)
{
    call();
}
callback(greet);