import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponente.js";

export async function dashboard() {
    
    try {
        const resultado = await fetch("https://backenddetodolist.onrender.com/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);
        
        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";
        
        
        dashboard.appendChild(header());
        
        
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";
        seccion1.appendChild(tareas(tareasDb));
        seccion1.appendChild(informacion(tareasDb[0]));
        dashboard.appendChild(seccion1);
        
        dashboard.appendChild(footer());
        
        return dashboard;
    } catch (error) {
        console.error("error:", error);
    }
}

dashboard().then(elemento => {
    document.body.appendChild(elemento);
});
