const showassbtn=document.getElementById("showAssingmnetNotification");
const showaAttbtn=document.getElementById("showAssingmnetNotification");
const showAssbtn=document.getElementById("showAssingmnetNotification");
const assPara=document.getElementById("showAssingmnetNotification");
const asspara=document.getElementById("showAssingmnetNotification");
function showAssignment()
{
    asspara.textContent="your assignment deadline is approaching";
}
showAssbtn.addEventListener("click",()=>{assPara.textContent="your assignment deadline"});
showAssbtn.addEventListener("click",()=>{assPara.textContent="your assignment deadline"});
showAssbtn.addEventListener("click",()=>{assPara.textContent="your assignment deadline"});

const parent=document.getElementById("outer");
const child =document.getElementById("inner");

parent.addEventListener("click",()=> {
    console.log("parent clicked");
});
child.addEventListener("click",()=>{
    console.log("child clicked");
})