import React from 'react';
import Clause2i4 from './OptionalClauses/Clause2-4';


const sell = {
    endOfSell: '',
    place: ''
}


const Second = ({ companyData, sell, scopeVariation }) => (
    <section>
        <h3>SEGUNDA:         OBJETO</h3>
        <p>
            2.1 Por el Contrato, el <span>PROVEEDOR</span> vende a <span>{companyData.name}</span> el
                conjunto de bienes que se mencionan en el Anexo N° 2(en adelante, el conjunto, los
                “Bienes”), libres de cargas y gravámenes, los cuales serán destinados a {sell.endOfSell},
                en {sell.place}. Por su parte, <span>{companyData.name}</span> se obliga a pagar a el
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
            2.3 El <span>PROVEEDOR</span> declara expresamente que cuenta con la capacidad técnica, financiera
            y legal, así como con las autorizaciones, licencias y permisos requeridos para ejecutar el presente
            Contrato de manera autónoma, eficiente y oportuna, siendo esta declaración esencial a efectos
            de que <span>{companyData.name}</span> haya decidido celebrar este Contrato.
        </p>
        {(scopeVariation) && <Clause2i4 />}
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


export default Second;
