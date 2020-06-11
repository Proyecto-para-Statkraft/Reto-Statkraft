import React, { useState } from 'react';
import ContractData from './ContractData';
import Introduction from './BuyAndSell/Introduction';
import Header from "../componentes/Header";

const MakeContract = () => {

    const [data, setData] = useState('')

    const searchData = (companyData, providerData) => {
        setData({ companyData, providerData })
    }

    return (
        <div>
            <Header />
            <div className="">
                <div className="row">
                    <section className="col-sm-12 col-md-6">
                        <ContractData search={searchData} />
                    </section>
                    <section className="col-sm-12 col-md-6">
                        <Introduction data={data} />
                    </section>
                </div>
            </div>
        </div>
    )
};

export default MakeContract;
