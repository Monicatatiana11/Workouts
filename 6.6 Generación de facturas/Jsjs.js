const selectMoneda = document.querySelector("select");
let btnGenerar = document.querySelector('.Generar');
let selecion = []
let buttonCerrar = document.querySelector(".cerrar");


    fetch('JSONmoneda.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        respuesta.forEach(moneda => {
            let option = document.createElement('option');
            selectMoneda.append(option)
            option.innerHTML += `
          ${moneda.descripcion}${moneda.abreviatura}`
        })
    });
    let negocio = document.querySelector(".scroll");    

let tabla = document.createElement("table");
tabla.classList.add('moverScroll');
negocio.append(tabla);
let fechaInicio = document.querySelector(".fechaInicial");
let fechaFinal = document.querySelector(".fechaFinal");
let ordenDeFacturacion = document.querySelector(".ordenDeFacturacion");
let Cliente = document.querySelector(".Cliente");
let ModeloDeNegocio = document.querySelector(".ModeloDeNegocio");



function llenar() {
    tabla.innerHTML= ` 
    <th>Ver</th>
    <th>Ordenes de facturación</th>
    <th>Fecha de registro</th> 
    <th>Cliente</th>
    <th>Forma de pago</th>
    <th>Modelo de negocio </th>
    <th>Forma de pago</th>
    <th>Fecha de vencimiento</th>
    <th>Valor total a cobrar</th>
    <td><img src="./design/icono no seleccionado.svg" alt=""></td>`;  

    fetch('Filtrar.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {    
        respuesta.forEach(cliente => {
            //icono_factura
            if (cliente.fechaRegistro >= fechaInicio.value && cliente.fechaRegistro.substr(0,10) <= fechaFinal.value) {                
                llenadotabla(cliente)
            } else if (cliente.codigoOrdenDeFacturacion == ordenDeFacturacion.value) {
                llenadotabla(cliente)
            } else if (cliente.clienteNombre == Cliente.value) {
                llenadotabla(cliente)
            } else if (cliente.modeloNegocio == ModeloDeNegocio.value){//////////////////////////////////
                llenadotabla(cliente)
            } else if (fechaInicio.value == "" && fechaFinal.value == "" && ordenDeFacturacion.value == "" && Cliente.value == "" && ModeloDeNegocio.value == "") {
                llenadotabla(cliente)
            }
        })
        let checks = Array.from(document.querySelectorAll('.imgCheck'));
        let selects = Array.from(document.querySelectorAll('.seleccionar'));
        selects.forEach(e => {
            e.addEventListener('change',()=>{
                if (e.value == 'SELECCIONE') {
                    checks.map((check)=>{
                        if (check.id == e.id) {
                            check.classList.remove('imgChecked')
                        }
                    })
                } else {
                    checks.map((check)=>{
                        if (check.id == e.id) {
                            btnGenerar.classList.remove('inactivo')
                            check.classList.add('imgChecked')
                        }
                    })
                }
            })
        });
    });
}

let filtrar = document.querySelector('.sectionOtrosFiltros'); 
function animacion() {   
    let div = document.createElement('div');
    div.classList.add('animacion');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div3.classList.add('rotar2');
    document.body.append(div);

    div2.classList.add('rotar')
    div.append(div2);
    div2.append(div3);
    setTimeout(() => {
        div.style.display="none"; 
        negocio.style.display="block"
        btnConsultar.style.display="none";
        btnGenerar.style.display="block";
        BtnFiltrar.style.display="block";
     }, 1000);
}

let btnConsultar = document.querySelector('.Consultar')
btnConsultar.addEventListener('click',()=>{llenar()
filtrar.style.display = "none";

animacion();
})

let BtnFiltrar = document.querySelector('.Filtrar')
BtnFiltrar.addEventListener('click',()=>{llenar()
    filtrar.style.display = "flex";
    negocio.style.display="none"
    btnConsultar.style.display="block";
    btnGenerar.style.display="none";
    BtnFiltrar.style.display="none";
});

let emergente = document.createElement('div');
let cerrar = document.createElement('div');

emergente.classList.add('emergente');
let divtabla = document.querySelector(".tabla");

btnGenerar.addEventListener('click',()=>{
    if (btnGenerar.classList.contains('inactivo') == true) {}
     else {        
let tablaFactura = document.querySelector(".tablaFactura");
divtabla.style.display= "flex";
selecion.forEach(s => {
    tablaFactura.innerHTML+= `<td>${s.codigoOrdenDeFacturacion}$</td>
    <td>${s.codigoOrdenDeFacturacion}</td>
    <td>${s.codigoOrdenDeFacturacion}</td>
    <td>${s.codigoOrdenDeFacturacion}</td>
    <td>${s.codigoOrdenDeFacturacion}</td>`
});

    }
})
buttonCerrar.addEventListener('click',()=>{
    divtabla.style.display ="none";


})

function llenadotabla(dato) {
    let factura;
    if (filtrar.asociarAnticipo != "") {
         factura = "<img src='./design/iconooo$$$.svg'></img>";
    }else{
        factura = "";
    }
    tabla.innerHTML+=`            
    <td class="ico">
    <div class="aux">
    <img src="./design/icono documento azul.svg">
    <img src="./design/icono adobe azul.svg">            
    </div>
    </td>
    <td>${dato.codigoOrdenDeFacturacion}</td>
    <td>${dato.fechaRegistro}</td>
    <td>${dato.clienteCodigo}-${dato.clienteNombre}</td>
    <td>
    <select id="${dato.codigoOrdenDeFacturacion}" class="seleccionar">
     <option>SELECCIONE</option>
     <option>15 dias</option>
     <option>30 dias</option>
     <option>45 dias</option>
     <option>60 dias</option>
    </select></td>
    <td>${dato.modeloNegocio}</td>
    <td>${dato.descripcionOrdenFacturacion}</td>
    <td>${dato.fechaVencimiento}</td>
    <td>${dato.valorTotalACobrar}</td>
    <td>${factura}</td>
    <td><div id="${dato.codigoOrdenDeFacturacion}"class="imgCheck"></div></td>  

        `    

}