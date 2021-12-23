const datosCursos = await fetch("datos/datos.JSON");
const cursos = await datosCursos.json()
document.querySelector('.input_curso').addEventListener('keyup',()=>{
    const busqueda = document.querySelector('.input_curso').value;
    
    const filtro = function filtrarDatos(busqueda)
    {

    }


    mostrarCursos(filtro)
})

function mostrarCursos(datos) {
  datos.forEach(e => {
        document.querySelector('.principal').innerHTML += `
        <section class="curso">
            <img class="icono_menu" src="./imagenes/icono_menu.svg" alt="menu">
            <strong>${e.titulo.toUpperCase()}</strong>
            <img class="icono_curso" src="${e.icono}" alt="imagen curso">
            <p>${e.texto}</p>
            </section>`
});

    

}

mostrarCursos(cursos);