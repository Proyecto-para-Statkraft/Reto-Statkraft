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
