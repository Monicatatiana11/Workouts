let creador = function (dato,tipo,nombre){
    let anonimo = document.createElement(dato);
    anonimo.setAttribute(tipo,nombre);
    return anonimo;
}

let imgabajo = creador ("img","class","imgabajo");
    imgabajo.src="images/bg-desktop.png";

let contenedorgrande = creador ("main","class","contenedorgrande");
let cajaiconos = creador ("aside","class","cajaiconos");
let botones = creador ("div","class","botones");
let logo = creador ("div","class","logo");
let img_logo = creador ("img","class","img_logo");
    img_logo.src="images/logo.svg";

let ico_documento = creador ("div","class","ico_documento");
let img_documento = creador ("img","class","img_documento");
    img_documento.src="images/icon-document.svg"


let ico_folder = creador ("div","class","ico_folder");
let img_folder = creador ("img","class","img_folder");
    img_folder.src="images/icon-folder.svg";

let ico_upload = creador ("div","class","ico_upload");
let img_upload = creador ("img","class","img_upload");
    img_upload.src="images/icon-upload.svg";

let cajagigas = creador ("aside","class","cajagigas");
let div_centrar = creador ("div","class","div_centrar");
let texto1 = creador ("p","class","texto1");
    texto1.innerText = "You`ve used";

let texto2 = creador ("strong","class","texto2");
    texto2.innerText = "815 GB";

let texto3 = creador ("p","class","texto3");
    texto3.innerText = "of your storage";

let barra = creador ("div","class","barra");
let gigas = creador ("div","class","gigas");
let cero_gb = creador ("strong","class","cero_gb");
    cero_gb.innerText = "0 GB";

let mil_gb = creador ("strong","class","mil_gb");
    mil_gb.innerText = "1000 GB";

let img_numeros = creador("img", "class", "img_numeros");    
    img_numeros.src="images/viñeta.svg";

let bolita = creador("div", "class", "bolita");

let divbarra = creador("div", "class", "divbarra");




document.body.append(imgabajo);
document.body.append(contenedorgrande);
contenedorgrande.append(cajaiconos);
cajaiconos.append(botones);
botones.append(logo);
logo.append(img_logo);
botones.append(ico_documento);
ico_documento.append(img_documento);
botones.append(ico_folder);
ico_folder.append(img_folder);
botones.append(ico_upload);
ico_upload.append(img_upload);
contenedorgrande.append(cajagigas);
cajagigas.append(div_centrar);
div_centrar.append(texto1);
div_centrar.append(texto2);
div_centrar.append(texto3);
div_centrar.append(divbarra);
div_centrar.append(gigas);
gigas.append(cero_gb);
gigas.append(mil_gb);
document.body.append(img_numeros);
barra.append(bolita);
divbarra.append(barra);


let txt_burbuja = creador ("strong","class","txt_burbuja");
div_centrar.append(txt_burbuja);


// animacion numeros

let t = setInterval(aumento,10);
let ancho = 0;
function aumento(){

    if(ancho <815){

        ancho += 1;
        progres = ancho+"%";    

        let consumido = ancho;
    let restante = 1000-ancho+ "GB"; 
    texto2.innerText = consumido;
    txt_burbuja.innerText = restante;
    }

}

