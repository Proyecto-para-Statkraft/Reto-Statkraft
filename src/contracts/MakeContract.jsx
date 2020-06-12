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
import Eleventh from './BuyAndSell/Eleventh';
import Twelfth from './BuyAndSell/Twelfth';
import Thirteenth from './BuyAndSell/Thirteenth';
import Fourteenth from './BuyAndSell/Fourteenth';
import Fifteenth from './BuyAndSell/Fifteenth';
import Sixteenth from './BuyAndSell/Sixteenth';
import Twentieth from './BuyAndSell/Twentieth';
import Firms from './BuyAndSell/Firms';


const MakeContract = (data, props) => {

    console.log('nombre usuario', props)

    const [provider, setProvider] = useState('')
    const searchProvider = (providerData) => {
        setProvider({ providerData })
    }

    const [antecedente, setAntecedente] = useState('');
    const [sectionSecond, setSectionSecond] = useState('');
    const [sectionThird, setSectionThird] = useState('');



    const searchAntecedente = (product) => {
        setAntecedente({ product })
    }

    const searchObjeto = (sell) => {
        setSectionSecond({ sell })
    }

    const searchPrice = (moneys) => {
        setSectionThird({ moneys })
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

    const [sectionEleventh, setSectionEleventh] = useState('');
    const searchRepresentative = (representativeCompany, representativeSupplier) => {
        setSectionEleventh({ representativeCompany, representativeSupplier })
    }

    const [sectionTwelfth, setSectionTwelfth] = useState('');
    const searchHoursTime = (numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora) => {
        setSectionTwelfth({ numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora })
    }

    const [sectionThirteenth, setSectionThirteenth] = useState('');
    const searchoClauseThirteenth = (optionClauseThirteenth) => {
        setSectionThirteenth({ optionClauseThirteenth })

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

    const [sectionTwentyThird, setSectionTwentyThird] = useState('');
    const searchDate = (days, months, years) => {
        setSectionTwentyThird({ days, months, years })
    }

    function exportHTML() {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML = header + document.getElementById("source-html").innerHTML + footer;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }



    return (
        <div className="view-contract">
            <Header />
            <div className="container-view-contract">
                <div className="row generator-contract">
                    <div className="section-question ">
                        <section>
                            <div className="row">
                                <ContractData search={searchProvider} searchDataAntecedentes={searchAntecedente} searchSellOption={searchObjeto}
                                    searchPrice={searchPrice} searchPaymentMethod={searchPaymentMethod} searchTermPay={searchTermPay}
                                    searchSite={searchSite} searchRepresentative={searchRepresentative}
                                    searchHoursTime={searchHoursTime} searchoClauseThirteenth={searchoClauseThirteenth}
                                    searchClauseFourteenth={searchClauseFourteenth} searchTimeDayFifteenth={searchTimeDayFifteenth}
                                    searchClauseSixteenth={searchClauseSixteenth} searchClauseTwentienth={searchClauseTwentieth}
                                    searchDate={searchDate} generateWord={exportHTML}
                                />
                            </div>
                        </section>
                    </div>

                    <section id="source-html" className="section-contract">
                        <Introduction data={data} provider={provider} />
                        <First data={data} First={antecedente} />
                        <Second data={data} Second={sectionSecond} />
                        <Third data={data} Third={sectionThird} />
                        <Quarter data={data} Quarter={sectionQuarter} />
                        <Fifth data={data} Fifth={sectionFifth} />
                        <Sixth data={data} Sixth={sectionSixth} />
                        <Eleventh data={data} Eleventh={sectionEleventh} />
                        <Twelfth data={data} Twelfth={sectionTwelfth} />
                        <Thirteenth data={data} Thirteenth={sectionThirteenth} />
                        <Fourteenth data={data} Fourteenth={sectionFourteenth} />
                        <Fifteenth Fifteenth={sectionFifteenth} />
                        <Sixteenth data={data} Sixteenth={sectionSixteenth} />
                        <Twentieth data={data} Twentieth={sectionTwentienth} />
                        <Firms data={data} provider={provider} sectionTwentyThird={sectionTwentyThird} />
                    </section>

                </div>
            </div>
        </div>
    )
};


export default MakeContract;