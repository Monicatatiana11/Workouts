import { Datos } from "/Datos.js";
let clave;
let tabla = document.querySelector('.tabla');
let txtTituloTabla = document.querySelector('.txtTituloTabla');
let botonNuevo = document.querySelector('.botonNuevo');
let formulario = document.querySelector(".label");
botonNuevo.addEventListener("click", ()=> {
    formulario.style.display = "flex";
})
let infoColumnas = [];
let fila = document.querySelector('.tituloColumnas');


function rellenar(n) {
    txtTituloTabla.textContent=(Datos[n].Titulo);
      infoColumnas = Datos[n].columnas;
      botonNuevo.textContent = Datos[n].tipoBoton;
      fila.innerHTML = "";
      infoColumnas.map((columna)=>{
          fila.innerHTML += `<td>${columna}</td>` 
      })
}

let arrImprimir = ["1","Descripcion0","Valor0","<img src='./design/pen.png'><img src='./design/bin.png'>"];
let arrImprimir2 = ["2","Descripcion2","Valor2","<img src='./design/pen.png'><img src='./design/bin.png'>"];
let arrImprimir3 = ["3","Descripcion3","Valor3","<img src='./design/pen.png'><img src='./design/bin.png'>"];
localStorage.setItem("imp1",JSON.stringify(arrImprimir));
localStorage.setItem("imp2",JSON.stringify(arrImprimir2));
localStorage.setItem("imp3",JSON.stringify(arrImprimir3));
localStorage.setItem("pro0",JSON.stringify(arrImprimir));
localStorage.setItem("tip0",JSON.stringify(arrImprimir));
localStorage.setItem("tip1",JSON.stringify(arrImprimir2));




let asidetabla = document.querySelector('.asideTabla');
let botones = Array.from(document.querySelectorAll('.boton'))
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click',()=>{
        imprimir();
        asidetabla.style.display = "block";
        clave = i == 0 ? "imp" : i == 1 ? "pro" : i == 2 ? "tip" : "eva";
        rellenar(i);
    })
}





localStorage.setItem("imp0",JSON.stringify(arrImprimir));

function imprimir() {
    tabla.innerHTML="";
    for (let i = 0; i < localStorage.length; i++) {
        tabla.innerHTML += `<tr class="impr${i}"></tr>`
        if (localStorage.getItem(clave+i) != null) {
            for (let m = 0; m < 4; m++) {
                let imp = document.querySelector(`.impr${i}`);
                imp.innerHTML += `<td>${arrImprimir[m]}</td>`
            }

        }
    }
}



for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', ()=> {
        asidetabla.style.display = "block";
        rellenar(i);
    })
}                                                                                                                      


let guardar = document.querySelector(".guardar");
guardar.addEventListener("click", ()=> {
    formulario.style.display = "none";
})


