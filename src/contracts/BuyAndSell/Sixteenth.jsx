import React from 'react';
import ClauseA from './OptionalClauses/Clause16-1-A';
import ClauseB from './OptionalClauses/Clause16-1-B';



const Sixteenth = ({ data, Sixteenth, }) => {

    const { companyData } = data;
    const { optionClausesSixteenth, name, ruc, servicio } = Sixteenth;

    const subcontractorCompany = {
        name,
        ruc,
        servicio
    }

    if (Sixteenth !== "") {
        return (
            <div>
                <section>
                    <h3>DECIMO SEXTA: SUBCONTRATACION Y CESION</h3>

                    {(optionClausesSixteenth) ? <ClauseB companyData={companyData} subcontractorCompany={subcontractorCompany} /> : <ClauseA companyData={companyData} />}

                    <p>
                        16.2 Toda cesión o subcontratación del Contrato que haya sido efectuada conforme al numeral
            anterior, no exime al <span>PROVEEDOR</span> de sus responsabilidades contractuales, constituyéndose
            frente a <span>{companyData.name}</span> en obligado solidario.
        </p>
                    <p>
                        16.3 El <span>PROVEEDOR</span> acepta de manera anticipada que <span>{companyData.name}</span> podrá ceder su
                        posición contractual o sus derechos a cualquier tercero o a empresas vinculadas o afiliadas, para lo
                        cual bastará una comunicación escrita con una anticipación razonable.
        </p>
                </section>

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
            <span>PROVEEDOR</span> deberá de forma previa notificar esta circunstancia a <span>{companyData.name}</span> inmediatamente
                                    para que ésta pueda tomar las medidas necesarias para cautelar su derecho a la privacidad. El
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
            pagos o liquidación judicial o extrajudicial de <span>{companyData.name}</span>.
        </p>
                    <p>
                        18.2.2 El incumplimiento imputable a <span>{companyData.name}</span> en el pago de los montos adeudados
            al <span>PROVEEDOR</span>, como contraprestación por la transferencia de los Bienes.
        </p>
                    <p>
                        18.3 Las Partes podrán resolver el presente Contrato de mutuo acuerdo que conste por escrito.
        </p>
                    <p>
                        18.4 Asimismo, <span>{companyData.name}</span> podrá resolver unilateralmente el presente Contrato sin
            expresión de causa, previa comunicación por escrito al <span>PROVEEDOR</span> con una anticipación
                                                no mayor de quince (15) días calendario, no habiendo lugar a responsabilidad ni indemnización
                                                alguna.
        </p>
                    <p>
                        18.5 En el supuesto de caso fortuito o fuerza mayor, cualquiera de las Partes podrá resolver el
                        Contrato, de conformidad con lo señalado en el numeral 15.4 de la cláusula décimo quinta.
        </p>
                </section>

                <section>
                    <h3>DÉCIMA NOVENA:         LEY APLICABLE Y SOLUCION DE CONTROVERSIAS</h3>
                    <p>
                        19.1 El presente Contrato se rige por las leyes de la República del Perú.
        </p>
                    <p>
                        19.2 Todas las dudas, cuestiones, discrepancias o reclamaciones que puedan
                        surgir en la interpretación, ejecución o cumplimiento de este Contrato, o
                        relacionada con él, directa o indirectamente, se resolverán en primer lugar
                        de forma amistosa en la medida de lo posible, mediante negociación directa
                        de la Partes, dentro del plazo de quince (15) días a partir de la fecha en
                        que cualquiera de las Partes informe a la otra sobre la existencia de una
                        controversia o desavenencia.
        </p>
                    <p>
                        En caso que dichas controversias o desavenencias no se solucionen dentro del
                        plazo señalado en el párrafo anterior, entonces dichas controversias o
                        desavenencias serán resueltas a través de un arbitraje de derecho, a realizarse
                        conforme a Reglamentos Procesales del Centro de Arbitraje de la Cámara de Comercio
                        de Lima, a cuyas normas y administración las partes se someten de forma incondicional,
                        declarando conocerlas y aceptarlas en su integridad.
        </p>
                    <p>
                        19.3 El Tribunal Arbitral estará integrado por tres (3) miembros. Cada Parte
                        designará a un (1) árbitro y el tercero será designado por acuerdo de los dos
                        (2) árbitros designados por las Partes, quien a su vez se desempeñará como
                        Presidente del Tribunal Arbitral. Si los dos (2) árbitros no llegasen a un
                        acuerdo sobre el nombramiento del tercer árbitro dentro de los diez (10) días
                        naturales siguientes a la fecha del nombramiento del segundo árbitro, el tercer
                        árbitro será designado por la Cámara de Comercio de Lima, a pedido de cualquiera
                        de las Partes. Si una de las Partes no designase el árbitro que le corresponde
                        dentro del plazo de diez (10) días naturales contados a partir del pedido de
                        nombramiento, se considerará que ha renunciado a su derecho y el árbitro será
                        designado por el Centro de Arbitraje de la Cámara de Comercio de Lima.
        </p>
                    <p>
                        19.4 Las Partes acuerdan que el laudo que emita el Tribunal Arbitral será definitivo e
                        inapelable. En consecuencia, las Partes renuncian a los recursos de apelación, casación
                        o cualquier otro recurso impugnatorio contra el laudo arbitral declarando que éste será
                        obligatorio, definitivo y de ejecución inmediata e inapelable.
        </p>
                    <p>
                        19.5 Sin perjuicio de lo anterior, en caso sea necesaria la participación de la
                        jurisdicción ordinaria con motivo de la ejecución del laudo arbitral que se expida
                        y/o con motivo de brindar el apoyo que la ley arbitral vigente establezca, las
                        Partes acuerdan otorgar competencia a los jueces y juzgados de Lima Cercado.
        </p>
                </section>
            </div>
        )
    }
    return (
        <div>
            <p>Seccion subcontratación</p>
        </div>
    )
}


export default Sixteenth;
