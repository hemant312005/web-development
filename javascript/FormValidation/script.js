function Login() {
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;

  console.log(un, ps);

  const LoginFromDataJson = {
    Name: un,
    password: ps,
  };
}

const loginFrom = document.getElementById("loginForm");

loginFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form submitted");

  const loginFromData = new FormData(loginFrom);

  const UN = loginFromData.get("userName");
  const PS = loginFromData.get("password");

  console.log(UN, PS);

  loginFromData.forEach((value, key) => console.log(key, ":", value));
});

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  if (testFromData.get("password").length < 8) {
    document.getElementById("passwordError").innerText =
      "Password Must Contain 8 Charcaters";
  }
  if (testFromData.get("password") !== testFromData.get("cfpassword")) {
    document.getElementById("cfPasswordError").innerText = "Password Not Match";
  }

  testFromData.forEach((value, key) => console.log(key, ":", value));

  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);

const someData = {
  name: "hsr",
  age: "21",
  height: 5.6,
};

const JsonToString = JSON.stringify(someData);

console.log(someData);

console.log(JsonToString);

const StringToJson = JSON.parse(JsonToString);

console.log(StringToJson);

var StdName = "mohit";
var marks = 99;

console.log("Student with Name", StdName, "Scored", marks);

console.log(`Studnet with Name ${StdName} 
  scored ${marks}`);