let creador =  function (dato,tipo,nombre){
let crear = document.createElement(dato);

crear.setAttribute(tipo, nombre);
return crear;
}

let img = creador("img","class", "colorbajo");
img.src="./images/bg-desktop.png";
document.body.append(img);

let container = creador ("div", "class", "container");
let logocontainer = creador ("div", "class", "logo-container");
let imagen = creador ("img", "src", "./images/logo.svg");
let icon = creador ("div", "class", "icon-collection");




imagen.append(icon);
logocontainer.append(imagen);
container.append(logocontainer);
document.body.append(container);














