import React from 'react';


const ClauseB = ({ companyData }) => (
    <div>
        <p>
            13.2 Por incumplimiento en las normas de seguridad y salud o por contar con
            equipos de protección personal incompletos, inadecuados y/o en mal estado:
        </p>
        <p>
            <span>{companyData.name}</span>, considera los siguientes hechos como incumplimientos 
            relacionados a temas de seguridad y salud:
        </p>
        <ul>
            <li>1. Días perdidos por accidentabilidad >1 día</li>
            <li>
                2. Incumplimiento legal advertido por el auditor externo o interno de 
                <span>{companyData.name}</span>.
            </li>
            <li>
                3. No existir evidencia de Inducción de HSS - <span>{companyData.name}</span> 
                realizada en un periodo de un año.
            </li>
            <li>
                4. Incumplir con lo señalado en el Reglamento Interno de Seguridad y Salud en 
                el Trabajo.
            </li>
            <li>5. Intento de ocultar accidentes.</li>
            <li>6. Incumplir el uso de los equipos de protección personal</li>
        </ul>
        <p>Se aplicarán las siguientes penalidades a los incumplimientos antes expuestos:</p>
        <ul>
            <li>
                1. En caso de los puntos del (1) al (4) <span>{companyData.name}</span> aplicará una 
                penalidad de S/ 5,000.00 (Cinco Mil y 00/100 Soles) por cada caso detectado, salvo 
                se incurra en el incumplimiento señalado en el punto (6)  en cuyo caso se aplicará 
                la penalidad establecida para dicho caso.
            </li>
            <li>2. En el caso del punto (5) será causal de resolución de contrato.</li>
            <li>3. En el caso del punto (5) la penalidad será de S/. 1000.00 (Un Mil y 00/100 Soles).</li>
        </ul>
        <p>
            Los incumplimientos reportados por el <span>LOCADOR</span> a <span>{companyData.name}</span> 
            y gestionados en un plan de acción por el propio <span>LOCADOR</span>, con excepción de 
            contenidos en los puntos 1 y 5, y que sean aprobados por {companyData.name} no serán penalizados.
        </p>
        <p>
            El monto máximo acumulado por penalidades será de 10% del monto contratado, en caso 
            de ser mayor <span>{companyData.name}</span> queda facultado a resolver el contrato por 
            esta causa.
        </p>
    </div>
);


export default ClauseB;
