import React from 'react';



const Fifth = ({ data, Fifth }) => {

    const { companyData } = data;
    const { deadlineDay } = Fifth;

    if (Fifth !== "") {
        return (
            <section>
                <h3>QUINTA:     PLAZO DE ENTREGA DE LOS BIENES</h3>
                <p>
                    El Contrato empezará a regir a la fecha de su suscripción. Sin perjuicio de ello,
            el plazo para entregarlos Bienes a satisfacción de <span>{companyData.name}</span>, será
            de {deadlineDay} calendario, contados desde la suscripción del Contrato.
        </p>
            </section>
        )
    }
    return (
        <div>
            <p>Seccion Plazo de Entrega</p>
        </div>
    )
};


export default Fifth;
