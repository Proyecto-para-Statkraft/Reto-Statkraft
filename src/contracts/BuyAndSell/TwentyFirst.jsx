import React from 'react';


const TwentyFirst = ({ companyData }) => (
    <section>
        <h3>VIGÉSIMA PRIMERA:        RESPONSABILIDAD SOCIAL CORPORATIVA</h3>
        <p>
            <span>{companyData.name}</span>, como empresa subsidiaria del grupo noruego <span>{companyData.name}</span>,
            tiene una política definida y concreta de responsabilidad social corporativa que aplica en 
            todas sus actividades. En tal sentido, <span>{companyData.name}</span> pone en conocimiento del 
            <span>PROVEEDOR</span> y a través de este a sus contratistas, subcontratistas, 
            proveedores de servicios y obras, y demás terceros relacionados, sobre la 
            existencia de dicha política con el objetivo que la misma sea respetada y considerada en 
            las actividades relacionadas con la prestación materia del presente contrato. El 
            <span>PROVEEDOR</span> declara que tiene conocimiento de esta política.
        </p>
    </section>
);


export default TwentyFirst;
