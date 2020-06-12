import React from 'react';

const Quarter = ({ data, Quarter }) => {

    const { companyData } = data;
    const { type } = Quarter;

    if (Quarter !== "") {
        return (
            <section>
                <h3>CUARTA:         FORMA Y CONDICIONES DE PAGO</h3>
                <p>
                    4.1 El monto de la contraprestación pactada en la cláusula tercera será pagado por
            <span>{companyData.name}</span> conforme con el detalle establecido en el Anexo N° 2.
        </p>
                <p>
                    El pago del precio total pactado en la cláusula precedente se efectuará conforme a
                    lo señalado en el numeral 4.2 de esta cláusula, previa presentación de la factura
                    correspondiente. El pago se efectuará a los treinta (30) días calendario contados
                    desde que(i) factura haya sido correctamente emitida y recibida en el domicilio de
            <span>{companyData.name}</span> y (ii) el Coordinador del Contrato que designe
                                                STATKRAFT (el Coordinador del Contrato”) confirme por escrito que se ha cumplido
            con la entrega de los Bienes a satisfacción de <span>{companyData.name}</span>
                    en el procedimiento de liquidación a que se refiere la cláusula décima.
        </p>
                <p>
                    4.2 Las Partes acuerdan que <span>{companyData.name}</span> pagará el precio total del
            Contrato al <span>PROVEEDOR</span>, en {type}, mediante depósito o transferencia
            bancaria a la cuenta bancaria que comunique por escrito oportunamente el <span>PROVEEDOR</span>
                    o mediante la entrega de un cheque  emitido a nombre del <span>PROVEEDOR</span>, a
            elección de <span>{companyData.name}</span>.
        </p>
                {
                    (type === 'Dólares de los Estados Unidos de América') &&
                    <p>
                        En el caso Bienes cotizados en Dólares de los Estados Unidos de América, al momento de
                        la facturación se considerará, a elección de STATKRAFT, el pago en dicha moneda en
                        moneda nacional, Nuevo Sol, al tipo de cambio compra que tenga vigente la SBS para
                        esa fecha.
                    </p>
                }
                <p>
                    Tratándose de pagos con títulos valores, las Partes acuerdan que la sola entrega del
                    título valor producirá efectos cancelatorios del monto representado en el título valor,
                    constituyendo este acuerdo el pacto en contrario a que se refiere el artículo 1233° del
                    Código Civil.
        </p>
                <p>
                    4.3 El <span>PROVEEDOR</span> es responsable directo de los tributos, impuestos y
                    contribuciones derivadas del pago que perciba por la venta de los Bienes y deberá
                    abonarlos oportunamente en la forma establecida por las normas legales en vigencia.
            Por lo tanto, exonera a <span>{companyData.name}</span> de toda responsabilidad por estos
                                                conceptos y se compromete a salir en su defensa en caso que exista algún reclamo por
                                                estas obligaciones.
        </p>
                <p>
                    4.4 <span>{companyData.name}</span> efectuará las deducciones contractuales o retenciones
            legales que resulten aplicables al <span>PROVEEDOR</span>. Sin perjuicio del hecho de
            la calidad de contratista independiente del <span>PROVEEDOR</span>, <span>{companyData.name}</span>
                    está facultado para exigir al mismo, antes de efectuar el pago de sus facturas, los
                    documentos que acrediten el cumplimiento oportuno de aquellas obligaciones cuyo
            incumplimiento pudiera afectar a <span>{companyData.name}</span>, sea directa o
                                                indirectamente.
        </p>
                <p>
                    4.5 <span>{companyData.name}</span> se reserva el derecho de retener, descontar o compensar
            cualquier monto que le adeude el <span>PROVEEDOR</span> por cualquier concepto contra
            cualquier monto que adeude <span>{companyData.name}</span> al <span>PROVEEDOR</span> por
                                                cualquier concepto, de conformidad con los artículos 1288° y siguientes del Código Civil.
        </p>
            </section>
        )
    }
    return (
        <div>
            <p>Seccion Forma de Pago</p>
        </div>
    )
};


export default Quarter;
