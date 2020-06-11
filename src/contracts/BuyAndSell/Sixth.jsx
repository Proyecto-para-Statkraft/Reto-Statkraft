import React from "react";

const Sixth = ({ data, Sixth }) => {
    const { companyData } = data;
    const { deadlineDay } = Sixth;

    if (Sixth !== "") {
        return (
            <div>
                <section>
                    <h3>SEXTA: GASTOS, TRANSPORTE Y ENTREGA</h3>
                    <p>
                        El <span>PROVEEDOR</span> se obliga a pagar todos los gastos que
            involucre el traslado de los Bienes hasta su efectiva entrega a{" "}
                        <span>{companyData.name}</span>.
          </p>
                    <p>
                        El embalaje estará a cargo del <span>PROVEEDOR</span> y será el
                        adecuado para proteger a los equipos de cualquier golpe, impacto o
                        de las inclemencias del clima durante su transporte, manipuleo y
            entrega a <span>{companyData.name}</span>. El lugar de entrega de
            los equipos es {deadlineDay}.
          </p>
                </section>
                <section>
                    <h3>SÉTIMA: TRANSFERENCIA DE PROPIEDAD Y TRANSFERENCIA DEL RIESGO</h3>
                    <p>
                        Las Partes acuerdan que la transferencia de propiedad y la
            transferencia del riesgo de los Bienes a{" "}
                        <span>{companyData.name}</span> se producirán en el momento en que
            se verifique su entrega física a satisfacción de{" "}
                        <span>{companyData.name}</span> de conformidad con lo pactado en las
                        cláusulas quinta y sexta y demás disposiciones aplicables de este
                        Contrato.
          </p>
                </section>
                <section>
                    section>
          <h3>OCTAVA: PERSONAL DE SUPERVISIÓN</h3>
                    <p>
                        En su calidad de contraparte independiente el <span>PROVEEDOR</span>
                        proporcionará la supervisión con la capacidad técnica y
                        administrativa que sea indispensable para la correcta y eficiente
                        entrega de los Bienes a transferir, designando el personal idóneo
                        que sea necesario para la dirección técnica y ejecución de las
                        prestaciones y asumiendo la totalidad de los costos y riesgos por
                        contratación laboral y ejecución del Contrato.
          </p>
                </section>
                <section>
                    <h3>NOVENA: INSPECCION Y PRUEBAS</h3>
                    <p>
                        <span>{companyData.name}</span> o sus representantes tendrán derecho
                        a examinar e inspeccionar los Bienes en cualquier etapa de la
                        ejecución del Contrato. Las inspecciones, exámenes y pruebas que se
                        efectúen no exoneran al
            <span>PROVEEDOR</span> de sus obligaciones adquiridas en el
                                                            Contrato.
          </p>
                    <p>
                        Las Pruebas correspondientes a los Bienes son las que se señalan en
                        las Especificaciones Técnicas que obran como Anexo N° 1.
          </p>
                    <p>
                        El <span>PROVEEDOR</span> será el único responsable de la venta y
                        entrega de los Bienes y del Control de Calidad realizado,
            independientemente de los controles y pruebas que efectúe o exija{" "}
                        <span>{companyData.name}</span>, los que no alteran para nada ni
                        eximen total o parcialmente esta responsabilidad que exclusivamente
            incumbe al <span>PROVEEDOR</span>.
          </p>
                </section>

                <section>
                    <h3>DÉCIMA: LIQUIDACION DEL CONTRATO</h3>
                    <p>
                        10.1 La diligencia de liquidación es un procedimiento llevado a cabo
                        entre funcionarios debidamente autorizados de las Partes que
            determina las sumas de dinero que a <span>{companyData.name}</span>{" "}
                        le corresponda pagar y la ejecución de la prestación a cargo del{" "}
                        <span>PROVEEDOR</span>. En base al procedimiento de liquidación se
                        determinarán las obligaciones a cargo de las Partes, teniendo en
                        cuenta el valor de las penalidades y/o sanciones aplicadas de
                        conformidad con el Contrato. Como consecuencia del procedimiento de
                        liquidación, las Partes suscribirán un acta de liquidación.
          </p>
                    <p>
                        10.2 Para proceder con la liquidación del Contrato deberá cumplirse
                        con los siguientes requisitos:
          </p>
                    <p>
                        10.2.1 Que el <span>PROVEEDOR</span> haya cumplido con todas las
            obligaciones objeto del presente Contrato y entregado a{" "}
                        <span>{companyData.name}</span> todos los bienes y materiales que
                        conforman los Bienes, incluyendo las características y cantidades
                        especificadas, que se encuentren libres de daños físicos, libres de
            cargas y gravámenes, y a satisfacción de{" "}
                        <span>{companyData.name}</span>.
          </p>
                    <p>
                        10.2.2 Que el <span>PROVEEDOR</span> haya entregado a satisfacción
            de <span>{companyData.name}</span>
                        toda la documentación exigida en los Documentos del Contrato. Sin
            perjuicio de esta documentación, el <span>PROVEEDOR</span> deberá
                                    entregar los planos y manuales de operación, configuración y
                                    mantenimiento de todos los Bienes.
          </p>
                    <p>
                        10.2.3 Haber efectuado las pruebas que se mencionan en la cláusula
            novena a plena satisfacción de <span>{companyData.name}</span>.
          </p>
                    <p>
                        10.2.4 Que no existan obligaciones pendientes a cargo del{" "}
                        <span>PROVEEDOR</span>, emanadas del Contrato.
          </p>
                    <p>
                        10.3 Una vez suscrita el acta, se autorizará el pago de las sumas
            que puedan resultar a favor del <span>PROVEEDOR</span>. El acta de
                                    la Liquidación del Contrato se suscribirá entre el Coordinador del
            Contrato de <span>{companyData.name}</span> y el representante de el
            <span>PROVEEDOR</span> designado según la cláusula décima primera.
          </p>
                    <p>
                        Asimismo, a la finalización del servicio el PROVEEDOR debe presentar
            el formato que obra en el Anexo N° en el que consta las
                        características de los activos entregados materia del contrato.
          </p>
                </section>
            </div>
        );
    }
    return (
        <div>
            <p>Seccion 6, 7, 8 , 9 </p>

        </div>
    );
};

export default Sixth;
