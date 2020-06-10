import React from 'react'

const ThirdSection = (props) =>{
    return(
        <div>
            <h5>TERCERA VARIOS</h5>
            <p>
                La presente {props.numberAdenda} Adenda se inserta como parte integrante del Contrato, razón por la cual, son aplicables a esta {props.numberAdenda} Adenda las disposiciones generales del Contrato, tales como confidencialidad,
                regulación anticorrupción, responsabilidad social corporativa y solución de controversias.
            </p>
            <p>
                Las Partes declaran que mantienen plena vigencia las demás estipulaciones del Contrato, que no han sido expresamente modificadas por esta {props.numberAdenda} Adenda.
            </p>
            <p>
                En el presente documento, las palabras cuya primera letra aparezca en mayúsculas y que no hayan sido definidas en este documento, 
                tendrán el significado que se les otorga en el Contrato.
            </p>
            <p>
               En señal de conformidad, se suscribe el presente documento, 
               en dos (2) originales de igual forma y tenor, en la ciudad de Lima a los {props.daysThirdSection} días del mes de {props.monthThirdSection} de {props.yearThirdSection}.
            </p>
        </div>
    )
}

export default ThirdSection