function agregarDatos() {
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let edad = document.querySelector('#edad').value;
  
    const div = document.getElementById('nuevoDato');
    const p = document.createElement('p');
    p.textContent = "Nombre: " + nombre + ", Apellido: " + apellido + ", Edad: " + edad;
    div.appendChild(p);
  }
  