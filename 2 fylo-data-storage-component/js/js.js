let creador =  function (dato,tipo,nombre){
let crear = document.createElement(dato);

crear.setAttribute(tipo, nombre);
return crear;
}

let img = creador("img","class", "colorbajo");
img.src="/images/bg-desktop.png";
let container = creador ("div", "class", "container");
let logocontainer = creador ("div", "class", "logo-container");
let aux = creador ("div","class","aux");
let imagen = creador ("img", "src", "./images/logo.svg");
let icon = creador ("div", "class", "icon-collection");
let div = creador ("div", "class", "icon");
let imgicon = creador("img", "src", "./images/icon-document.svg");
let icon2 = creador("div", "class", "icon");
let imgicon2 = creador("img", "src", "./images/icon-folder.svg");
let icon3 = creador("div", "src", "icon");
let imgicon3 = creador ("img", "src", "./images/icon-upload.svg");



document.body.append(container);
container.append(logocontainer);
logocontainer.append(aux);
aux.append(imagen);
document.body.append(img);
aux.append(icon);
aux.append(icon2);
icon.append(div);
div.append(imgicon);
icon2.append(imgicon2);





















