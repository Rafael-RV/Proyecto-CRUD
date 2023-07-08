function eviarDatos(event) 
event.preventDefault()
let nombres = document.querySelector('#input-nombre').value 
let edades = document.querySelector('#input-nombre').value 
let motivos = document.querySelector('#input-motivo').value

if ( nombres === '' || edades === '' || motivos === '' ) return ('FaltaN campos por llenar')

const listaPacientes = document.querySelector('#ul-form')
const li = document.createElement('li')
li.textContent = nombres + ' ' + edades + ' ' + motivos
listaPacientes.appendChild(li)