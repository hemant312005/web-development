
let fullname = document.getElementById("name");
let button1 = document.getElementById("btn");

button1.addEventListener("click", () => {
    let valid = fullname.value;
    for(var i=0;i<valid.length;i++)
    {
        if(valid.charAt(i)>='A'&&valid.charAt(i)<='Z'||valid.charAt(i)>='a'&&valid.charAt(i)<='z')(/)
        { 
        console.log("valid");
         } 
        else{
        console.log("invalid");
         }
    }
    
});
