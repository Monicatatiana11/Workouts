
let main = document.createElement("main");

let img_imagen_seccion = document.createElement("img");
img_imagen_seccion.setAttribute("class", "imagen_seccion");
img_imagen_seccion.src = "images/drawers.jpg";
document.body.append(main);

let section = document.createElement("section");
main.append(img_imagen_seccion);

let div_texto = document.createElement("div");
div_texto.setAttribute("class", "texto");
main.append(section);

let h3 = document.createElement("h3");
h3.innerText =
	"Shift the overall look and feel by adding these wonderful touches to furniture in your home";
	section.append(div_texto);

let p = document.createElement("p");
p.innerText =
"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.";
div_texto.append(h3);
	

let div_compartir = document.createElement("div");
div_compartir.setAttribute("class", "compartir");
div_texto.append(p);

let img_perfil = document.createElement("img");
img_perfil.setAttribute("class", "perfil");
img_perfil.src = "images/avatar-michelle.jpg";
section.append(div_compartir);

let div_datos = document.createElement("div");
div_datos.setAttribute("class", "datos");
div_compartir.append(img_perfil);

let h5 = document.createElement("h5");
h5.innerText = "Michelle Appleton";
div_compartir.append(div_datos);

let h6 = document.createElement("h6");
h6.innerText = "28 Jun 2020";
div_datos.append(h5);

let div_boton = document.createElement("div");
div_boton.setAttribute("class", "boton");
div_datos.append(h6);


let button = document.createElement("button");
button.type = "submit";
div_compartir.append(div_boton);

let img_button = document.createElement("img");
img_button.src = "images/icon-share.svg";
div_boton.append(button);

let div_overlay = document.createElement("div");
div_overlay.setAttribute("class", "overlay");

let div_redes = document.createElement("div");
div_redes.setAttribute("class", "redes");
button.append(img_button);
div_boton.append(div_overlay);














