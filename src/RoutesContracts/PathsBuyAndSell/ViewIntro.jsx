import React from 'react';
import '../../style/makecontract.css';
import ContractData from '../../contracts/ContractData';
import Introduction from '../../contracts/BuyAndSell/Introduction';
import Header from "../../componentes/Header";


const ViewIntro = ({data, searchData}) => {
    return (
        <div className="view-contract">
            <Header />
            <div className="row">
                <section className="section-question col-sm-12 col-md-6" >
                    <ContractData search={searchData} />
                </section>
                <section className="section-create-contract col-sm-12 col-md-6" >
                    <Introduction data={data} />
                </section>
            </div>
        </div>
    )
};


export default ViewIntro;
