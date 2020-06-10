import React from 'react';

const annexed = {
    codeConduct: 34,
    codeEtic: 34,
};


const Clause = ({ companyData, annexed }) => (
    <section>
        <h4>1. ETICA EN LOS NEGOCIOS Y ANTICORRUPCION</h4>
        <p>1.1 REQUISITOS DE LA ETICA EN LOS NEGOCIOS Y ANTICORRUPCION</p>
        <p>
            El <span>PROVEEDOR</span>, se obliga a realizar todas las prestaciones relacionadas a la
            ejecución de los Servicios de conformidad con las leyes, normas y reglamentos
            estatales, nacionales e internacionales aplicables y otras normas aplicables y
            relacionadas a estándares de conducta ético y responsables, incluyendo los
            relacionados a los derechos humanos, la protección del medio ambiente, la
            corrupción, el fraude, el lavado de dinero, los regímenes de sanciones aplicables
            y otros delitos económicos, como:
        </p>
        <ul>
            <li>
                i. cualquier ley y regulación anticorrupción internacional, regional, nacional
                o local aplicable, que incluye, entre otros, el Código Penal de Noruega y la
                Ley de Soborno del Reino Unido;
            </li>
            <li>
                ii. cualesquiera leyes y reglamentos internacionales, regionales, nacionales
                o locales aplicables sobre recursos naturales y ambientales, y estándares
                internacionales tales como los Estándares de Desempeño de IFC sobre Sostenibilidad
                Ambiental y Social;
            </li>
            <li>
                iii. cualquier ley y normativa de salud y seguridad internacional, regional,
                nacional o local aplicable;
            </li>
            <li>
                iv. cualesquiera leyes y reglamentos de derechos humanos internacionales,
                regionales, nacionales o locales aplicables, incluidos, entre otros, los
                mencionados en los Principios Rectores de las Naciones Unidas sobre Empresas
                y Derechos Humanos;
            </li>
            <li>
                v. cualquier regulación aplicable relacionada con sanciones económicas y
                control de exportaciones, y en particular no realizar negocios con entidades
                de propiedad o controladas por personas que sean objeto de sanciones administradas
                o aplicadas por la Oficina de Control de Activos Extranjeros del Departamento
                del Tesoro de los EE. UU. El Consejo de Seguridad de las Naciones Unidas, la
                Unión Europea, el Tesoro de Su Majestad o el Ministerio de Relaciones Exteriores
                de Noruega, o está ubicado, organizado o residente en un país o territorio que es,
                o cuyo gobierno es, objeto de sanciones por sanciones relevantes autoridad;
            </li>
            <li>
                vi. El Código de conducta de el <span>PROVEEDOR</span> de <span>{companyData.name}</span> 
                adjunto como Anexo {annexed.codeConduct} al Contrato; y
            </li>
            <li>
                vii. normas que sean consistentes con el requisito de <span>{companyData.name}</span> para 
                la ética empresarial, la lucha contra la corrupción y otros delitos económicos adjuntos
                como Anexo {annexed.codeEtic} al presente, cuando actúen en nombre de <span>{companyData.name}</span>.
            </li>
        </ul>
        <p>
            El <span>PROVEEDOR</span> se asegurará que sus afiliados, representantes, subcontratistas
            empleados, agentes autorizados u otros representantes que realicen los Servicios
            en nombre de el <span>PROVEEDOR</span> cumplan con todos los requisitos mencionados anteriormente.
        </p>
        <p>
            El <span>PROVEEDOR</span> garantiza, salvo haya comunicado lo contrario a <span>{companyData.name}</span> antes 
            de la suscripción del Contrato, que según su leal saber y entender, ni el <span>PROVEEDOR</span>,
            sus empleados, gerentes o directores, representantes o afiliados han sido en los
            últimos tres años i) condenados por cualquier delito penal que implique corrupción,
            lavado de dinero u otro delito económico o delito en contra de los Derechos Humanos,
            o ii) son o han sido sujeto de cualquier investigación o procedimiento de ejecución
            por parte de cualquier organismo gubernamental, administrativo o regulador con
            respecto a cualquier delito o presunto delito, que haya sido a notificado, haya
            sido presentado como una amenaza o esté pendiente de ser investigado, este en
            investigación o en procedimiento de ejecución y no existan circunstancias que
            puedan dar lugar a tal investigación, cuestionamiento o procedimiento.
        </p>
        <p>
            El <span>PROVEEDOR</span> además declara y garantiza que, en relación con el proceso de compras,
            negociación y preparación del Contrato, no se ha involucrado en ninguna actividad,
            práctica o conducta que infrinja las leyes, regulaciones y políticas mencionadas
            anteriormente.
        </p>
        <p>
            El <span>PROVEEDOR</span> se obliga a cumplir con los requisitos del punto [1.1], incluida
            la implementación, el monitoreo y la aplicación de controles y procedimientos
            internos adecuados para evitar cualquier violación de las leyes antes mencionadas.
        </p>
        <p>1.2 REGISTROS, INFORMES Y AUDITORÍAS</p>
        <p>
            El <span>PROVEEDOR</span> se obliga a mantener libros, cuentas y registros detallados y
            actualizados de conformidad con las normas contables reconocidas internacionalmente
            y los términos y condiciones del Contrato, incluidas también las facturas, actas
            de reuniones, correos electrónicos, consultas o correspondencia enviada en relación
            con el Contrato, que identifica de manera precisa y justa los pagos realizados,
            las transacciones realizadas, el trabajo realizado, los temas discutidos, el
            tiempo y los gastos en relación con este Contrato. El <span>PROVEEDOR</span> deberá mantener
            dicha documentación durante (2) años después de la fecha de terminación del Contrato
            o de su resolución, o por un período más largo de acuerdo con la ley aplicable en
            su lugar normal de negocios.
        </p>
        <p>
            Si el <span>PROVEEDOR</span> tiene conocimiento de un posible incumplimiento de los requisitos
            de la Cláusula [1.1], el <span>PROVEEDOR</span> deberá informarlo de inmediato a 
            <span>{companyData.name}</span> por escrito.
        </p>
        <p>
            Si el <span>PROVEEDOR</span> ha informado de un posible incumplimiento a <span>{companyData.name}</span> o 
            si <span>{companyData.name}</span> sospecha razonablemente que puede haberse producido un 
            incumplimiento de los requisitos de la Cláusula 1.1, entonces:
        </p>
        <ul>
            <li>
                (i) <span>{companyData.name}</span> queda facultado de contratar a un representante externo independiente
                y calificado para auditar el posible incumplimiento. La potencial auditoria debe
                realizarse de acuerdo a los principios de buenas prácticas de auditoría, incluido
                el principio de proporcionalidad, contradicción y acceso a la información. La
                elección del representante externo corresponde única y exclusivamente a <span>{companyData.name}</span>.
            </li>
            <li>
                (ii) El <span>PROVEEDOR</span> otorgará a <span>{companyData.name}</span> o su representante externo 
                mediante un aviso en horario normal de trabajo, acceso completo y sin restricciones a cualquier
                local y personas que sean relevantes para el propósito de investigar el posible
                incumplimiento. Asimismo, proporcionará información relevante, así como la asistencia
                necesaria para la realización de dicha investigación. <span>{companyData.name}</span> tomará en consideración
                cualquier solicitud razonable de el <span>PROVEEDOR</span> con respecto al momento en la que se
                llevará a cabo la auditoria y otros aspectos prácticos;
            </li>
            <li>
                (iii) El <span>PROVEEDOR</span>, dentro de un tiempo razonable después de haber recibido el requerimiento
                de información, y dentro del alcance de las leyes de protección de datos personales
                aplicable, proporcionará a cualquier representante designado por <span>{companyData.name}</span> acceso y
                copias de los libros, cuentas y registros, facturas emitidas, actas de las reuniones
                de el <span>PROVEEDOR</span>,  correos electrónicos, consultas o correspondencia enviada en
                relación con el Contrato y cualquier otra información relevante relacionada con la
                sospecha de incumplimiento. Dicho acceso estará sujeto a que el representante externo
                independiente que <span>{companyData.name}</span> designe se comprometa a mantener la confidencialidad de
                cualquier información de carácter confidencial recibida de parte de el <span>PROVEEDOR</span>, a
                excepción de los resultados de su auditoría y toda la información y documentación
                subyacente que respalde o relacionado con tal incumplimiento, lo que deberá ser
                comunicado y entregado a <span>{companyData.name}</span>. <span>{companyData.name}</span> tendrá la facultad 
                de auditar a el <span>PROVEEDOR</span> hasta después de (2) dos años de terminado el Contrato
            </li>
            <li>
                (iv) <span>{companyData.name}</span> puede requerir una suspensión de los Servicios a el <span>PROVEEDOR</span>, 
                durante un período razonable mientras se realicen las investigaciones y auditorías, sin que 
                ello implique la ampliación del plazo para que el <span>PROVEEDOR</span> realice los Servicios o solicite 
                el aumento de la contraprestación a <span>{companyData.name}</span>. Durante el período de investigaciones 
                y auditorías, <span>{companyData.name}</span> puede solicitar se retengan los pagos adeudados que podrían 
                estar relacionados con la posible infracción; y
            </li>
            <li>
                (v) <span>{companyData.name}</span> puede exigir al <span>PROVEEDOR</span> que implemente acciones correctivas 
                razonables identificadas por <span>{companyData.name}</span> o su representante externo, que incluyen, 
                pero no se limitan a, establecer nuevos procedimientos, resolver contratos con terceros y no 
                realizar pagos o remover a personas que hayan actuado en incumplimiento de los requisitos de 
                la Cláusula [1.1.]
            </li>
        </ul>
        <p>1.3 TERMINACIÓN E INDEMNIZACIÓN</p>
        <p>
            En caso de incumplimiento por parte de el <span>PROVEEDOR</span> de las disposiciones de la Cláusula [1.1], 
            o si el <span>PROVEEDOR</span> o cualquiera de sus Afiliados, Representantes o Subcontratistas se convierte 
            en sujeto o propiedad de una o empresa controlada o de titularidad de una empresa sujeta a las 
            regulaciones relacionadas con las sanciones económicas y el control de exportaciones, como se 
            menciona en la Cláusula [1.1] , entonces:
        </p>
        <ul>
            <li>
                (i) si el incumplimiento es de una naturaleza que no se puede remediar o si el incumplimiento 
                se puede remediar pero el <span>PROVEEDOR</span> no ha solucionado el incumplimiento dentro de un período 
                de tiempo razonable estipulado por <span>{companyData.name}</span>, <span>{companyData.name}</span> 
                puede resolver este Contrato con efecto inmediato; y
            </li>
            <li>
                (ii) El <span>PROVEEDOR</span> deberá indemnizar a <span>{companyData.name}</span> contra 
                cualquier pérdida, daños, costos y gastos (incluidos los honorarios legales) incurridos o 
                sufridos por <span>{companyData.name}</span> como consecuencia de dicho incumplimiento.
            </li>
        </ul>
        <p>1.4 REPRESENTANTES Y SUBCONTRATISTAS</p>
        <p>
            Antes de celebrar cualquier subcontrato, el <span>PROVEEDOR</span> llevará a cabo una debida diligencia 
            de integridad para garantizar que los Subcontratistas potenciales estén debidamente calificados 
            para realizar las tareas requeridas, que tengan buena reputación y que de acuerdo a la evaluación, 
            no presentarían ningún riesgo o responsabilidad de cumplimiento relacionado con la corrupción u 
            otro para el <span>PROVEEDOR</span> o <span>{companyData.name}</span>;
        </p>
        <p>
            Todos los subcontratos celebrados por el <span>PROVEEDOR</span> requerirán que los Subcontratistas:
        </p>
        <ul>
            <li>
                (i) se obliguen a cumplir con todos los aspectos sustanciales, compromisos y garantías 
                establecidos en la Cláusula [1.1];
            </li>
            <li>
                (ii) garanticen el derecho de acceso de los terceros representantes de <span>{companyData.name}</span> a 
                los locales, personas, libros, cuentas, registros y otra información de los Subcontratistas de 
                acuerdo con los principios de la Cláusula [1.2.] anterior; y
            </li>
            <li>
                (iii) asegurar que los subcontratistas implementen las medidas correctivas razonables 
                identificadas por <span>{companyData.name}</span> o su representante externo de acuerdo a lo 
                señalado en la cláusula [1.2]
            </li>
        </ul>
        <p>
            El <span>PROVEEDOR</span> revisará la efectividad del sistema y programa de control interno de los 
            Subcontratistas para cumplir con los requisitos establecidos en la Cláusula [1.1.]
        </p>
        <p>
            La subcontratación no eximirá al <span>PROVEEDOR</span> de sus responsabilidades según la Cláusula [1.1.]. 
            El <span>PROVEEDOR</span> será responsable de los actos, incumplimientos y negligencias de sus 
            ubcontratistas como si fueran los actos, incumplimientos y negligencias de el <span>PROVEEDOR</span>.
        </p>
    </section>
);


export default Clause;
