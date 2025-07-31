import { footer } from "../components/footer/footerComponents.js";
import { header } from "../components/header/headerComponents.js";
import { tareas } from "../components/tarea/tareaComponents.js";
import { informacion } from "../components/informacion/informacionComponents.js";

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // Header
    dashboard.appendChild(header());

    // Contenedor para las dos secciones
    let contenedor = document.createElement('section');
    contenedor.className = "contenedor-secciones";

    // Añadimos las dos secciones dentro del contenedor
    contenedor.appendChild(tareas());
    contenedor.appendChild(informacion());

    dashboard.appendChild(contenedor);

    // Footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
