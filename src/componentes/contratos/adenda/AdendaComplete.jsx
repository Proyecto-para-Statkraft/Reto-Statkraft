import React from "react";
import AdendaIntroduction from "./AdendaIntroduction";



function AdendaComplete(){

    return (
        <div>
            <AdendaIntroduction numberAdenda={adendaData.numberAdenda} nameContract={adendaData.nameContract} 
            representativeOne={adendaData.representativeOne} dniOne={adendaData.dniOne}
            representativeTwo={adendaData.representativeTwo} dniTwo={adendaData.dniTwo}
            business={adendaData.business} rucBusiness={adendaData.rucBusiness} directionBusiness={adendaData.directionBusiness}
            representativeBusiness={adendaData.representativeBusiness} dniBusiness={adendaData.dniBusiness} 
            partidaElectronica={adendaData.partidaElectronica} nameX={adendaData.nameX}/>
            {/* <FirstSection/>
            <SecondSection/>
            <ThirdSection/>  */}
        </div>
    )
}


export default AdendaComplete;