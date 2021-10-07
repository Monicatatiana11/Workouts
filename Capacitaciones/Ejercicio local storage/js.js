const formulario = document.getElementById('formularioRegistro');
const llave = 'listadoEjercicio'

function guardar(){
    const formData = new FormData(formulario);

     formData.forEach((valor, key) => {
         datos [key] = valor

     });

     alert(JSON.stringify(datos));
}

(() => {
     formulario.addEventListener('submit', guardar);
}) ();