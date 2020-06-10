import React from "react";
import AdendaIntroduction from "./AdendaIntroduction";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";


function AdendaComplete({ data }) {

    console.log('recibe', data)

    return (
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
            <SecondSection numberAdenda= {data.numberAdenda} numeralOne= {data.numeralOne} numberClausula={data.numberClausula}
                 numCardinal={data.numCardinal} clausulaModificar={data.clausulaModificar}
                numeralTwo= {data.numeralTwo} numberClausulaTwo={data.numberClausulaTwo} clausulaAgregar={data.clausulaAgregar}
                numeral3={data.numeral3} numberClausulaTree={data.numberClausulaTree}/>
            <ThirdSection  numberAdenda={data.numberAdenda} daysThirdSection= {data.numberAdenda} 
                 monthThirdSection = {data.monthThirdSection} yearThirdSection = {data.yearThirdSection}/> 
        </div>
    )
}


export default AdendaComplete;