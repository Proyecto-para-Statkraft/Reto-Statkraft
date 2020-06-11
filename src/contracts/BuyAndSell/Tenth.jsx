import React from "react";

const Tenth = ({ data, Tenth }) => {
    const { companyData } = data;
    const { deadlineDay } = Tenth;

    if (Tenth !== "") {
        return (
            <div>
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
            el formato que obra en el Anexo {deadlineDay} en el que consta las
                        características de los activos entregados materia del contrato.
          </p>
                </section>
            </div>
        );
    }
    return (
        <div>
            <p>Seccion Liquidación de Contrato </p>
        </div>
    );
};

export default Tenth;
