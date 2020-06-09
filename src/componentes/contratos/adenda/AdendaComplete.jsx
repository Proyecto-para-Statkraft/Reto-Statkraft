import React from 'react'
import AdendaIntroduction from "./AdendaIntroduction"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
import Header from '../../Header'

const AdendaComplete = () => {
    return (
        <div>
            <Header />
            <AdendaIntroduction />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default AdendaComplete;