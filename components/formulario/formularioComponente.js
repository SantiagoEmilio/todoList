export function formularioTarea() {
    let form = document.createElement('form');
    form.className = "formulario-tarea";

    // Título del formulario
    const tituloForm = document.createElement("h2");
    tituloForm.innerText = "Agregar nueva tarea";
    tituloForm.style.textAlign = "center";
    tituloForm.style.marginBottom = "10px";
    form.appendChild(tituloForm);

    // Input título
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    inputTitulo.required = true;

    // Select estado
    let selectEstado = document.createElement('select');
    let opciones = ["pendiente", "completado", "incompleto"];
    opciones.forEach(opcionTexto => {
        let opcion = document.createElement('option');
        opcion.value = opcionTexto;
        opcion.textContent = opcionTexto;
        selectEstado.appendChild(opcion);
    });

    // Fecha asignación
    let inputFechaAsignacion = document.createElement('input');
    inputFechaAsignacion.type = "date";
    inputFechaAsignacion.valueAsDate = new Date();
    inputFechaAsignacion.disabled = true;

    // Fecha entrega
    let inputFechaEntrega = document.createElement('input');
    inputFechaEntrega.type = "date";
    inputFechaEntrega.required = true;

    // Descripción
    let inputDescripcion = document.createElement('textarea');
    inputDescripcion.placeholder = "Descripción de la tarea";
    inputDescripcion.required = true;

    // Botón guardar
    let btnGuardar = document.createElement('button');
    btnGuardar.type = "submit";
    btnGuardar.textContent = "Agregar tarea";

    // Agregar elementos al form
    form.appendChild(inputTitulo);
    form.appendChild(selectEstado);
    form.appendChild(inputFechaAsignacion);
    form.appendChild(inputFechaEntrega);
    form.appendChild(inputDescripcion);
    form.appendChild(btnGuardar);

    // Evento submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevaTarea = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            estado: selectEstado.value,
            fechaAsignacion: inputFechaAsignacion.value,
            fechaEntrega: inputFechaEntrega.value
        };

        console.log("📌 Nueva tarea registrada:", nuevaTarea);

        form.reset();
        inputFechaAsignacion.valueAsDate = new Date();
        form.style.display = "none"; // ocultar modal
    });

    // Inicialmente oculto
    form.style.display = "none";

    // Centrado como modal
    form.style.position = "fixed";
    form.style.top = "50%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
    form.style.zIndex = "1000";

    return form;
}
