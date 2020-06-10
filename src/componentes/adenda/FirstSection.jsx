import React from 'react'


const FirstSection = (props) =>{
    return(
        <div>
            <h5><span>PRIMERA</span> ANTECEDENTES</h5>
            <p>
                <span>1.1</span>Con fecha {props.dayContract} de {props.monthContract} de {props.yearContract}, las Partes suscribieron el Contrato 
                de {props.typeContract} (en adelante, el “Contrato”), mediante el cual {props.detailObject}
            </p>
            <p>
                <span>1.2</span>[Con fecha {props.dayAdenda} de {props.monthAdenda} de {props.yearAdenda}, las Partes suscribieron la Primera Adenda al Contrato (en adelante, la “Primera Adenda”), 
                mediante la cual {props.detailObject2}
            </p>
        </div>
    )
}

export default FirstSection