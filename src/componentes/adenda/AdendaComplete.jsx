import React, { useState, useEffect } from "react";
import AdendaIntroduction from "./AdendaIntroduction";
import firebase from '../firebase.js';

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


function AdendaComplete() {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("adendaData")
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
            console.log(data)
        };
        fetchData();
    }, []);

    console.log(spells)

    return (
        <div>
        {spells.map((spell) => 
            <AdendaIntroduction key={spell.id} numberAdenda={spell.numberAdenda} nameContract={spell.nameContract}
                representativeOne={spell.representativeOne} dniOne={spell.dniOne}
                representativeTwo={spell.representativeTwo} dniTwo={spell.dniTwo}
                business={spell.business} rucBusiness={spell.rucBusiness} directionBusiness={spell.directionBusiness}
                representativeBusiness={spell.representativeBusiness} dniBusiness={spell.dniBusiness}
                partidaElectronica={spell.partidaElectronica} nameX={spell.nameX} />
           
        )}
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/> 
          

        </div >
    )
}


export default AdendaComplete;