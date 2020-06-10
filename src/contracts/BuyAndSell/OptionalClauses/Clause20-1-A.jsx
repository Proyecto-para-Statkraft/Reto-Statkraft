import React from 'react';


const Clause = ({ companyData }) => (
    <section>
        <p>
            20.1 <span>LA ENTIDAD</span> se compromete a y garantiza que, en la ejecución de
            las prestaciones que les corresponden bajo el Contrato o en cualquier trámite
            o gestión relativo al mismo, no incumplirá ni violará las leyes, reglamentos
            ni norma alguna vigente en el Perú, en especial pero sin que ello se limite
            a la normatividad anticorrupción que exista en el país, ya sea que se trate
            de una norma individual, de artículos incluidos en una ley o norma de carácter
            general, o de tratados internacionales que sean aplicables en el Perú; todo
            ello sin perjuicio de que dicha norma o regulación les sea aplicable o no de
            manera integral.
        </p>
        <p>
            20.2 Dentro del contexto a que se refiere el párrafo precedente, y sin que la 
            presente enunciación sea limitativa sino meramente enunciativa, <span>LA ENTIDAD</span> 
            se compromete y garantiza que no efectuará, directa o indirectamente, pagos, promesas 
            u ofertas de pagos, ni autorizará el pago de monto alguno, ni efectuará o autorizará 
            la entrega o promesa de entrega de objeto de valor alguno, a funcionarios, empleados,
            agentes o representantes del gobierno o de cualquiera de las dependencias o 
            entidades públicas o gubernamentales o dependientes de los anteriores, o 
            cualquier persona que actúe en ejercicio de un cargo o función pública o en representación 
            o en nombre de cualquiera de los antes mencionados; candidatos para cargos políticos o
            públicos, cualquier partido político o cualquier funcionario o representante de partidos 
            políticos; y cualquier persona o entidad en tanto se sepa o se tenga motivos 
            para saber que todo o parte del pago o bien entregado u ofrecido será a su vez ofrecido, 
            entregado o prometido, directa o indirectamente, a una persona o entidad con 
            las características mencionadas en los puntos precedentes, con la finalidad de influir en 
            cualquier acto o decisión de dicha persona o entidad, inclusive en la decisión de
            hacer u omitir algún acto ya sea en violación de sus funciones o inclusive en el 
            cumplimiento de las mismas, o induciendo a dicha persona o entidad a influir 
            en las decisiones o actos del gobierno o personas o entidad es dependientes del 
            mismo, ya sea con la finalidad de obtener algún tipo de ayuda o asistencia para el 
            <span>LOCADOR</span>  en la ejecución del presente Contrato, o ya sea con la finalidad de 
            recibir o mantener cualquier otro beneficio de parte del gobierno.
        </p>
        <p>
            20.3 <span>LA ENTIDAD</span>acuerda indemnizar, defender y conservar sin daño a 
            <span>{companyData.name}</span> contra cualquier multa, penalización, costos y gastos relacionados, 
            incluyendo los gastos y costos legales razonables, atribuibles a cualquier violación de 
            <span>LA ENTIDAD</span> en el cumplimiento de esta Cláusula con relación al cumplimiento 
            de sus obligaciones bajo este Contrato. Esta disposición sobrevivirá tras la terminación 
            de este Contrato.
        </p>
    </section>
);


export default Clause;
