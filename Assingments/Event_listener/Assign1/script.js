let button=document.getElementById("btn1")
let viewprofile=document.querySelector(".viewprofile")
button.addEventListener("click",()=>{
    if(viewprofile.style.display=="none")
    {
     viewprofile.style.display="block";
    }
    else
    {
     viewprofile.style.display="none";
    }
    
})
