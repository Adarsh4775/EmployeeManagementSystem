

const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

let employees = [];

function addEmployee(employee){

     for(i=0; i<employees.length; i++){
     let e = employees[i];
    if(e.empid === employee.id)
    {
       alert("Employee Id already Exists");
       return;
    }
    else if(e.email === employee.email)
    {
      alert("Email Id already exists");
    return;
    }
     }

const tr = document.createElement("tr");
    tr.innerHTML= `<td>${employee.name}</td>
    <td>${employee.email}</td>
  <td>${employee.empId}</td>
   <td>${employee.company}</td>
<td>${employee.designation}</td>
   <td> 
   <button onclick="DeleteElement(this)" data-empid="${employee.empId}">Delete</button>
   </td>`;

    tbody.appendChild(tr);
    employees.push(employee);
    form.reset();
}

function DeleteElement(buttonRef)
{
    let empId = buttonRef.getAttribute("data-empid");
    for(i=0; i< employees.length; i++)
    {
        if(employees[i].empId== empId){
        employees.splice(i,1);
    break;
}
}

    let parentTd =buttonRef.parentNode;
let parentTr = parentTd.parentNode;


parentTr.remove();
}






form.addEventListener("submit", (event) => {
 event.preventDefault();
 let employee =
 {
     name:event.target.name.value,
     email:event.target.email.value,
     empId:event.target.empid.value,
     company:event.target.company.value,
     designation:event.target.designation.value,
 };
 console.log(employee);
 addEmployee(employee);
});


