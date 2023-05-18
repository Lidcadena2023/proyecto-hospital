// Se obtienen los campos del formulario
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-pacientes-form")
// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto paciente para guardar los valores que ingresan en el formulario
    const paciente = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("paciente")
    if (localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")
})