import React from 'react';


const ResumenContracts = ({ data, index }) => {

    const { tipo, descripcion, monto, plazo, usuyser } = data;


    return (
        <tr className="border border-info" >
            <td>{index + 1}</td>
            <td>{tipo}</td>
            <td>{descripcion}</td>
            <td>{monto}</td>
            <td>{plazo}</td>
            <td>{usuyser[0]}</td>
            <td>{usuyser[1]}</td>
        </tr>
    );
}

export default ResumenContracts;
