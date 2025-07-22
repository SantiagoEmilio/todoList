export function dasboard(){

    let seccion = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.innerText = "hola Mundo"
    seccion.appendChild (h1);

    return seccion;

}
document.body.appendChild(dasboard());