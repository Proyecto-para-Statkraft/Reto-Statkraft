import React from 'react'

const info = {
    info1:'espacio',

}

const SecondSection = () =>{
    return(
        <div>
            <h5>SEGUNDA MODIFICACIONES</h5>
            <p>
                Por la presente {info.info1} Adenda, las Partes acuerdan modificar íntegramente [el numeral [●] de] la cláusula [●] del Contrato; en tal sentido,
                [el numeral [●] de] la cláusula [●]del Contrato queda redactada de la siguiente manera:
            </p>
            <p>
                Por la presente [●]Adenda, las Partes acuerdan agregar [el numeral [●] de] la cláusula [●] del Contrato, cuyo texto es el siguiente:
            </p>
            <p>
               Por la presente Adenda, las Partes acuerdan eliminar y dejar sin efecto alguno [el numeral [●] de] la cláusula [●] del Contrato.
            </p>
        </div>
    )
}

export default SecondSection