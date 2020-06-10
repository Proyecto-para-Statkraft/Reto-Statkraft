import React from 'react';


const TwentyThird = ({ 
    annexedVariationOrder, annexedSuspensionActivities, annexedRestartActivities,
    annexedOrderProceed, annexedClosingAct, annexedInventory
}) => (
    <section>
        <h3>VIGÉSIMA TERCERA:        VARIOS</h3>
        <p>
            23.1 En caso que el presente Contrato vaya aparejado de anexos, el presente Contrato 
            prevalece sobre lo establecido en sus Anexos, los que, debidamente suscritos, forman 
            parte integrante del presente Contrato, y se citan a continuación:
        </p>
        <ul>
            <li>Anexo N° 1: Las Especificaciones Técnicas</li>
            <li>Anexo N° 2: Detalle de los Bienes, precios y cantidades</li>
            {(annexedVariationOrder) && <li>Anexo N° 3: DES-IP-PROY-311 Orden De Variación</li>}
            {(annexedSuspensionActivities) && <li>Anexo N° 4: DES-IP-PROY-312 Suspensión de Actividades</li>}
            {(annexedRestartActivities) && <li>Anexo N° 5: DES-IP-PROY-313 Reinicio de Actividades</li>}
            {(annexedOrderProceed) && <li>Anexo N° 6: Formato de Orden de Proceder</li>}
            {(annexedClosingAct) && <li>Anexo N° 7: Acta de Cierre</li>}
            {(annexedInventory) && <li>ANEXO N° 8: Inventario de equipos entregados a STATKRAFT</li>}
        </ul>
        <p>
            23.2 Las Partes dejan constancia que en caso la compraventa haya comenzado a ejecutarse 
            antes de la firma del presente Contrato, se entenderá que la ejecución de las referidas 
            prestaciones se rige e interpreta de conformidad con el presente Contrato; en cuyo caso, 
            las Partes ratifican y convalidan las prestaciones ejecutadas por ellos con anterioridad 
            a la firma del presente Contrato
        </p>
        <p>
            23.3 Las Partes convienen que la nulidad o la anulabilidad de cualquiera de las cláusulas 
            del presente Contrato no afectará la validez de las demás estipulaciones contenidas en él. 
            Si cualquiera de las cláusulas de este Contrato, por cualquier motivo, fuese invalidada o 
            declarada inaplicable en arbitraje o por otra autoridad competente, las demás estipulaciones 
            del Contrato continuarán siendo válidas y aplicables, siendo que la cláusula nula será 
            reemplazada por las Partes por otra que conduzca a las Partes a los resultados comerciales 
            y jurídicos buscados en este Contrato.
        </p>
        <p>
            23.4 Los títulos de las cláusulas y numerales de este Contrato son ilustrativos y 
            referenciales y no tendrán ningún efecto en la interpretación del Contrato.
        </p>
        <p>
            23.5 Cualquier modificación o enmienda al Contrato se deberá efectuar mediante una adenda 
            suscrita por los representantes debidamente facultados de ambas Partes.
        </p>
    </section>
);


export default TwentyThird;
