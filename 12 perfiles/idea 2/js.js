import { arreglo } from "./arreglo.js";

  let crear = function (dato, tipo, nombre) {
    let element = document.createElement(dato);
    element.setAttribute(tipo, nombre);
    return element;
}

let main = document.querySelector('.main');

arreglo.forEach(dj => {

    const imagen = dj.image;
    const nombre = dj.Nombre;
    const cargo = dj.cargo;
    const biografia = dj.biografia;
    const correo = dj.correo;

    let section = crear("section", "class", "section");
    main.append(section);

        let e_imagen = crear("img", "class", "foto");
        e_imagen.src = imagen;
        section.append(e_imagen);

        let e_nombre = crear("p", "class", "nombre");
        e_nombre.innerText = nombre;
        section.append(e_nombre);

        let e_cargo = crear("p", "class", "cargo");
        e_cargo.innerText = cargo;
        section.append(e_cargo);

        let botoncito = crear("button","class","botoncito");
        botoncito.innerText = "Saber Mas";
        section.append(botoncito);

        botoncito.onclick = function () {         
        }
});