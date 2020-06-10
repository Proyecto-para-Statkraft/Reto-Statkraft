import React from 'react';


const Seventeenth = ({ companyData }) => (
    <section>
        <h3>DECIMA SÉTIMA:         CONFIDENCIALIDAD</h3>
        <p>
            17.1 El <span>PROVEEDOR</span> se obliga a guardar absoluta reserva y confidencialidad de cualquier 
            información que hubiese obtenido en la ejecución del presente Contrato, ya sea de forma escrita, oral 
            o visual, de manera directa o indirecta, relacionada con <span>{companyData.name}</span>, sus afiliadas, 
            subsidiarias o empresas relacionadas o asociadas, accionistas, socios y accionistas o socios de sus 
            afiliadas, subsidiarias y empresas relacionadas o asociadas, sus clientes y los clientes de las 
            empresas antes mencionadas, no estando facultado a revelar dicha información a terceros. La obligación 
            antes mencionada se extenderá incluso con posterioridad a la terminación del presente Contrato o de 
            sus renovaciones o prórrogas, cualquiera que fuera la causal de terminación.
        </p>
        <p>
            17.2 Las obligaciones de confidencialidad alcanzan tanto al <span>PROVEEDOR</span> como al personal a 
            través del cual éste ejecute el Contrato, sus asesores y subcontratistas. El <span>PROVEEDOR</span> 
            informará a su personal, sus asesores y subcontratistas sobre el alcance la obligación de confidencialidad 
            y se hará responsable del cumplimiento de dicha obligación por parte de dichas personas en los términos 
            establecidos en este contrato.
        </p>
        <p>
            17.3 En caso el <span>PROVEEDOR</span>, su personal, sus asesores o subcontratistas sean legal o 
            judicialmente requeridos a revelar cualquier información confidencial relacionada a este contrato, el 
            <span>PROVEEDOR</span> deberá de forma previa notificar esta circunstancia a <span>{companyData.name}</span> 
            inmediatamente para que ésta pueda tomar las medidas necesarias para cautelar su derecho a la privacidad. El 
            <span>PROVEEDOR</span> deberá informar formalmente a la autoridad competente que reciba dicha información 
            sobre la naturaleza confidencial de la misma, y deberá requerir a dicha autoridad que impida que dicha 
            información sea divulgada a otros. Las obligaciones del <span>PROVEEDOR</span> conforme al presente Contrato 
            continuarán vigentes sobre la Información Confidencial divulgada a cualquier autoridad gubernamental, no 
            obstante dicha divulgación.
        </p>
        <p>
            17.4 En cualquier caso o supuesto de término o resolución de este Contrato, el <span>PROVEEDOR</span> se 
            obliga a devolver a <span>{companyData.name}</span> toda la información y datos que éste le haya proporcionado, 
            así como cualquier copia de la misma que pueda estar en su poder o de su personal, sus asesores o 
            subcontratistas, o preparada por el <span>PROVEEDOR</span> o su personal, sus asesores o subcontratistas 
            en base a la información confidencial.
        </p>
        <p>
            17.5 El incumplimiento de esta cláusula califica como causal de resolución del Contrato, sin 
            perjuicio de los daños y perjuicios que se generen.
        </p>
    </section>
);


export default Seventeenth;
