 let text = document.querySelector("h1").innerText;

console.log(text + " Raj vardhan");

function submit() {
  console.log("Submit Button Clicked");

  const nm = document.querySelector("#fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const dob = document.getElementById("DOB").value.trim();
  const gender = document.getElementById("Gender").value.trim();

  console.log("Full Name:", nm);
  console.log("Email:", em);
  console.log("Phone:", ph);
  console.log("Date of Birth:", dob);
  console.log("Gender:", gender);
}

function submit2() {
  const formData = [];

  document.querySelectorAll("input, select").forEach((item) => {
    formData.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formData[i]);
  }
}
const coursediv=document.getElementById("course")
console.log(coursediv);
const heading=document.getElementById("h2")
console.log(heading);