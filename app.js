// Usuario
class Paciente {
  constructor(NombresYApellidos, Edad, MotivosDeLaConsulta) {
    this.NombresYApellidos = NombresYApellidos;
    this.Edad = Edad;
    this.MotivosDeLaConsulta = MotivosDeLaConsulta;
  }
}

 // Funcion para mostrar los pacientes en la lista
function showData() {
  let patientsList;

  if (localStorage.getItem("patientsList") === null) {
    patientsList = [];
  } else {
    patientsList = JSON.parse(localStorage.getItem("patientsList"))
  }

  let html = "";
  patientsList.forEach((patient, index) => {
    html += 
     // contenido que aparecerá en el HTML
  `<tr>
    <td> ${patient.NombresYApellidos} </td>
    <td>${patient.Edad}</td>
    <td> ${patient.MotivosDeLaConsulta}</td>
    <td>
      <button class = "btn-js" onclick="deleteData(${index})">Eliminar</button>
      <button class = "btn-js" onclick="editData(${index})">Editar</button>
    </td>
   </tr>`;
  });

  document.querySelector('tbody').innerHTML = html;
}

// Evento onload para mostrar los pacientes cuando se carga la página
document.onload = showData();

// Función para agregar un nuevo paciente
function addData(event) {
  event.preventDefault();
  let NombresYApellidos = document.querySelector('#input-nombre').value;
  let Edad = document.querySelector('#input-edad').value;
  let MotivosDeLaConsulta = document.querySelector('#input-motivo').value;

  if (NombresYApellidos === "" || Edad === "" || MotivosDeLaConsulta === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const paciente = new Paciente(NombresYApellidos, Edad, MotivosDeLaConsulta);
  let patientsList;
  if (localStorage.getItem("patientsList") === null) {
    patientsList = [];
  } else {
    patientsList = JSON.parse(localStorage.getItem("patientsList"));
  }
  patientsList.push(paciente);
  localStorage.setItem("patientsList", JSON.stringify(patientsList));
  showData();

  document.querySelector('#input-nombre').value = "";
  document.querySelector('#input-edad').value = "";
  document.querySelector('#input-motivo').value = "";
}

// Función para editar los datos de un paciente
function editData(index) {

    document.querySelector('#btn-enviar').style.display = 'none';
    document.getElementById('edit-btn').style.display = 'block';
  
  let patientsList;
  if (localStorage.getItem("patientsList") === null) {
    patientsList = [];
  } else {
    patientsList = JSON.parse(localStorage.getItem("patientsList"));
  }

  document.querySelector('#input-nombre').value = patientsList[index].NombresYApellidos;
  document.querySelector('#input-edad').value = patientsList[index].Edad;
  document.querySelector('#input-motivo').value = patientsList[index].MotivosDeLaConsulta;

  document.getElementById('edit-btn').onclick = function () {
    patientsList[index].NombresYApellidos = document.querySelector('#input-nombre').value;
    patientsList[index].Edad = document.querySelector('#input-edad').value;
    patientsList[index].MotivosDeLaConsulta = document.querySelector('#input-motivo').value;

    localStorage.setItem("patientsList", JSON.stringify(patientsList));

    showData();
    document.querySelector('#input-nombre').value = "";
    document.querySelector('#input-edad').value = "";
    document.querySelector('#input-motivo').value = "";

    document.querySelector('#btn-enviar').style.display = 'block';
    document.getElementById('edit-btn').style.display = 'none';
  
   
  }
}

// Función para eliminar un paciente
function deleteData(index) {
  let patientsList;
  if (localStorage.getItem("patientsList") === null) {
    patientsList = [];
  } else {
    patientsList = JSON.parse(localStorage.getItem("patientsList"));
  }

  patientsList.splice(index, 1);
  localStorage.setItem("patientsList", JSON.stringify(patientsList));
  showData();
}
