import React from 'react';


const Ninth = ({companyData}) => (
    <section>
        <h3>NOVENA:     INSPECCION Y PRUEBAS</h3>
        <p>
            <span>{companyData.name}</span> o sus representantes tendrán derecho a examinar
            e inspeccionar los Bienes en cualquier etapa de la ejecución del Contrato.
            Las inspecciones, exámenes y pruebas que se efectúen no exoneran al
            <span>PROVEEDOR</span> de sus obligaciones adquiridas en el Contrato.
        </p>
        <p>
            Las Pruebas correspondientes a los Bienes son las que se señalan en las
            Especificaciones Técnicas que obran como Anexo N° 1.
        </p>
        <p>
            El <span>PROVEEDOR</span> será el único responsable de la venta y entrega de 
            los Bienes y del Control de Calidad realizado, independientemente de los 
            controles y pruebas que efectúe o exija <span>{companyData.name}</span>, los que no 
            alteran para nada ni eximen total o parcialmente esta responsabilidad que 
            exclusivamente incumbe al <span>PROVEEDOR</span>.
        </p>
    </section>
);


export default Ninth;
