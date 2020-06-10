import React from 'react';


const Clause = ({ companyData, provider, numberAnexo }) => (
    <section>
        <h4>CLASULA ESTANDAR</h4>
        <p>1.1 REQUISITOS DE LA ETICA EN LOS NEGOCIOS Y ANTICORRUPCION</p>
        <p>
            [El Proveedor], se obliga a realizar todas las prestaciones relacionadas a 
            la ejecución de los Servicios de conformidad con las leyes, normas y reglamentos 
            estatales, nacionales e internacionales aplicables y otras normas aplicables y 
            relacionadas a estándares de conducta ético y responsables, incluyendo los 
            relacionados a los derechos humanos, la protección del medio ambiente, la 
            corrupción, el fraude, el lavado de dinero, los regímenes de sanciones aplicables 
            y otros delitos económicos, como:
        </p>
        <ul>
            <li>
                (i) cualquier ley y regulación anticorrupción internacional, regional, nacional 
                o local aplicable, que incluye, entre otros, el Código Penal de Noruega y la Ley 
                de Soborno del Reino Unido;
            </li>
            <li>
                (ii) cualesquiera leyes y reglamentos internacionales, regionales, nacionales o 
                locales aplicables sobre recursos naturales y ambientales, y estándares internacionales 
                tales como los Estándares de Desempeño de IFC sobre Sostenibilidad Ambiental y Social;
            </li>
            <li>
                (iii) cualquier ley y normativa de salud y seguridad internacional, regional, 
                nacional o local aplicable;
            </li>
            <li>
                (iv) cualesquiera leyes y reglamentos de derechos humanos internacionales, regionales, 
                nacionales o locales aplicables, incluidos, entre otros, los mencionados en los 
                Principios Rectores de las Naciones Unidas sobre Empresas y Derechos Humanos;
            </li>
            <li>
                (v) cualquier regulación aplicable relacionada con sanciones económicas y control 
                de exportaciones, y en particular no realizar negocios con entidades de propiedad 
                o controladas por personas que sean objeto de sanciones administradas o aplicadas 
                por la Oficina de Control de Activos Extranjeros del Departamento del Tesoro de 
                los EE. UU. El Consejo de Seguridad de las Naciones Unidas, la Unión Europea, el 
                Tesoro de Su Majestad o el Ministerio de Relaciones Exteriores de Noruega, o está 
                ubicado, organizado o residente en un país o territorio que es, o cuyo gobierno es, 
                objeto de sanciones por sanciones relevantes autoridad;
            </li>
            <li>
                (vi) El Código de conducta de [El Proveedor] de {companyData.name} adjunto como Anexo 
                {numberAnexo} al Contrato.
            </li>
        </ul>
        <p>
            [El Proveedor] se asegurará que sus afiliados, empleados, agentes autorizados u otros 
            representantes que realicen los Servicios en nombre de [El Proveedor] cumplan con todos 
            los requisitos mencionados anteriormente.
        </p>
        <p>
            1.2 [El Proveedor] notificará por escrito y de manera inmediata a {companyData.name} si existen 
            razones para creer que [el Proveedor] o cualquiera de sus representantes o subcontratistas 
            han: (a) sido objeto de una investigación o proceso relacionado con una posible circunstancia 
            que representaría una infracción de la Cláusula 1.1 anterior; o (b) ha sido catalogado por 
            cualquier departamento o agencia gubernamental como excluido, suspendido, propuesto para 
            suspensión o exclusión, o no elegible para participar en programas o contratos de compras 
            gubernamentales. Las comunicaciones para efectos de la presente cláusula podrán realizarse 
            mediante correo electrónico.
        </p>
        <p>
            1.3 Si {companyData.name} sospecha razonablemente que el Proveedor ha violado alguno de los requisitos 
            establecidos en la Cláusula 1.1, {companyData.name} tendrá derecho a solicitar los documentos e información 
            correspondiente a la supuesta violación del [Proveedor].
        </p>
        <p>
            1.4 Si {companyData} sospecha razonablemente que el Proveedor ha violado alguno de los requisitos 
            establecidos en la Cláusula 1.1, {companyData.name} tendrá derecho a, previa notificación por escrito, 
            suspender el cumplimiento del Contrato. Si la sospecha no se soluciona dentro de los 30 días 
            posteriores a la recepción de la notificación por escrito de parte de {companyData.name}, {companyData.name} 
            también tendrá derecho a exigir al Proveedor que implemente acciones correctivas razonables 
            sugeridas por {companyData.name}, que incluyen, entre otras, establecer nuevos procedimientos, resolver 
            contratos, abtenerse de realizar pagos o remover a personas que hayan actuado en incumplimiento 
            de lo establecido en la Cláusula 1.1.
        </p>
        <p>
            1.5 En caso de incumplimiento por parte [del Proveedor] de las disposiciones de la Cláusula 1.1, 
            o si [el Proveedor] o cualquiera de sus afiliados, representantes o subcontratistas es adquirida, 
            de propiedad de o controlada por una empresa que es adquirida en una jurisdicción sancionada o 
            empresa con sanciones económicas y control de exportaciones, como se menciona en la Cláusula 1.1, 
            en cuyo caso:
        </p>
        <ul>
            <li> 
                i. Si el incumplimiento (i) es de una naturaleza que no se puede remediar o (ii) si el 
                incumplimiento se puede remediar pero [el Proveedor] no ha solucionado el incumplimiento 
                dentro de un período de tiempo razonable estipulado por {companyData.name}, {companyData.name} 
                puede resolver este Contrato con efecto inmediato; y 
            </li>
            <li>
                ii. [El Proveedor] deberá indemnizar a {companyData.name} contra cualquier pérdida, responsabilidad, 
                daño, costo y gasto (incluidos los honorarios legales) incurridos o sufridos por {companyData.name} 
                como consecuencia de dicho incumplimiento.
            </li>
        </ul>
        <p>
            1.6 Antes de celebrar cualquier subcontratación, [el Proveedor] llevará a cabo una debida 
            diligencia para garantizar que los subcontratistas potenciales estén debidamente calificados 
            para realizar las tareas para las que estarían comprometidos, que tengan buena reputación y 
            que no presentaría ningún riesgo o responsabilidad relacionado con la corrupción u otro, para 
            [el Proveedor] o {companyData.name};
        </p>
        <p>
            Todos los subcontratos celebrados por [el Proveedor] requerirán que los subcontratistas:
        </p>
        <ul>
            <li>i. Se obliguen a cumplir con lo señalado en la Cláusula 1.1;</li>
            <li>
                ii. Proporcionen a el Proveedor y {companyData.name} documentación e información de los Subcontratistas 
                de acuerdo con los principios de la Cláusula 1.3 antes mencionada; y
            </li>
            <li>
                iii. Se obliguen a asegurar los compromisos materiales con los subcontratista, a efectos de 
                implementar las acciones correctivas razonables que {companyData.name} o sus representantes sugieran 
                de acuerdo con los principios de la Cláusula 1.4 anterior.
            </li>
        </ul>
        <p>
            La subcontratación no eximirá al Proveedor de sus responsabilidades según la Cláusula 1.1. 
            [El Proveedor] será responsable de los actos, incumplimientos y negligencias de sus 
            Subcontratistas como si fuesen actos, incumplimientos y negligencias [del Proveedor].
        </p>
    </section>
);


export default Clause;
