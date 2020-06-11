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


    return (
        <div className="">
            <Header />
            <div className="">
                <div className="row">
                    <section className="col-sm-12 col-md-6">
                        <ContractData search={searchData} searchDataAntecedentes={searchAntecedente} searchSellOption={searchObjeto}
                            searchPrice={searchPrice} searchPaymentMethod={searchPaymentMethod} searchTermPay={searchTermPay}
                            searchSite={searchSite}

                        />
                    </section>
                    <section className="col-sm-12 col-md-6">
                        <Introduction data={data} />
                        <First data={data} First={antecedente} />
                        <Second data={data} Second={sectionSecond} />
                        <Third data={data} Third={sectionThird} />
                        <Quarter data={data} Quarter={sectionQuarter} />
                        <Fifth data={data} Fifth={sectionFifth} />
                        <Sixth data={data} Sixth={sectionSixth} />

                    </section>
                </div>
            </div>
        </div>
    )
};

export default MakeContract;
