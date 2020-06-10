import React from 'react';


// const companyData = {
//     name: ',',
//     ruc: 34,
//     address: 'Av. Pardo y Aliaga N° 652, Of. 203, San Isidro, Lima',
//     representatives: {
//         one: {
//             name: '',
//             dni: 34,
//         },
//         two: {
//             name: '',
//             dni: 34,
//         }
//     }
// }


// const providerData = {
//     name: '',
//     ruc: 34,
//     address: '',
//     representative: {
//         name: '',
//         dni: 34,
//         numberRegistry: 34
//     }
// }


const Introduction = (props) => {

    // console.log('datos compañia', props.location.companyData)
    // console.log('datos proveedor', props.location.providerData)

    const companyData = props.location.companyData;
    const providerData = props.location.providerData;
    // console.log(companyData)

    return (
        <section>
            <h2 className="text-center">CONTRATO DE COMPRAVENTA</h2>
            <p>
                Conste por el presente documento el Contrato de Compraventa (en adelante
                el “Contrato”), que celebran:
            </p>
            <p>
                <span>{companyData.name}</span>, con RUC N° {companyData.ruc}, con domicilio en
                {companyData.address}, debidamente representada por los señores
                {companyData.representativeOneName}, identificado con DNI N° {companyData.representativeOneDni}
                y {companyData.representativeTwoName}, identificado con DNI N° {companyData.representativeTwoDni},
                ambos facultados según poderes inscritos en la Partida Electrónica N° 00179957 del Registro de
                Personas Jurídicas de Lima, a quien en adelante se le denominará “<span>{companyData.name}</span>”;
                y, {providerData.name}, con RUC N° {providerData.ruc}, con domicilio en {providerData.address},
                debidamente representada por {providerData.representativeName}, identificado con DNI Nº
                {providerData.representativeDni}, según poderes inscritos en la Partida Electrónica Nº
                {providerData.numberRegistry} del Registro de Personas Jurídicas de Lima,
                a quien en adelante se le denominará el “<span>PROVEEDOR</span>”.
            </p>
            <p>
                <span>{companyData.name}</span> y el <span>PROVEEDOR</span> podrán ser denominados de manera
                conjunta como las “Partes” e individualmente como la “Parte”.
            </p>
            <p>
                Las Partes suscriben el presente Contrato en los siguientes términos y condiciones:
            </p>
        </section >
    )
};


export default Introduction;