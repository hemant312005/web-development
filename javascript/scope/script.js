let a="hemant";
function name()
{
    console.log(a);
}
name();
// here a variabel is not present inside the inner scope so javascript find it in outer scope that is global varibale
let i = 20;
{
  let i = 18;
  {
    let i = 16;
    {
      let i = 14;
      console.log(i);
    }
    console.log(i);
  }
  console.log(i);
}
console.log(i);