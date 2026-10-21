const data = [
  {
    title: "MyPhone 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "MyPhone 16",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Ramsungs Fold 7",
    description: "Feel the Book Style Phone which can fold",
    button1: "₹85000",
    button2: "buynow",
  },
  {
    title: "audiocon 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Blueyou 17",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "twominus 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "something 4",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "fakeYou 16x",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "kyakiya lumia 825",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
];

function add_Data(item) {
  const myCard = document.createElement("div");

  myCard.classList.add("col-3", "p-3");

  myCard.innerHTML = `
            <div class="p-2 border shadow rounded">
              <h3>${item["title"]}</h3>
              <p>
                ${item.description}
              </p>
              <div class="row px-3">
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-outline-primary w-full">${item.button1}</button>
                </div>
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-primary w-full">${item.button2}</button>
                </div>
              </div>
            </div>
            `;

  let CP = document.getElementById("card-parent");

  console.log(CP);

  CP.appendChild(myCard);
}

// add_Data(data[0]);

data.forEach((element) => add_Data(element));

const student = {
  name: "Aarav",
  age: 20,
};
console.log(student);

student.name = "Manav";

console.log(student);
student.subject = "CSE";

console.log(student);

delete student.name;

console.log(student);