let creador = function (dato,tipo,nombre){
    let anonimo = document.createElement(dato);
    anonimo.setAttribute(tipo,nombre);
    return anonimo;
} 


let main = creador ("main","class","intro");
let container = creador("div", "class", "container");
let leftcol = creador("div", "class", "left-col");
let texto = creador("h1", "class", "h1");
    texto.innerText="Learn to code by watching others";
let texto2 = creador("p", "class", "p");
    texto2.innerText="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
let formcontainer = creador("div", "class", "form-container");
let morado = creador("div", "class", "morado" );
let LetraM = creador("p", "class", "LetraM"); 
    LetraM.innerText=" Try it free 7 days then $20/mo. thereafter "
let formulario = creador("div", "class" ,"formulario");
let input1 = creador("input", "class", "input1");
let input2 = creador("input", "class", "input2");
let input3 = creador("input", "class", "input3");
let input4 = creador("input", "class", "input4");
let boton = creador("button", "class", "boton");
    boton.innerText="CLAMIN YOUR FREE TRIAL";


input1.placeholder="Nombre";
input2.placeholder="Last name";
input3.placeholder="Email Addres";
input4.placeholder="Password";


document.body.append(main);
main.append(container);
container.append(leftcol);
leftcol.append(texto, texto2);
main.append(formcontainer);
formcontainer.append(morado);
morado.append(LetraM);
formcontainer.append(formulario);
formulario.append(input1);
formulario.append(input2);
formulario.append(input3);
formulario.append(input4);
formulario.append(boton);
input1.append(letras);
boton.append(Textver);














