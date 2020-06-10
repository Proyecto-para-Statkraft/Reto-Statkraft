import React from 'react';
import ClauseA from './OptionalClauses/Clause16-1-A';
import ClauseB from './OptionalClauses/Clause16-1-B';


const Sixteenth = ({ companyData, clauseKnownSub, clauseNotKnownSub }) => (
    <section>
        <h3>DECIMO SEXTA: SUBCONTRATACION Y CESION</h3>
        {(clauseKnownSub) && <ClauseA companyData={companyData} />}
        {(clauseNotKnownSub) && <ClauseB companyData={companyData} />}
        <p>
            16.2 Toda cesión o subcontratación del Contrato que haya sido efectuada conforme al numeral
            anterior, no exime al <span>PROVEEDOR</span> de sus responsabilidades contractuales, constituyéndose 
            frente a <span>{companyData}</span> en obligado solidario.
        </p>
        <p>
            16.3 El <span>PROVEEDOR</span> acepta de manera anticipada que <span>{companyData}</span> podrá ceder su 
            posición contractual o sus derechos a cualquier tercero o a empresas vinculadas o afiliadas, para lo 
            cual bastará una comunicación escrita con una anticipación razonable.
        </p>
    </section>
);


export default Sixteenth;
