import { footer } from "../components/footer/footerComponents.js";
import { header } from "../components/header/headerComponents.js";
import { tareas } from "../components/tarea/tareaComponents.js";
import { informacion } from "../components/informacion/informacionComponents.js";

export const tareasDb = [
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

let contenedor;
let panelTareas;
let panelInfo;

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    contenedor = document.createElement('section');
    contenedor.className = "contenedor-secciones";

    // Panel info inicial (mostrar la primera tarea)
    panelInfo = informacion(tareasDb[0], refrescarDashboard);

    // Panel tareas
    panelTareas = tareas(tareasDb, (tareaSeleccionada) => {
        const nuevoPanel = informacion(tareaSeleccionada, refrescarDashboard);
        contenedor.replaceChild(nuevoPanel, panelInfo);
        panelInfo = nuevoPanel;
    });

    contenedor.appendChild(panelTareas);
    contenedor.appendChild(panelInfo);

    dashboard.appendChild(contenedor);
    dashboard.appendChild(footer());

    return dashboard;
}

// Función para reconstruir las secciones cuando se agrega una tarea
export function refrescarDashboard() {
    // Reconstruir lista de tareas
    const nuevoPanelTareas = tareas(tareasDb, (tareaSeleccionada) => {
        const nuevoPanel = informacion(tareaSeleccionada, refrescarDashboard);
        contenedor.replaceChild(nuevoPanel, panelInfo);
        panelInfo = nuevoPanel;
    });

    // Reemplazar panel de tareas
    contenedor.replaceChild(nuevoPanelTareas, panelTareas);
    panelTareas = nuevoPanelTareas;

    // Mostrar la última tarea agregada en panel info
    const nuevaTarea = tareasDb[tareasDb.length - 1];
    const nuevoPanelInfo = informacion(nuevaTarea, refrescarDashboard);
    contenedor.replaceChild(nuevoPanelInfo, panelInfo);
    panelInfo = nuevoPanelInfo;
}

document.body.appendChild(dashboard());
