import React from 'react';


const Eighteenth = ({ companyData }) => (
    <section>
        <h3>DECIMAOCTAVA:     RESOLUCIÓN DEL CONTRATO</h3>
        <p>
            18.1 <span>{companyData.name}</span> podrá resolver el presente Contrato de conformidad con lo 
            dispuesto en el artículo 1430° del Código Civil manera anticipada por las siguientes 
            causales:
        </p>
        <p>
            18.1.1 La solicitud de insolvencia, quiebra, concurso preventivo, reestructuración o 
            suspensión de pagos o liquidación judicial o extrajudicial del <span>PROVEEDOR</span>.
        </p>
        <p>
            18.1.2 El incumplimiento de cualquiera de las obligaciones contractuales del <span>PROVEEDOR</span> 
            y siempre que dicho incumplimiento no haya sido subsanado en un plazo de siete (7) días calendario 
            desde que se comunicó por escrito del incumplimiento.
        </p>
        <p>
            18.1.3 El incumplimiento de las obligaciones del <span>PROVEEDOR</span> en materia laboral, tributaria, 
            previsional, medio ambiental y de cualquier naturaleza.
        </p>
        <p>
            18.1.4 El <span>PROVEEDOR</span> subcontrate o ceda, parcial o totalmente, el Contrato sin 
            contar con el consentimiento expreso y por escrito de <span>{companyData.name}</span>.
        </p>
        <p>
            En caso de que el <span>PROVEEDOR</span> incumpla alguna de las obligaciones a su cargo, aquél, 
            quedará automáticamente constituido en mora, sin que se necesario el requerimiento por parte de 
            <span>{companyData.name}</span>.
        </p>
        <p>
            Cuando en el presente Contrato se haga referencia a un incumplimiento del <span>PROVEEDOR</span>, 
            debe entenderse que se incluye también el cumplimiento parcial, tardío o defectuoso.
        </p>
        <p>
            18.2 El <span>PROVEEDOR</span> podrá resolver el presente Contrato de manera anticipada de conformidad 
            con lo dispuesto en el artículo 1429° del Código Civil por las siguientes causales:
        </p>
        <p>
            18.2.1 La solicitud de insolvencia, quiebra, concurso preventivo, reestructuración o suspensión de 
            pagos o liquidación judicial o extrajudicial de <span>{companyData}</span>.
        </p>
        <p>
            18.2.2 El incumplimiento imputable a <span>{companyData}</span> en el pago de los montos adeudados 
            al <span>PROVEEDOR</span>, como contraprestación por la transferencia de los Bienes.
        </p>
        <p>
            18.3 Las Partes podrán resolver el presente Contrato de mutuo acuerdo que conste por escrito.
        </p>
        <p>
            18.4 Asimismo, <span>{companyData}</span> podrá resolver unilateralmente el presente Contrato sin 
            expresión de causa, previa comunicación por escrito al <span>PROVEEDOR</span> con una anticipación 
            no mayor de quince (15) días calendario, no habiendo lugar a responsabilidad ni indemnización 
            alguna.
        </p>
        <p>
            18.5 En el supuesto de caso fortuito o fuerza mayor, cualquiera de las Partes podrá resolver el 
            Contrato, de conformidad con lo señalado en el numeral 15.4 de la cláusula décimo quinta.
        </p>
    </section>
);


export default Eighteenth;
