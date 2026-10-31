function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();
  const EDitbtn=document.createElement("button");
  EDitbtn.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  EDitbtn.textContent="EDit";
  EDitbtn.onclick=()=>{
    SPAN.contentEditable=true;
    SPAN.focus()};
  LI.append(SPAN);
  LI.append(BUTTON);
  LI.append(EDitbtn);

  document.getElementById("taskList").append(LI);
  document.getElementById("taskInput").value = "";

}