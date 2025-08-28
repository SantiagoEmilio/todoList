export function header() {
    let header = document.createElement('header');
    header.className = "header";

    
    let h1 = document.createElement('h1');
    h1.innerText = "✏️Todo-Iist";
    header.appendChild(h1);

    let divTarea = document.createElement('div');
    divTarea.className = "header-tarea";

    let pendientes = document.createElement('h1');
    pendientes.innerText = "Pendientes";
    divTarea.appendChild(pendientes);

    let divContador = document.createElement('div');
    divContador.className = "contador";
    divContador.innerText = "10";
    divTarea.appendChild(divContador);

    let iconoUsuario = document.createElement('img');
    iconoUsuario.src = "../assets/usuario.svg"; 
    iconoUsuario.className = "icono-usuario";
    divTarea.appendChild(iconoUsuario);

    header.appendChild(divTarea);

    return header;
}