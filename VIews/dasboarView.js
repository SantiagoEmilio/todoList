import { header } from "../components/header/headerComponent.js";

export function dasboard(){

    let seccion = document.createElement('section');

    seccion.appendChild(header());

    return seccion;

}
document.body.appendChild(dasboard());
