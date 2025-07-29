import { footer } from "../components/footer/footer.js";
import { header } from "../components/header/headerComponent.js";

export function dasboard(){

    let seccion = document.createElement('section');

    seccion.appendChild(header());

seccion.appendChild(footer());

    return seccion;

}
document.body.appendChild(dasboard());
