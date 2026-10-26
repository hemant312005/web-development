
// let inputtext=document.getElementById("inputtext");
// let button=document.querySelector(".btn");
// let show=document.querySelector(".container")
// button.addEventListener('click',()=>{
//     addtext();
// })
// const addtext=()=>{
//     console.log(inputtext.value);
//     let name=document.createElement("p");
//     name.innerText=inputtext.value;
//     show.append(name)
// }
// show.addEventListener("click",(event)=>{ console.log(event.target)
//     let rm=event.target;
//     rm.remove();
// })
let text = document.getElementById("inputtext");
let button = document.querySelector(".btn");
let addtohtml = document.querySelector(".container");

button.addEventListener("click", () => {
addelement();
});

let addelement = () => {
console.log(text.value);

let pdata = document.createElement("p");
pdata.innerText = text.value;

addtohtml.append(pdata);

};
addtohtml.addEventListener("click",(event) =>{
    console.log(event.target)
    let rm=event.target;
    rm.remove();
})
