import React, { useState } from 'react';
import '../style/makecontract.css';
import ContractData from './ContractData';
import Introduction from './BuyAndSell/Introduction';
import Header from "../componentes/Header";
import First from './BuyAndSell/First';
import Second from './BuyAndSell/Second';
import Third from './BuyAndSell/Third'

const MakeContract = () => {

    const [data, setData] = useState('')
    const [antecedente, setAntecedente] = useState('');
    const [sectionSecond, setSectionSecond] = useState('');
    const [sectionThird, setSectionThird] = useState('');

    const searchData = (companyData, providerData) => {
        setData({ companyData, providerData });
    }

    const searchAntecedente = (product, place) => {
        setAntecedente({ product, place })
    }

    const searchObjeto = (sell) => {
        setSectionSecond({ sell })
    }

    const searchPrice = (moneys) => {
        setSectionThird({ moneys })
    }

    return (
        <div className="view-contract">
            <Header />
            <div className="row">
                <section className="section-question col-sm-12 col-md-6" >
                    <ContractData search={searchData} searchDataAntecedentes={searchAntecedente}
                        searchSellOption={searchObjeto} searchPrice={searchPrice} />
                </section>
                <section className="section-create-contract col-sm-12 col-md-6" >
                    <frame>
                        <Introduction data={data} />
                        <First data={data} First={antecedente} />
                        <Second data={data} Second={sectionSecond} />
                        <Third data={data} Third={sectionThird} />
                    </frame>
                </section>
            </div>
        </div>
    )
};

export default MakeContract;
