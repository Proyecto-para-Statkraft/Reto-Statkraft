import React from 'react';


// const subcontractorCompany = {
//     nameCompanySub: '',
//     service: '',
//     ruc: 34,
// }


const Clause = ({ companyData, subcontractorCompany }) => {
    console.log(subcontractorCompany)
    return (
        <p>
            16.1 Las Partes acuerdan que el <span>PROVEEDOR</span> no podrá subcontratar,
            total o parcialmente, los Servicios materia del presente Contrato, sin la previa
        autorización expresa y por escrito de <span>{companyData.name}</span>, salvo el
        servicio de {subcontractorCompany.service} que será encargado a la empresa
        {subcontractorCompany.nameCompanySub}, con RUC {subcontractorCompany.ruc}. De otro
        lado, el <span>PROVEEDOR</span> sólo podrá ceder su posición contractual o sus derechos
        a un tercero previa, autorización expresa y por escrito de <span>{companyData.name}</span>.
        El incumplimiento de por parte del <span>PROVEEDOR</span> dará derecho a
        <span>{companyData.name}</span> a resolver el presente Contrato, y de ser el caso,
                exigir los daños y perjuicios.
    </p>
    )
};


export default Clause;
