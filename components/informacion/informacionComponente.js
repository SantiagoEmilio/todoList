import { formularioTarea } from "../formulario/formularioComponente.js";

export function informacion(tarea) {
  const div = document.createElement("div");
  div.className = "contenedorInformacion";

  // Botones
  const divBotones = document.createElement("div");
  divBotones.className = "div-botones";

  const btnTarea = document.createElement("button");
  btnTarea.className = "btn-tarea";
  btnTarea.innerText = "+ Tarea";

  const btnArchivados = document.createElement("button");
  btnArchivados.className = "btn-archivados";
  btnArchivados.innerText = "Archivados";

  divBotones.append(btnTarea, btnArchivados);

  // Información de la tarea
  const divInformacion = document.createElement("div");
  divInformacion.className = "div-informacion";

  const divEstado = document.createElement("div");
  divEstado.className = `estado-tarea ${tarea.estado_tarea
    .toLowerCase()
    .replace(" ", "-")}`;
  divEstado.innerText = tarea.estado_tarea;

  const titulo = document.createElement("h3");
  titulo.className = "titulo-asignacion";
  titulo.innerText = tarea.nombre;

  const descripcion = document.createElement("p");
  descripcion.className = "descripcion-asignacion";
  descripcion.innerText = tarea.descripcion;

  const spanIntegrantes = document.createElement("span");
  spanIntegrantes.className = "texto-integrantes";
  spanIntegrantes.innerText = "Integrantes";

  const divIntegrantes = document.createElement("div");
  divIntegrantes.className = "div-integrantes";

  divInformacion.append(
    divEstado,
    titulo,
    descripcion,
    spanIntegrantes
  );

  // 🔹 Crear el formulario y ocultarlo al inicio
  const formTarea = formularioTarea();
  formTarea.style.display = "none";

  // 🔹 Mostrar/ocultar el formulario al presionar +Tarea
  btnTarea.addEventListener("click", () => {
    formTarea.style.display =
      formTarea.style.display === "none" ? "block" : "none";
  });

  div.append(divBotones, divInformacion, formTarea);

  return div;
}
