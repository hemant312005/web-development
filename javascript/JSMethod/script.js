let name="   hEmAnT sInGh rAjAwAT   ";
let o1=name.trim().toUpperCase()
console.log(o1)
let firstname=o1.slice(0,6)
console.log(firstname)
console.log(o1.at(-1))
let email = "hemant@gmail.com";
console.log(email.includes("@"))
console.log(email.endsWith(".com"))
let p="javascript is useful,javascript is popluar"
console.log(p.replaceAll("javascript","html"))
console.log("welcome "+o1);
let par="subject:english,hindi,math"
 let array=par.split(",")
 array.forEach(function(subject){console.log(subject)})