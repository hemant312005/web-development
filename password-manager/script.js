let formdata=[];
function SavePassword() {
  const WB = document.getElementById("websiteName").value.trim();
  const UN = document.getElementById("userName").value.trim();
  const PS = document.getElementById("password").value.trim();
  const CPS = document.getElementById("cfPassword").value.trim();
  let data={
    websiteName:WB,userName:UN,password:PS}
  formdata.push(data)
  localStorage.setItem("formdata",JSON.stringify(formdata));
 let count=formdata.length-1;
  const TR = document.createElement("tr");

  TR.innerHTML = `
            <td>${count+1}</td>
            <td>${WB}</td>
            <td>${UN}</td>
            <td>${PS}</td>
`;

  const TD = document.createElement("td");
  const BTN = document.createElement("button");
  
  TD.classList.add("d-flex","justify-content-between");
  BTN.classList.add("btn", "btn-danger", "btn-sm");
  BTN.innerHTML = ` 
                <i class="bi bi-trash"></i> 
                <span>Delete</span>
              `;
  BTN.onclick = () =>{TR.remove();
     formdata.splice(count,1);
     localStorage.setItem("formdata",JSON.stringify(formdata))
     
  }

  TD.appendChild(BTN);
  TR.appendChild(TD);
  const EditBTn=document.createElement("button");
  EditBTn.classList.add("btn","btn-primary", "btn-sm");
  EditBTn.innerHTML=` 
                <i class="bi bi-pencil"></i>
                <span>Edit</span>
              `;
 EditBTn.onclick=()=>{ TR.contentEditable="true";
    TR.focus();
 }
 TD.appendChild(EditBTn);
 TR.append(TD);
  const ES = document.getElementById("emptyState");
  if (ES) {
    document.getElementById("dataTable").innerHTML = "";
  }

  document.getElementById("dataTable").appendChild(TR);

  document.getElementById("websiteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("cfPassword").value = "";
}

