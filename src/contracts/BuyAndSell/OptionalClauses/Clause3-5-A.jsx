import React from 'react';


const Clause = ({ companyData }) => (
    <p>
        3.5 Las partes acuerdan que en caso sea necesaria la adquisición de bienes adicionales
        estos se facturarán de acuerdo a lo señalado en el Anexo N° 2, para ello <span>{companyData.name}</span>
        deberá enviar al <span>LOCADOR</span> una Orden de Variación de acuerdo al formato y
        condiciones señaladas en el Anexo N° 3.
    </p>
);


export default Clause;
