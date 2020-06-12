import React from 'react';


const Introduction = ({ data, provider }) => {


    const { companyData } = data;
    const { providerData } = provider;

    if (provider !== '') {
        return (
            <section className="m-5 clause-question">
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
    }
    return (
        <div className="m-5">
            <h2 className="text-center">CONTRATO DE COMPRAVENTA </h2>
        </div>
    )
};


export default Introduction;