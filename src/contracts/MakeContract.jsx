import React, { useState } from 'react';
import '../style/makecontract.css';
import ContractData from './ContractData';
import Introduction from './BuyAndSell/Introduction';
import Header from "../componentes/Header";
import First from './BuyAndSell/First';
import Second from './BuyAndSell/Second';
import Third from './BuyAndSell/Third'
import Quarter from './BuyAndSell/Quarter';
import Fifth from './BuyAndSell/Fifth';
import Sixth from './BuyAndSell/Sixth';
import Tenth from './BuyAndSell/Tenth';
import Eleventh from './BuyAndSell/Eleventh';
import Twelfth from './BuyAndSell/Twelfth';
import Thirteenth from './BuyAndSell/Thirteenth';
import Fourteenth from './BuyAndSell/Fourteenth';
import Fifteenth from './BuyAndSell/Fifteenth';
import Sixteenth from './BuyAndSell/Sixteenth';
import Twentieth from './BuyAndSell/Twentieth';


const MakeContract = () => {

    const [data, setData] = useState('')
    const [antecedente, setAntecedente] = useState('');
    const [sectionSecond, setSectionSecond] = useState('');
    const [sectionThird, setSectionThird] = useState('');

    const searchData = (companyData, providerData) => {
        setData({ companyData, providerData });
    }

    const searchAntecedente = (product) => {
        setAntecedente({ product })
    }

    const searchObjeto = (sell) => {
        setSectionSecond({ sell })
    }

    const searchPrice = (moneys) => {
        setSectionThird({ moneys })
    }

    const [sectionTenth, setSectionTenth] = useState('');
    const searchAnexoTench = (deadlineDay) => {
        setSectionTenth({ deadlineDay })
    }

    const [sectionEleventh, setSectionEleventh] = useState('');
    const searchRepresentative = (representativeCompany, representativeSupplier) => {
        setSectionEleventh({ representativeCompany, representativeSupplier })
    }

    const [sectionTwelfth, setSectionTwelfth] = useState('');
    const searchHoursTime = (numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora) => {
        setSectionTwelfth({ numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora })
    }

    const [sectionThirteenth, setSectionThirteenth] = useState('');
    const searchoClauseThirteenth = (numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora) => {
        setSectionThirteenth({ numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora })
    }

    const [sectionFourteenth, setSectionFourteenth] = useState('');
    const searchClauseFourteenth = (optionClauseFourteenth, moneysPoliza) => {
        setSectionFourteenth({ optionClauseFourteenth, moneysPoliza })
    }

    const [sectionFifteenth, setSectionFifteenth] = useState('');
    const searchTimeDayFifteenth = (timeDay) => {
        setSectionFifteenth({ timeDay })
    }

    const [sectionSixteenth, setSectionSixteenth] = useState('');
    const searchClauseSixteenth = (optionClausesSixteenth, name, ruc, servicio) => {
        setSectionSixteenth({ optionClausesSixteenth, name, ruc, servicio })
    }

    const [sectionTwentienth, setSectionTwentienth] = useState('');
    const searchClauseTwentieth = (optionClausesTwentieth) => {
        setSectionTwentienth({ optionClausesTwentieth })
    }

    return (
        <div id="source-html" className="view-contract">
            <Header />
            <div className="">
                <div className="row">
                    <section className="section-question col-sm-12 col-md-6">
                        <ContractData search={searchData} searchDataAntecedentes={searchAntecedente} searchSellOption={searchObjeto}
                            searchPrice={searchPrice} searchPaymentMethod={searchPaymentMethod} searchTermPay={searchTermPay}
                            searchSite={searchSite} searchAnexoTench={searchAnexoTench} searchRepresentative={searchRepresentative}
                            searchHoursTime={searchHoursTime} searchoClauseThirteenth={searchoClauseThirteenth}
                            searchClauseFourteenth={searchClauseFourteenth} searchTimeDayFifteenth={searchTimeDayFifteenth}
                            searchClauseSixteenth={searchClauseSixteenth} searchClauseTwentienth={searchClauseTwentieth}
                        />
                    </section>
                    <section className="col-sm-12 col-md-6 bg-secondary">
                        <Introduction data={data} />
                        <First data={data} First={antecedente} />
                        <Second data={data} Second={sectionSecond} />
                        <Third data={data} Third={sectionThird} />
                        <Quarter data={data} Quarter={sectionQuarter} />
                        <Fifth data={data} Fifth={sectionFifth} />
                        <Sixth data={data} Sixth={sectionSixth} />
                        <Tenth data={data} Tenth={sectionTenth} />
                        <Eleventh data={data} Eleventh={sectionEleventh} />
                        <Twelfth data={data} Twelfth={sectionTwelfth} />
                        <Thirteenth data={data} Thirteenth={sectionThirteenth} />
                        <Fourteenth data={data} Fourteenth={sectionFourteenth} />
                        <Fifteenth Fifteenth={sectionFifteenth} />
                        <Sixteenth data={data} Sixteenth={sectionSixteenth} />
                        {/* <Twentieth Thirteenth={sectionTwentienth} /> */}


                    </section>
                </div>
            </div>
        </div>
    )
};


export default MakeContract;
