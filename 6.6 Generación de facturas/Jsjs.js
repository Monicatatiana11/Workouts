const selectMoneda = document.querySelector("select");
let btnGenerar = document.querySelector('.Generar');

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
negocio.append(tabla);

function llenar() {
    tabla.innerHTML= ` 
    <th>Ver</th>
    <th>Ordenes de facturación</th>
    <th>Fecha de registro</th> 
    <th>Forma de pago</th>
    <th>Fecha de vencimiento</th>
    <th>Valor total a cobrar </th>
    <th>Valor anticipo</th>
    <th>Asociar anticipo</th>
    <th>Asociar anticipo</th>
    <td><img src="./design/icono no seleccionado.svg" alt=""></td>`;  

    fetch('Filtrar.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {    
        respuesta.forEach(filtrar => {
            //icono_factura
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
            <td>${filtrar.codigoOrdenDeFacturacion}</td>
            <td>${filtrar.fechaRegistro}</td>
            <td>${filtrar.clienteNombre}</td>
            <td>
            <select class="seleccionar">
             <option>SELECCIONE</option>
             <option>15 dias</option>
             <option>30 dias</option>
             <option>45 dias</option>
             <option>60 dias</option>
            </select></td>
            <td>${filtrar.modeloNegocio}</td>
            <td>${filtrar.descripcionOrdenFacturacion}</td>
            <td>${filtrar.fechaVencimiento}</td>
            <td>${filtrar.valorTotalACobrar}</td>
            <td>${factura}</td>
            <td><div class="imgCheck"></div></td>            
                `    
        })
        let checks = Array.from(document.querySelectorAll('.imgCheck'))
        checks.map((check)=>{
            check.addEventListener('click',()=>{
                check.classList.toggle('imgChecked');
                btnGenerar.classList.remove('inactivo')
            })
        })
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

btnGenerar.addEventListener('click',()=>{
    if (btnGenerar.classList.contains('inactivo') == true) {}
     else {
alert("aca deberia haber un div")
    }
})

cerrar.addEventListener('click',()=>{
emergente.remove(this);
})

//check
