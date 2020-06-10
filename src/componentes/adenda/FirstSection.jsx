import React from 'react'

const info = {
    info1:'espacio',
}

const FirstSection = () =>{
    return(
        <div>
            <h5>PRIMERA ANTECEDENTES</h5>
            <p>
                1 Con fecha {info.info1} de [●] de [●], las Partes suscribieron el Contrato 
                de [●](en adelante, el “Contrato”), mediante el cual [DETALLAR OBJETO].
            </p>
            <p>
                [Con fecha [●] de [●] de [●], las Partes suscribieron la Primera Adenda al Contrato (en adelante, la “Primera Adenda”), mediante la cual [DETALLAR OBJETO].]
                [Nota: De ser el caso, hacer breve referencia a las adendas que se hubieran suscrito.]
            </p>
        </div>
    )
}

export default FirstSection