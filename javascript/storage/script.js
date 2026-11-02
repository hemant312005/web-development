const jsonData = {
  title: "MyPhone 17",
  description: "very good phone is deep beetroot Color",
  button1: "₹25000",
  button2: "buynow",
};

const dataReadyToStore = JSON.stringify(jsonData);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "hemant");
localStorage.setItem("Your Name", "rajawat");

const getLSData = localStorage.getItem("myName");

localStorage.removeItem("Your Name");

const DIV = document.createElement("div");
DIV.innerText = getLSData;

const BODY = document.querySelector("body");
BODY.appendChild(DIV);

function PasswordVisibility() {
  const IN = document.getElementById("myPassword");
  const BN = document.getElementById("PasswordControl");

  if (BN.innerHTML === `<i class="bi bi-eye"></`) {
    IN.type = "text";
    BN.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  } else {
    IN.type = "password";
    BN.innerHTML = `<i class="bi bi-eye"></i>`;
  }
}