import React from 'react';
import ClauseA from './OptionalClauses/Clause13-2-A';
import ClauseB from './OptionalClauses/Clause13-2-B';


const Thirteenth = ({ companyData, clauseA, clauseB }) => (
    <section>
        <h3>DÉCIMA TERCERA:         PENALIDADES</h3>
        <p>
            Sin perjuicio de la facultad de STATKRAFT de resolver el Contrato y/o reclamar
            el pago de daños y perjuicios, el LOCADOR acepta el pago de penalidades en los
            siguientes supuestos, hasta un tope de [10%]:
        </p>
        <p>
            13.1 Por retraso en la ejecución de la compraventa:
        </p>
        <p>
            En el caso de retraso en la ejecución de la compraventa y/o en la entrega de los
            Bienes, el <span>PROVEEDOR</span> deberá pagar a <span>{companyData.name}</span> una penalidad
            ascendente a uno por ciento (1%) del valor del Contrato por cada día de atraso.
        </p>
        <p>
            {(clauseA) && <ClauseA />}
            {(clauseB) && <ClauseB />}
        </p>
        <p>
            13.3 Por resolución del Contrato:
        </p>
        <p>
            En caso se resuelva el Contrato por causa imputable al <span>PROVEEDOR</span>, éste
            deberá pagar a <span>{companyData.name}</span> una penalidad ascendente al diez por ciento (10%)
            del valor del Contrato.
        </p>
        <p>
            El pago de las penalidades mencionadas en los numerales precedentes no significa una
            renuncia de parte de <span>{companyData.name}</span> al derecho de cobrar al <span>PROVEEDOR</span>
            el daño ulterior que no esté cubierto por dichas penalidades.
        </p>
    </section>
);


export default Thirteenth;
