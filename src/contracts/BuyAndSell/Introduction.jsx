import React from 'react';


const companyData = {
    name: ',',
    ruc: 34,
    address: 'Av. Pardo y Aliaga N° 652, Of. 203, San Isidro, Lima',
    representatives: {
        one: {
            name: '',
            dni: 34,
        },
        two: {
            name: '',
            dni: 34,
        }
    }
}


const providerData = {
    name: '',
    ruc: 34,
    address: '',
    representative: {
        name: '',
        dni: 34,
        numberRegistry: 34
    }
}


const Introduction = ({ companyData, providerData }) => (
    <section>
        <h2 className="text-center">CONTRATO DE COMPRAVENTA</h2>
        <p>
            Conste por el presente documento el Contrato de Compraventa (en adelante
            el “Contrato”), que celebran:
        </p>
        <p>
            <span>{companyData.name}</span>, con RUC N° {companyData.ruc}, con domicilio en
            {companyData.address}, debidamente representada por los señores
            {companyData.representatives.one.name}, identificado con DNI N° {companyData.representatives.one.dni}
            y {companyData.representatives.two.name}, identificado con DNI N° {companyData.representatives.two.dni},
            ambos facultados según poderes inscritos en la Partida Electrónica N° 00179957 del Registro de
            Personas Jurídicas de Lima, a quien en adelante se le denominará “<span>{companyData.name}</span>”;
            y, {providerData.name}, con RUC N° {providerData.ruc}, con domicilio en {providerData.address}, 
            debidamente representada por {providerData.representative.name}, identificado con DNI Nº 
            {providerData.representative.dni}, según poderes inscritos en la Partida Electrónica Nº 
            {providerData.representative.numberRegistry} del Registro de Personas Jurídicas de Lima, 
            a quien en adelante se le denominará el “<span>PROVEEDOR</span>”.
        </p>
        <p>
            <span>{companyData.name}</span> y el <span>PROVEEDOR</span> podrán ser denominados de manera 
            conjunta como las “Partes” e individualmente como la “Parte”.
        </p>
        <p>
            Las Partes suscriben el presente Contrato en los siguientes términos y condiciones:
        </p>
    </section>
);


export default Introduction;