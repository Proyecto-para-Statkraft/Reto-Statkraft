import React from 'react';

const ResumenContracts = ({ data }) => {

    const { id, tipo, descripcion, monto, plazo, comprador, usuario } = data;

    console.log('info firebase', data)

    return (
        <tr className="bg-white font border border-warning">
            <td>{id}</td>
            <td>{tipo}</td>
            <td>{descripcion}</td>
            <td>{monto}</td>
            <td>{plazo}</td>
            <td>{comprador}</td>
            <td>{usuario}</td>
        </tr>
    );
}

export default ResumenContracts;
