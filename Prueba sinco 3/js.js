const iniciacion1 = await fetch('iniciacion.JSON');
const iniciacion = await iniciacion1.json();
const planificacion1 = await fetch('planificacion.JSON');
const planificacion = await planificacion1.json();
const ejecucion1 = await fetch('iniciacion.JSON');
const ejecucion = await ejecucion1.json();
const aplazado1 = await fetch('iniciacion.JSON');
const aplazado = await aplazado1.json();
const terminado1 = await fetch('iniciacion.JSON');
const terminado = await terminado1.json();
const desistido1 = await fetch('iniciacion.JSON');
const desistido = await desistido1.json();

document.querySelector('#iniciacion').addEventListener('click',()=>{llenarDatos(iniciacion)});
document.querySelector('#planificacion').addEventListener('click',()=>{llenarDatos(planificacion)});
document.querySelector('#ejecucion').addEventListener('click',()=>{llenarDatos(ejecucion)});
document.querySelector('#aplazado').addEventListener('click',()=>{llenarDatos(aplazado)});
document.querySelector('#terminado').addEventListener('click',()=>{llenarDatos(terminado)});
document.querySelector('#desistido').addEventListener('click',()=>{llenarDatos(desistido)});

function llenarDatos(datos) {
    document.querySelector('.datos').innerHTML="";
    datos.forEach(dato => {
        document.querySelector('.datos').innerHTML+=`<br>${dato.SUBPROYECTO != 0 ? "<img src='images/botonMas.svg'></img>" : ""}${dato.nombre}<br>`
        if (dato.SUBPROYECTO != 0) {
            dato.SUBPROYECTO.forEach(sub =>{
                document.querySelector('.datos').innerHTML+=`----${sub.nombre}<br>`
           })
        }
    });
    console.clear();
    console.log(document.querySelector('.datos').innerHTML)
}