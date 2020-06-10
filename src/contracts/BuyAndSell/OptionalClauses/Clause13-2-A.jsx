import React from 'react';


const Clause = ({ companyData }) => (
    <div>
        <p>
            13.2 Por incumplimiento en las normas de seguridad y salud o por contar con
            equipos de protección personal incompletos, inadecuados y/o en mal estado:
        </p>
        <p>
            En caso <span>{companyData.name}</span> verifique el incumplimiento de cualquiera 
            de las obligaciones en materia de seguridad y salud, y/o en materia ambiental 
            y/o por no contar o contar con equipos de protección personal incompletos, 
            inadecuados y/o en mal estado; el <span>LOCADOR</span> deberá pagar a 
            <span>{companyData.name}</span> una penalidad ascendente a [S/. 1000.00 (Un mil y 
            00/100 Nuevos Soles)] por cada caso detectado.
        </p>
    </div>
);


export default Clause;
