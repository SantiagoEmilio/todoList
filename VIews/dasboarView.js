import { footer } from "../components/footer/footerComponents.js";
import { header } from "../components/header/headerComponents.js";
import { tareas } from "../components/tarea/tareaComponents.js";
import { informacion } from "../components/informacion/informacionComponents.js";

const tareasDb = [
    {
        indice: 1,
        titulo: "Hola mundo1",
        estado: "completado",
        fechaAs: "17/05/2025",
        fechaEn: "30/07/2025",
        descripcion: "Investigar sobre energías renovables...",
        integrantes: ["😇", "😊", "😎"]
    },
    {
        indice: 2,
        titulo: "Hola mundo2",
        estado: "pendiente",
        fechaAs: "18/05/2025",
        fechaEn: "31/07/2025",
        descripcion: "Descripción detallada de la tarea Hola mundo2",
        integrantes: ["😇", "😎"]
    },
    {
        indice: 3,
        titulo: "Hola mundo3",
        estado: "en progreso",
        fechaAs: "19/05/2025",
        fechaEn: "01/08/2025",
        descripcion: "Descripción detallada de la tarea Hola mundo3",
        integrantes: ["😊"]
    }
];

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    let contenedor = document.createElement('section');
    contenedor.className = "contenedor-secciones";

    // Panel info inicial (mostrar la primera tarea)
    let panelInfo = informacion(tareasDb[0]);

    // Panel tareas con callback para actualizar info
    let panelTareas = tareas(tareasDb, (tareaSeleccionada) => {
        const nuevoPanel = informacion(tareaSeleccionada);
        contenedor.replaceChild(nuevoPanel, panelInfo);
        panelInfo = nuevoPanel; // actualizar referencia
    });

    contenedor.appendChild(panelTareas);
    contenedor.appendChild(panelInfo);


    dashboard.appendChild(contenedor);

    //footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());

