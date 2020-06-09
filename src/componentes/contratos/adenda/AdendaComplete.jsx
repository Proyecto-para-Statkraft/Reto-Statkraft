import React from 'react'
import AdendaIntroduction from "./AdendaIntroduction"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"

const AdendaComplete = () => {
    return (
        <div>
            <AdendaIntroduction/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/> 
        </div>
    )
}

export default AdendaComplete;