import React, { useState } from 'react';
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

const MakeContract = () => {

    const [data, setData] = useState('')

    const searchData = (companyData, providerData) => {
        setData({ companyData, providerData })
    }

    const [antecedente, setAntecedente] = useState('');
    const searchAntecedente = (product, place) => {
        setAntecedente({ product, place })
    }

    const [sectionSecond, setSectionSecond] = useState('');
    const searchObjeto = (sell, option) => {
        setSectionSecond({ sell, option })
    }

    const [sectionThird, setSectionThird] = useState('');
    const searchPrice = (clause35, moneys) => {
        setSectionThird({ clause35, moneys })
    }

    const [sectionQuarter, setSectionQuarter] = useState('');
    const searchPaymentMethod = (type) => {
        setSectionQuarter({ type })
    }

    const [sectionFifth, setSectionFifth] = useState('');
    const searchTermPay = (deadlineDay) => {
        setSectionFifth({ deadlineDay })
    }

    const [sectionSixth, setSectionSixth] = useState('');
    const searchSite = (deadlineDay) => {
        setSectionSixth({ deadlineDay })
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

    return (
        <div className="">
            <Header />
            <div className="">
                <div className="row">
                    <section className="col-sm-12 col-md-6">
                        <ContractData search={searchData} searchDataAntecedentes={searchAntecedente} searchSellOption={searchObjeto}
                            searchPrice={searchPrice} searchPaymentMethod={searchPaymentMethod} searchTermPay={searchTermPay}
                            searchSite={searchSite} searchAnexoTench={searchAnexoTench} searchRepresentative={searchRepresentative}
                            searchHoursTime={searchHoursTime}
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
                    </section>
                </div>
            </div>
        </div>
    )
};

export default MakeContract;
