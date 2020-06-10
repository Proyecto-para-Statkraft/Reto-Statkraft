import React from 'react'

const SecondSection = (props) =>{
    return(
        <div>
            <h5>SEGUNDA MODIFICACIONES</h5>
            <p>
                2.1 Por la presente {props.numberAdenda} Adenda, las Partes acuerdan modificar íntegramente el numeral {props.numeralOne} de la cláusula {props.numberClausula} del Contrato; en tal sentido,
                el numeral {props.numeralOne} de la cláusula {props.numCardinal}del Contrato queda redactada de la siguiente manera: {props.clausulaModificar}
            </p>
            <p>
                2.2 Por la presente {props.numberAdenda} Adenda, las Partes acuerdan agregar [el numeral {props.numeralTwo} de] la cláusula {props.numberClausulaTwo} del Contrato, cuyo texto es el siguiente:
                {props.clausulaAgregar}
            </p>
            <p>
                2.3 Por la presente Adenda, las Partes acuerdan eliminar y dejar sin efecto alguno [el numeral {props.numeral3} de] la cláusula {props.numberClausulaTree} del Contrato.
            </p>
        </div>
    )
}

export default SecondSection