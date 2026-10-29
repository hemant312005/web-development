function show(){
    alert("click me")
}
document.getElementById("clickbutton").addEventListener("click",show2);
function show2()
{
    alert("click me js events")
}
document.getElementById("box").addEventListener("click",()=>{
    document.getElementById("box").innerText="this box was clicked"
});
document.getElementById("change").addEventListener("mouseover",()=>{
    document.getElementById("change").innerText="pointer is over a paragraph"
});
document.getElementById("change").addEventListener("mouseout",()=>{
    document.getElementById("change").innerText="Move your pointer out"
});
document.getElementById("change1").addEventListener("mousedown",()=>{
    document.getElementById("change1").innerText="mouse button pressed"
});
document.getElementById("change1").addEventListener("mouseup",()=>{
    document.getElementById("change1").innerText="mouse button released"

});
document.getElementById("change2").addEventListener("dblclick",()=>{
    document.getElementById("change2").innerText="you double click the paragraph"
});
document.getElementById("change3").addEventListener("mousemove",()=>{
    document.getElementById("change3").innerText="mouse pointer moving the text"
});
document.getElementById("namesubmit").addEventListener("click",()=>{
   console.log( document.getElementById("fullname").value.trim());
});
document.getElementById("fullname").addEventListener("keydown",(e)=>{
   (e.key==="enter")&&console.log(document.getElementBy("fullname").value.trim)

});


