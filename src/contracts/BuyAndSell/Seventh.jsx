import React from 'react';


const Seventh = ({ companyData }) => (
    <section>
        <h3>SÉPTIMA:    TRANSFERENCIA DE PROPIEDAD Y TRANSFERENCIA DEL RIESGO</h3>
        <p>
            Las Partes acuerdan que la transferencia de propiedad y la transferencia del
            riesgo de los Bienes a <span>{companyData.name}</span> se producirán en el momento en
            que se verifique su entrega física a satisfacción de <span>{companyData.name}</span> de
            conformidad con lo pactado en las cláusulas quinta y sexta y demás disposiciones
            aplicables de este Contrato.
        </p>
    </section>
);


export default Seventh;
