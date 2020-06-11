import React from 'react';


// const money = {
//     quantity: 34,
//     quantityText: '',
// }


const Clause = ({ companyData, money }) => (
    <section>
        <p>
            14.1.2 Póliza de Responsabilidad Civil Extracontractual por un monto no menor a US$ {money} y 00/100 Dólares de los Estados Unidos de América) para amparar cualquier
            reclamo de indemnización por daños y perjuicios que haya causado a personas y/o bienes de
            <span>{companyData.name}</span> y/o terceros en los cuales resulte responsable.
        </p>
        <p>
            <span>Dicha póliza deberá detallar las siguientes condiciones particulares:</span>
        </p>
        <ul>
            <li>
                <span>Condición especial 1:</span> El asegurador deberá renunciar a su derecho de repetición
                contra Statkraft, sus accionistas, compañías afiliadas, agentes, funcionarios y trabajadores.
            </li>
            <li>
                <span>Condición especial 2:</span> La póliza debe consignar a Statkraft, sus accionistas,
                compañías afiliadas, agentes, funcionarios y trabajadores, como asegurados adicionales.
            </li>
            <li>
                <span>Condición especial 3:</span> La Cía. de seguros deberá de notificar previamente a
                Statkraft con al menos 30 días de anticipación, en caso cancelación de póliza y/o cobertura,
                bien sea por un motivo de suscripción o por falta de pago de prima.
            </li>
            <li>
                <span>Condición especial 4:</span> Esta póliza será primaria ante cualquier póliza.
            </li>
        </ul>
    </section>
);


export default Clause;
