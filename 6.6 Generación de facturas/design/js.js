
let selectMoneda = document.createElement("select");
selectMoneda.classList.add('selectMoneda');


    fetch('./JSONmoneda.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        respuesta.forEach(moneda => {
            let option = document.createElement('option');
            selectMoneda.append(option)
            option.innerHTML += `
          ${moneda.descripcion}${moneda.abreviatura}
          `

        })

    });

    body.append(selectMoneda)

