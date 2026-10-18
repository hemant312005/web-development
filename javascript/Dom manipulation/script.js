const headingtext=document.getElementById("head").innerText;
const paratext=document.getElementById("sm").textContent;
const btnlabel=document.getElementById("btn").innerHTML;
console.log(headingtext);
console.log(paratext);
console.log(btnlabel);
const body=document.querySelector("body");
console.log(body);
console.log(body.childNodes);
console.log("innertexr");
console.log(body.innerText);
console.log("innerhtml");
console.log(body.innerHTML);
headingtext.innerHTML="changed";



function update()
{
    const myName=document.getElementById("myName").ariaValueMax.trim();
    paratext.innerText="Welcome to your learning";
}
const pic=document.getElementById("somepicture");
pic.src ="./40";

function change()
{
    const myname=document.getElementById("myName");
    mynameInput.id="myfullname";
}
pic.setAttribute("Src")
headingtext.style.color="Red";

function b1on()
{
    const b1= Document.getElementById("buttonon")
    b1.style.color="yellow";
}
function b2onoff()
{
    const b2=Document.getElementBYId("buttononoff")
    b2.classList.toggle("b2");
}
