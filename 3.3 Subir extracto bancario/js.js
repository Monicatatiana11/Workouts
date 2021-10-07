import { bancos,cuentas } from "./quemados.js";

let banco = document.querySelector('.bancos');
for (let i = 0; i < bancos.length; i++) {
    banco.innerHTML +="<option value='"+i+"'>"+bancos[i]+"</option>"
}

let cuenta = document.querySelector('.cuenta'); 
for (let i = 0; i < cuentas.length; i++) {
    cuenta.innerHTML +="<option value='"+i+"'>"+cuentas[i]+"</option>"    
}

let check = document.querySelector('.check');
let img = document.querySelector('.check2');
let select = Array.from(document.querySelectorAll(".select"));

check.addEventListener("click", () => {
    img.classList.toggle("activado");
    img.classList.toggle("desactivado");

    select.map((archivo)=> {
        console.log(check.checked)
        archivo.style.display = check.checked == false ? "none" : "block"
    })
})


let dias = document.querySelector('.fecha');

function fecha() {
    let ahora = new Date();
    dias.textContent = "Fecha:"+ ahora.getDate() + "/" + (ahora.getMonth()+1) + "/" + ahora.getFullYear() + "  " + ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();

}
setInterval(fecha,1000)


