let informacion = document.querySelector('.informacion');
let fondo = document.querySelector(".fondo");
let scroll2 = document.querySelector(".scroll2");
scroll2.style.display = "none";

/*
const res = await fetch("./NivelesDeAceso.json");
const data = await res.json();

localStorage.setItem("Niveles", JSON.stringify(data));

const acceso = await fetch("./AccesoTotal.json");
const dataAcceso = await  acceso.json();

localStorage.setItem("Acceso", JSON.stringify(dataAcceso));


const cordinadora = await fetch("./CoordinadoraDeCalidad.json");
const dataCordinadora = await cordinadora.json();

localStorage.setItem("Coordinadora", JSON.stringify(dataCordinadora));

*/


//filtro
let input = document.querySelector('#acceso');

input.addEventListener('keyup',()=>{
    let divs = Array.from(document.querySelectorAll('.div'));
    divs.map((div)=>div.remove(this))

    if (input.value == 0) {
        data1.forEach(element => {
            llenarindice(element);
                });
    } else {
        data1.forEach(element => {
            let cuenta = element.Descripcion.substr(0,input.value.length).toLowerCase()

            if (cuenta == input.value.toLowerCase()) {
            
                console.log(element)
                llenarindice(element);
                               

            }
        });
    }
})


//tabla//

let tabla = document.querySelector(".tabla");


let data1 = JSON.parse(localStorage.getItem("Niveles"))
let data3 = JSON.parse(localStorage.getItem("Coordinadora"))
let data2 = JSON.parse(localStorage.getItem("Acceso"))


function llenarindice (element) {
    let texto = document.createElement('p');
texto.textContent=element.Descripcion;

let div = document.createElement('div');
div.classList.add('div');


let cantidad = document.createElement('p');
cantidad.classList.add('Cantidad');
cantidad.textContent=element.Cantidad;
informacion.append(div);
div.append(texto);
div.append(cantidad);

div.addEventListener('click',() =>{
fondo.style.display = "none";
scroll2.style.display = "block";
    if (element.Descripcion == "Acceso Total - Descripci�n"){
        desplegar(data2);
    }
     else if (element.Descripcion == "Coordinadora de Calidad"){
         desplegar(data3);

     }
})
    
}

function desplegar (auxiliar) {
    tabla.innerHTML= "" 
    fondo.style.display= "none"
    tabla.innerHTML+=`<tr> 

    <td>Nombre</td>
    <td>Loggin</td>
    <td>Homologacion</td>
    </tr>`

auxiliar.forEach(element =>{

    let texto = document.createElement('p');    
    texto.textContent=element.Descripcion;
    console.log(element.Nombre);
    console.log(element.Loggin);
    console.log(element.Homologacion);
    let check = element.Homologacion ==null ? "": "checked"

    tabla.innerHTML+=`<tr> 
    
    <td><input type="checkbox" ${check}></td>
    <td>${element.Nombre}</td>
    <td>${element.Loggin}</td>
    <td>${element.Homologacion}</td>
    </tr>`    
    
})
    
}












