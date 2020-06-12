import React from 'react';



const Second = ({ data, Second }) => {
    const { companyData } = data;
    const { sell } = Second;

    if (Second !== "") {
        return (
            <section>
                <h3>SEGUNDA: OBJETO</h3>
                <p>
                    2.1 Por el Contrato, el <span>PROVEEDOR</span> vende a <span>{companyData.name}</span> el
                        conjunto de bienes que se mencionan en el Anexo N° 2(en adelante, el conjunto, los
                        “Bienes”), libres de cargas y gravámenes, los cuales serán destinados a {sell}.
                        Por su parte, <span>{companyData.name}</span> se obliga a pagar a el
                        <span>PROVEEDOR</span> el precio total pactado en la Cláusula tercera del Contrato.
                        La decisión de compra de <span>{companyData.name}</span> se ha basado en la transferencia de
                    la totalidad de los Bienes en su conjunto, y no de los Bienes individualmente
                        considerados, razón por la cual ha sido causa determinante para que <span>{companyData.name}</span>
                    suscriba este Contrato, la adquisición de todos los Bienes que se detallan en el Anexo N° 2.
                </p>
                <p>
                    2.2 El detalle y especificaciones técnicas de los Bienes constan en las Especificaciones
                    Técnicas, que se encuentran en el Anexo N° 1.
                </p>
                <p>
                    2.3 Las partes podrán acordar la variación del alcance del objeto del contrato hasta en un
                    15% del monto señalado en la Cláusula 3.1 con un tope máximo de USD 30,000.00 (Treinta mil
                    y 00/100 Dólares de Estados Unidos de América) mediante la suscripción de una Orden de Variación,
                    de acuerdo al formato que obra en el Anexo N° 3. En caso la variación sea por un monto mayor,
                    las partes suscribirán la adenda correspondiente.
                </p>
                <p>
                    El <span>PROVEEDOR</span> declara haber estudiado cuidadosamente y conocer todo lo concerniente
                    a la naturaleza del Contrato y a los lugares en donde se efectuará la entrega de los Bienes; las
                    condiciones y limitaciones del transporte hasta los lugares de ejecución, manejo y almacenamiento
                    de materiales, y en general todos los demás factores que pudieran eventualmente afectar la venta
                    de los Bienes, los plazos de ejecución y el precio pactado. Del mismo modo, el <span>PROVEEDOR</span>
                    ha evaluado y conoce plenamente las necesidades e intereses de <span>{companyData.name}</span> con respecto
                    a los Bienes. En consecuencia, el <span>PROVEEDOR</span> declara que ha tenido en cuenta todos estos
                    elementos al momento de tomar la decisión de celebrar este Contrato.
                </p>
            </section>
        );
    }
    return (
        <div>
            <p>Seccion Objeto</p>
        </div>
    )
}


export default Second;
