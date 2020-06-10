import React from 'react'

const AdendaIntroduction = (props) => {
    return (
        <div>
            <h4>{props.numberAdenda} ADENDA AL CONTRATO DE {props.nameContract}</h4>
            <p>
                Conste por el presente documento la {props.numberAdenda} Adenda al Contrato de
                {props.nameContract} (la “{props.numberAdenda} Adenda”) que celebran:
            </p>

            <p>
                STATKRAFT PERÚ S.A., con RUC N° 20269180731, con domicilio en Av. Pardo y Aliaga N° 652, Of. 203, San Isidro, Lima,
                debidamente representada por los señores {props.representativeOne}, identificado con DNI N° {props.dniOne} y {props.representativeTwo},
                identificado con DNI N° {props.dniTwo}, ambos facultados según poderes inscritos en la Partida Electrónica
                N° 00179957 del Registro de Personas Jurídicas de Lima, a quien en adelante se le denominará “STATKRAFT”; y,
            </p>

            <p>
                {props.business}, con RUC N° {props.rucBusiness},con domicilio en {props.directionBusiness}, debidamente representada por {props.representativeBusiness},
                identificado con DNI Nº {props.dniBusiness}, según poderes inscritos en la Partida Electrónica Nº {props.partidaElectronica} del Registro de Personas Jurídicas de Lima,
                a quien en adelante se le denominará el “{props.nameX}”.`
            </p>
            <p>
                STATKRAFT y el {props.nameX} podrán ser denominados de manera conjunta como las “Partes” e individualmente como la “Parte”.
            </p>

            <p>
                Las Partes suscriben la presente {props.numberAdenda} Adenda en los siguientes términos:
            </p>
        </div>
    )
}

export default AdendaIntroduction
