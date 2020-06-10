import React, { useState, useEffect } from "react";
import AdendaIntroduction from "./AdendaIntroduction";
import firebase from '../firebase.js';

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function AdendaComplete() {

    const [oneAdenda, setAdenda] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("adendaData")
                .onSnapshot(
                    snapShots => {
                        setAdenda(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
            console.log(data)
        };
        fetchData();
    }, []);

    console.log(oneAdenda)

    return (
        <div>
        {oneAdenda.map((propertieAdenda) => 
        <div key={propertieAdenda.id}>
            <AdendaIntroduction numberAdenda={propertieAdenda.numberAdenda} typeContract={propertieAdenda.typeContract} codeContract={propertieAdenda.codeContract}
                representativeOne={propertieAdenda.representativeOne} dniOne={propertieAdenda.dniOne}
                representativeTwo={propertieAdenda.representativeTwo} dniTwo={propertieAdenda.dniTwo}
                business={propertieAdenda.business} rucBusiness={propertieAdenda.rucBusiness} directionBusiness={propertieAdenda.directionBusiness}
                representativeBusiness={propertieAdenda.representativeBusiness} dniBusiness={propertieAdenda.dniBusiness}
                partidaElectronica={propertieAdenda.partidaElectronica} nameX={propertieAdenda.nameX} />
            <FirstSection dayContract={propertieAdenda.dayContract} monthContract={propertieAdenda.monthContract}
                yearContract={propertieAdenda.yearContract} detailObject={propertieAdenda.detailObject}
                dayAdenda={propertieAdenda.dayAdenda} monthAdenda={propertieAdenda.monthAdenda}
                yearAdenda={propertieAdenda.yearAdenda} detailObject2={propertieAdenda.detailObject2}
                />
            <SecondSection/>
            <ThirdSection/> 
            </div>
        )}
            
        </div >
    )
}


export default AdendaComplete;