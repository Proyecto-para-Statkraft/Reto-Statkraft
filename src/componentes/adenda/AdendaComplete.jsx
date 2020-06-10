import React from "react";
import AdendaIntroduction from "./AdendaIntroduction";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

// const adendaData = {
//     numberAdenda: 'PRIMERA',
//     nameContract: 'COMPRAVENTA E INSTALACIÓN SKP-450026438',
//     representativeOne: 'Álvaro Antonio PorturasIngunza,',
//     dniOne: '09340737',
//     representativeTwo: 'Miguel Antonio Castro Peña,',
//     dniTwo: '40286317',
//     business: 'IBM DEL PERÚ S.A.C.,',
//     rucBusiness: ' 20100075009,',
//     directionBusiness: 'n Av. Javier Prado Este 6230, LaRiviera de Monterrico, La Molina',
//     representativeBusiness: ' María Eugenia Basauri Parra',
//     dniBusiness: '10613966',
//     partidaElectronica: '11013475',
//     nameX: '“LOCADOR”',


// }


function AdendaComplete({ data }) {

    // console.log('recibe', data)

    return (
        <div>
            <div key={data.id}>
                <AdendaIntroduction key={data.id} numberAdenda={data.numberAdenda} nameContract={data.nameContract}
                    representativeOne={data.representativeOne} dniOne={data.dniOne}
                    representativeTwo={data.representativeTwo} dniTwo={data.dniTwo}
                    business={data.business} rucBusiness={data.rucBusiness} directionBusiness={data.directionBusiness}
                    representativeBusiness={data.representativeBusiness} dniBusiness={data.dniBusiness}
                    partidaElectronica={data.partidaElectronica} nameX={data.nameX} />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>



        </div >
    )
}


export default AdendaComplete;