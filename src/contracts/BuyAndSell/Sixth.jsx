import React from 'react';


const Sixth = ({ companyData, place }) => (
    <section>
        <h3>SEXTA:         GASTOS, TRANSPORTE Y ENTREGA</h3>
        <p>
            El <span>PROVEEDOR</span> se obliga a pagar todos los gastos que involucre el
            traslado de los Bienes hasta su efectiva entrega a <span>{companyData.name}</span>.
        </p>
        <p>
            El embalaje estará a cargo del <span>PROVEEDOR</span> y será el adecuado
            para proteger a los equipos de cualquier golpe, impacto o de las inclemencias
            del clima durante su transporte, manipuleo y entrega a <span>{companyData.name}</span>.
            El lugar de entrega de los equipos es {place}.
        </p>
    </section>
);


export default Sixth;
