function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes= document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreMedico = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()

        celdaNombreMedico.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaNumeroCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaTelefono.textContent = paciente.telefono
        celdaEspecialidad.textContent = paciente.especialidad
    });
}

mostrarPacientes()