import React from 'react';
import '../../style/makecontract.css';
import ContractData from '../../contracts/ContractData';
import Introduction from '../../contracts/BuyAndSell/Introduction';
import First from '../../contracts/BuyAndSell/First';
import Header from "../../componentes/Header";


const ViewFirst= ({data, searchData, antecedente, searchAntecedente }) => {
    return (
        <div className="view-contract">
            <Header />
            <div className="row">
                <section className="section-question col-sm-12 col-md-6" >
                    <ContractData search={searchData} searchDataAntecedentes={searchAntecedente} />
                </section>
                <section className="section-create-contract col-sm-12 col-md-6" >
                    <Introduction data={data} />
                    <First data={data} First={antecedente} />
                </section>
            </div>
        </div>
    )
};


export default ViewFirst;
