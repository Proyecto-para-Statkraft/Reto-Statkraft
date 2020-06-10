import React from 'react';


const Eleventh = ({ companyData, administratorCompany, administratorProvider }) => (
    <section>
        <h3>DÉCIMA PRIMERA:             REPRESENTANTES</h3>
        <p>
            11.1 Las partes supervisarán el desarrollo del Contrato por intermedio de sus
            Administradores de Contrato, quedando designado para ello:
        </p>
        <ul>
            <li>De parte de {companyData.name}: {administratorCompany}</li>
            <li>De parte de LOCADOR: {administratorProvider}</li>
        </ul>
        <p>
            Asimismo, las partes podrá modificar esta designación durante el desarrollo del
            Contrato sin que ello constituya motivo de reclamación por parte del LOCADOR.
            Cualquier cambio constará en comunicación suscrita por un representante de las
            partes dirigida a la otra parte. El Administrador del Contrato por parte de
            {companyData.name} será el encargado de exigir el fiel cumplimiento del Contrato y la
            buena ejecución del mismo de acuerdo con las especificaciones y demás documentos
            de este Contrato. Los administradores del contrato de ambas partes podrán suscribir
            los documentos que se generen de acuerdo a los modelos que obran en los Anexos N° 3,
            N° 4, N° 5, y N° 6 en las secciones que les corresponde.
        </p>
        <p>
            11.2 El conducto regular para las relaciones entre <span>{companyData.name}</span> y el 
            <span>PROVEEDOR</span>, será a través del mencionado Coordinador del Contrato por 
            parte de <span>{companyData.name}</span> y del representante que designe el <span>PROVEEDOR</span>,
            en concordancia con lo especificado en los Documentos del Contrato. Dentro de los cinco (5) 
            días siguientes a la firma del Contrato, el <span>PROVEEDOR</span> comunicará por escrito 
            al Coordinador del Contrato el nombre del representante designado.
        </p>
    </section>
);


export default Eleventh;
