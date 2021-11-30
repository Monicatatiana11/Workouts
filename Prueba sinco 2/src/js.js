const opcionesMenu = Array.from(document.querySelectorAll('.menus'));

opcionesMenu.map((opcion)=>{
    opcion.addEventListener('click',()=>{
        switch (opcion.id) {
            case "reasignar":
                opcion.querySelector('img').src='images/icono_reasignar--hover.svg'
                document.querySelector('.visorInformacion').innerHTML=`  <section class="reasignar2">
                <h4>Observaciones</h4>            
                <input type="Texto" placeholder="Maximo 2.500 caracteres" class="textoObservaciones">
                <h4>Usuario</h4>
                <select name="selecionarOpciones" id="" class="selecionarOpcionObs"></select>
         </section>`;
                break;
            case "asociacion":
                opcion.querySelector('img').src='images/icono_asociacion--hover.svg'
                break;
            case "agregarDocumentos":
                opcion.querySelector('img').src='images/icono_agregarDocumentos--hover.svg'
                document.querySelector('.visorInformacion').innerHTML=` <aside class="agregarDocumentos2">
                <img src="./images/fondo2.0.svg" alt="imagen arrastrar doc" class="imgFondo">
                <button class="digitar">Digitalizar y guardar</button>
            </aside>`;
                break;
            case "respuesta":
                opcion.querySelector('img').src='images/icono_respuesta--hover.svg'
                document.querySelector('.visorInformacion').innerHTML=`<iframe src="https://www.sinco.com.co/"></iframe>`;
                break;
        }    
    })
})

const mensajes = Array.from(document.querySelectorAll('.tarjetaManu'));
mensajes.map((mensaje)=>{
    mensaje.addEventListener('click',()=>{
        document.querySelector('.visorInformacion').innerHTML=`<section class="reasignar">
        <aside class="observaciones">
            <p>Observaciónes:</p>
            <input class="inputObservaciones" type="text" placeholder="Máximo 2.500 caracteres.">
            <p>Acción:</p>
            <select>
            <option>Completar</option>
            <option>Rechazar</option>
            <option>Cancelar</option>
            </select>
        </aside>
        <aside class="descriptores">
            <section class="scroll2">
                <table>
                    <th colspan="5">SEGUIMIENTOS</th>
                    <tr class="subtitulos">
                        <td>Paso</td>
                        <td>Actividad del flujo</td>
                        <td>Estado</td>
                        <td>Usuarios</td>
                        <td>Observaciones</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>Registro de Correspondencia</td>
                        <td>Registrado</td>
                        <td>Admin Sincosoft
                            27/05/2021 11:04:17</td>
                        <td>FACTURAS DE SERVICIOS</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Asociar actos y entradas (ADPRO)</td>
                        <td>Pendiente</td>
                        <td>Admin Sincosoft
                            27/05/2021 11:04:17</td>
                    </tr>
                </table>
                <table>
                    <th colspan="4">CORRESPONDENCIA ASOCIADA</th>
                    <tr class="subtitulos">
                        <td>Id</td>
                        <td>Radicado</td>
                        <td>Tipo Correspondencia</td>
                        <td>Asunto</td>
                    </tr>
                    <tr>
                        <td>No tiene correspondencia asociada</td>
                    </tr>

                </table>
                <table>
                    <th colspan="2">DESCRIPTORES</th>
                    <tr>
                        <td class="subtitulos">Proveedores <span>*</span> </td>
                        <td><select></select></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Consecutivo factura de proveedor <span>*</span></td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Fecha de factura <span>*</span></td>
                        <td><input type="date" name="" id=""></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Valor total del documento <span>*</span></td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Obras por usuario <span>*</span> </td>
                        <td><select></select></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Contrato de obra <span>*</span></td>
                        <td><select></select></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Acta de obra <span>*</span></td>
                        <td><select></select></td>
                    </tr>
                    <tr>
                        <td class="subtitulos">Entrada de almacén <span>*</span> </td>
                        <td><select></select></td>
                    </tr>
                    <tr>
                        <td colspan="2"><button class="consultar mas">+</button></td>
                    </tr>
                </table>
                <button class="consultar des">Guardar Descriptores</button>                      
            </section>
        </aside>
    </section>`;

    })
})