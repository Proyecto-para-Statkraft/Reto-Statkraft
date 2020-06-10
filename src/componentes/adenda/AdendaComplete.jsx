import React, { useState, useEffect } from "react";
import firebase from '../firebase.js';
import AdendaIntroduction from "./AdendaIntroduction"
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

    const [numberContract, setNumberContratc] = useState('');
    const [numberAdenda, setNumberAdenda] = useState('');


    useEffect(() => {
        const adenda = () => {
            setNumberContratc(data.codeContract)
            setNumberAdenda(data.numberAdenda)
        }
        adenda()
    }, [data.codeContract, data.numberAdenda]);


    const onCreateAdenda = () => {
        const db = firebase.firestore();
        db.collection("infoAdenda").add({
            numeroContrato: numberContract,
            numeroAdenda: numberAdenda,

        })
            .then(() => {
                setNumberAdenda('')
                setNumberContratc('')
            });
    };


    // console.log('recibe', data)

    return (
        <div>
            <div key={data.id}>
                <AdendaIntroduction key={data.id} numberAdenda={data.numberAdenda} typeContract={data.typeContract} codeContract={data.codeContract}
                    representativeOne={data.representativeOne} dniOne={data.dniOne}
                    representativeTwo={data.representativeTwo} dniTwo={data.dniTwo}
                    business={data.business} rucBusiness={data.rucBusiness} directionBusiness={data.directionBusiness}
                    representativeBusiness={data.representativeBusiness} dniBusiness={data.dniBusiness}
                    partidaElectronica={data.partidaElectronica} nameX={data.nameX} />
                <FirstSection dayContract={data.dayContract} monthContract={data.monthContract}
                    yearContract={data.yearContract} detailObject={data.detailObject}
                    dayAdenda={data.dayAdenda} monthAdenda={data.monthAdenda}
                    yearAdenda={data.yearAdenda} detailObject2={data.detailObject2}
                />
                <SecondSection />
                <ThirdSection />
            </div>
            <button className="btn btn-primary btn-md btn-block" onClick={onCreateAdenda} >Finalizar</button>
        </div>

    )
}


export default AdendaComplete;






