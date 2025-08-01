export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes) {
    let div = document.createElement('div');
    div.className = "tarea";

    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    let tituloTarea = document.createElement('h3');
    tituloTarea.className = "tarea-titulo";
    tituloTarea.textContent = titulo;
    div.appendChild(tituloTarea);

    let divEstado = document.createElement('div');
    divEstado.className = `tarea-estado ${estado.toLowerCase()}`;
    divEstado.textContent = estado;
    div.appendChild(divEstado);

    let fechaAsignacion = document.createElement('span');
    fechaAsignacion.className = "tarea-fecha-asignacion";
    fechaAsignacion.textContent = fechaAs;
    div.appendChild(fechaAsignacion);

    let fechaEntrega = document.createElement('span');
    fechaEntrega.className = "tarea-fecha-entrega";
    fechaEntrega.textContent = fechaEn;
    div.appendChild(fechaEntrega);

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    listaIntegrantes.forEach(integrante => {
        let icono = document.createElement('div');
        icono.className = "integrante-icono";
        icono.textContent = integrante;
        divIntegrantes.appendChild(icono);
    });
    div.appendChild(divIntegrantes);

    // Botón eliminar
    let btnEliminar = document.createElement('div');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.innerHTML = "❌";
    div.appendChild(btnEliminar);

    return div;
}
