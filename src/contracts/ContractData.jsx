import React, { useState, useEffect } from "react";

const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice, searchPaymentMethod,
    searchTermPay, searchSite, searchAnexoTench, searchRepresentative, searchHoursTime, searchoClauseThirteenth,
    searchClauseFourteenth, searchTimeDayFifteenth, searchClauseSixteenth, searchClauseTwentienth }) => {

    const [questionIntro, setQuestionIntro] = useState(true);
    const [questionFirst, setQuestionFirst] = useState(false);
    const [questionSecond, setQuestionSecond] = useState(false);
    const [questionThird, setQuestionThird] = useState(false);
    const [questionQuarter, setQuestionQuarter] = useState(false);
    const [questionFifth, setQuestionFifth] = useState(false);
    const [questionSixth, setQuestionSixth] = useState(false);
    const [questionSeventh, setQuestionSeventh] = useState(false);
    const [questionEighth, setQuestionEighth] = useState(false);
    const [questionNineth, setQuestionNineth] = useState(false);
    const [questionTenth, setQuestionTenth] = useState(false);
    const [questionEleventh, setQuestionEleventh] = useState(false);
    const [questionTwelfth, setQuestionTwelfth] = useState(false);
    const [questionThirteenth, setQuestionThirteenth] = useState(false);
    const [questionFourteenth, setQuestionFourteenth] = useState(false);
    const [questionFifteenth, setQuestionFifteenth] = useState(false);
    const [questionSixteenth, setQuestionSixteenth] = useState(false);
    const [questionSeventeenth, setQuestionSeventeenth] = useState(false);
    const [questionEighteenth, setQuestionEighteenth] = useState(false);
    const [questionNineteenth, setQuestionNineteenth] = useState(false);
    const [questionTwentieth, setQuestionTwentieth] = useState(false);
    const [questionTwentyFirst, setQuestionTwentyFirst] = useState(false);
    const [questionTwentySecond, setQuestionTwentySecond] = useState(false);
    const [questionTwentyThird, setQuestionTwentyThird] = useState(false);




    const [providerData, setProviderData] = useState({});

    const [nameProviderData, setNameProviderData] = useState("");
    const nameProvider = e => { setNameProviderData(e.target.value) };

    const [rucProviderData, setRucProviderData] = useState("");
    const rucProvider = e => { setRucProviderData(e.target.value) };

    const [addressProviderData, setAddressProviderData] = useState("");
    const addressProvider = e => { setAddressProviderData(e.target.value) };

    const [representativesNameProviderData, setRepresentativesNameProviderData] = useState("");
    const representativeNameProvider = e => { setRepresentativesNameProviderData(e.target.value) };

    const [representativesDniProviderData, setRepresentativesDniProviderData] = useState("");
    const representativeDniProvider = e => { setRepresentativesDniProviderData(e.target.value) };

    const [representativesNumberRegistryProviderData, setRepresentativesNumberRegistryProviderData] = useState("");
    const representativeNumberRegistryProvider = e => { setRepresentativesNumberRegistryProviderData(e.target.value) };

    const [inputRequieres, setInputRequiere] = useState("");
    const product = e => {
        setInputRequiere(e.target.value);
    };
    const [inputRequieresen, setInputRequiereEn] = useState("");
    const place = e => {
        setInputRequiereEn(e.target.value);
    };

    const [sells, setSells] = useState("");
    const sell = e => {
        setSells(e.target.value);
    };


    const [moneys, setMoneys] = useState("");
    const money = e => {
        setMoneys(e.target.value);
    };


    useEffect(() => {
        const data = () => {
            setProviderData({
                name: nameProviderData,
                ruc: rucProviderData,
                addres: addressProviderData,
                representativeName: representativesNameProviderData,
                representativeDni: representativesDniProviderData,
                numberRegistry: representativesNumberRegistryProviderData
            });
        };
        data();
    }, [addressProviderData, nameProviderData, representativesDniProviderData, representativesNameProviderData, representativesNumberRegistryProviderData, rucProviderData]);


    const [typeMoneys, setTypeMoneys] = useState("");
    const TypeMoney = e => { setTypeMoneys(e.target.value) };

    const [deadlineDay, SetDeadlineDay] = useState("");
    const deadlineDays = e => { SetDeadlineDay(e.target.value) };

    const [deliveryPlace, setDeliveryPlace] = useState("");
    const site = e => { setDeliveryPlace(e.target.value) };

    const [representativeCompany, setRepresentativeCompany] = useState("");
    const companyRepresentative = e => { setRepresentativeCompany(e.target.value) };

    const [representativeSupplier, setRepresentativeSupplier] = useState("");
    const supplierRepresentative = e => { setRepresentativeSupplier(e.target.value) };

    const [numberHoursRepairLima, setNumberHoursRepairLima] = useState("");
    const numberHoursRepairLim = e => { setNumberHoursRepairLima(e.target.value) };

    const [numberHoursRepairProvincia, setNumberHoursRepairProvincia] = useState("");
    const numberHoursRepairProv = e => { setNumberHoursRepairProvincia(e.target.value) };

    const [timeAfterDeliveryFechayHora, settimeAfterDeliveryFechayHora] = useState("");
    const timeAfterDeliveryFecha = e => { settimeAfterDeliveryFechayHora(e.target.value) };

    const [optionClauseThirteenth, setOptionClauseThirteenth] = useState("");
    const optionClausesThirteenth = e => { setOptionClauseThirteenth(e.target.value) };

    const [optionClauseFourteenth, setOptionClauseFourteenth] = useState("");
    const optionClausesFourteenth = e => { setOptionClauseFourteenth(e.target.value) };

    const [moneysPoliza, setMoneysPoliza] = useState("");
    const moneyPoliza = e => { setMoneysPoliza(e.target.value) }

    const [timeDay, settimeDay] = useState("");
    const timeDays = e => { settimeDay(e.target.value) }

    const [optionClausesSixteenth, setOptionClauseSixteenth] = useState("");
    const optionClauseSixteenth = e => { setOptionClauseSixteenth(e.target.value) };

    const [name, setname] = useState("");
    const clauseName = e => { setname(e.target.value) };

    const [ruc, setRuc] = useState("");
    const clauseRuc = e => { setRuc(e.target.value) };

    const [servicio, setServicio] = useState("");
    const clauseServicio = e => { setServicio(e.target.value) };

    const [optionClausesTwentieth, setOptionClauseTwentieth] = useState("");
    const optionClauseTwentieth = e => { setOptionClauseTwentieth(e.target.value) };

    return (
        <div>
            {
                (questionIntro) &&
                <div className="row m-5 clause-question question-intro">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>Datos de la empresa con la que estás contratando</p>
                        <label htmlFor="">
                            Nombre de la empresa <input
                                type="text"
                                onChange={nameProvider} />
                        </label>
                        <label htmlFor="">
                            RUC <input type="text" onChange={rucProvider} />
                        </label>
                        <label htmlFor="">
                            Domicilio <input type="text" onChange={addressProvider} />
                        </label>
                        <label htmlFor="">
                            Nombre Representante de la Empresa
                    <input type="text" onChange={representativeNameProvider} />
                        </label>
                        <label htmlFor="">
                            DNI
                        <input type="text" onChange={representativeDniProvider} />
                        </label>
                        <label htmlFor="">
                            Partida Electrónica N° (SUNARP)
                        <input
                                type="text"
                                onChange={representativeNumberRegistryProvider}
                            />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            search(providerData);
                            setQuestionIntro(false);
                            setQuestionFirst(true);
                        }}
                    >
                        CONTINUAR
                </button>
                </div>
            }
            {
                (questionFirst) &&
                <div className="row m-5 clause-question" id="question-1">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>1. Antecendente</p>
                        <label htmlFor="">
                            Nuestra empresa esta dedicada a la generación y comercialización de
                            energía eléctrica, que requiere:
                        <textarea placeholder="Detallar Servicio..."
                                onChange={product}></textarea>
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchDataAntecedentes(inputRequieres, inputRequieresen);
                            setQuestionSecond(true);
                            setQuestionFirst(false);
                        }}
                    >

                        Siguiente
                </button>
                </div>
            }
            {
                (questionSecond) &&
                <div className="row m-5 clause-question" id="question-2">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>2-Objeto</p>
                        <label htmlFor="">
                            Por el Contrato, el <span>PROVEEDOR</span> vende a{" "}
                            <span>EMPRESA</span> el conjunto de bienes que se mencionan en el
                       Anexo N° 2(en adelante, el conjunto, los “Bienes”), libres de carga
                       y gravámenes, los cuales serán destinados a <br />
                            <textarea type="text" onChange={sell} />{" "}
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchSellOption(sells);
                            setQuestionThird(true);
                            setQuestionSecond(false);
                        }}
                    >
                        Siguiente
               </button>
                </div>
            }

            {
                (questionThird) &&
                <div className="row m-5 clause-question" id="question-3">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>3- Precio</p>
                        <textarea type="text" placeholder="Ejm: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) " onChange={money} />
                    </div>
                    <button
                        onClick={() => {
                            searchPrice(moneys);
                            setQuestionQuarter(true);
                            setQuestionThird(false);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5 clause-question" id="question-4">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>4. Formas y Condiciones de pago</p>
                        <div className="m-3" onChange={TypeMoney}>
                            <p>La moneda pactada para el precio es : </p>
                            <input className="m-3 radio" type="radio" value="dolares" name="gender" />Dolares <br />
                            <input className="m-3 radio" type="radio" value="soles" name="gender" />Soles
                    </div>
                    </div>
                    <button
                        onClick={() => {
                            searchPaymentMethod(typeMoneys);
                            setQuestionFifth(true);
                            setQuestionQuarter(false);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionFifth) &&
                <div className="row m-5 clause-question" id="question-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>5. Plazo de entrega de los bienes</p>
                        <label htmlFor="">
                            El plazo de entrega de los bienes adquiridos es:
                        <input type="text" onChange={deadlineDays} placeholder="Ejm: 10 semanas" />

                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchTermPay(deadlineDay);
                            setQuestionSixth(true);
                            setQuestionFifth(false);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionSixth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>6. Gastos, transporte y entrega</p>
                        <label htmlFor="">
                            El lugar de entrega de los bienes adquiridos es:
                        <input type="text" onChange={site} placeholder="Escribir aquí" />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchSite(deliveryPlace);
                            setQuestionSeventh(true);
                            setQuestionSixth(false);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5 clause-question" id="question-6">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>11- Representantes </p>

                        <label htmlFor="">
                            Representante Compañia
            <input type="text" onChange={companyRepresentative} />
                        </label>
                        <label htmlFor="">
                            Representante Proveedor
            <input type="text" onChange={supplierRepresentative} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchRepresentative(representativeCompany, representativeSupplier);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>12- Exclusion de daño Existentess </p>

                        <label htmlFor="">
                            Será responsable de reparar cualquier error en el funcionamiento de
                            los Bienes en un plazo no mayor
            <input type="text" onChange={numberHoursRepairLim} />
                        </label>
                        <label htmlFor="">
                            horas para Lima y a
            <input type="text" onChange={numberHoursRepairProv} />
                        </label>

                        <label htmlFor="">
                            aun cuando no sea el fabricante de los mismos, durante el plazo de
                            vigencia de este Contrato, así como durante los
                    <input type="text" onChange={timeAfterDeliveryFecha} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchHoursTime(
                                numberHoursRepairLima,
                                numberHoursRepairProvincia,
                                timeAfterDeliveryFechayHora
                            );
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>13- Penalidades</p>
                        <p>una penalidad
                    ascendente a uno por ciento (1%) del valor del Contrato por cada día de atraso</p>

                        <h1>ESCOGE CLAUSULA</h1>
                        <div className="m-3" onChange={optionClausesThirteenth}>
                            <input className="m-3 radio" type="radio" value="true" name="gender" />
                            13.2 wawawa <br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" />
                            2.3 wiwiwiwiwiw
                </div>
                    </div>
                    <button
                        onClick={() => {
                            searchoClauseThirteenth(optionClauseThirteenth);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>14- Garantias</p>

                        <h1>ESCOGE CLAUSULA</h1>
                        <div className="m-3" onChange={optionClausesFourteenth}>
                            <input className="m-3 radio" type="radio" value="true" name="gender" />
                            14.2 clasura14 <br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" />
                            14.2  vacio
          </div>
                        <label htmlFor="">
                            14.1.2 Póliza de Responsabilidad Civil Extracontractual por un monto no menor a US$
            <input type="text" onChange={moneyPoliza} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchClauseFourteenth(optionClauseFourteenth, moneysPoliza);
                        }}
                    >
                        Siguiente
        </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>15- Caso Fortuito</p>
                        <label htmlFor="">
                            cualquiera de las Partes podrá dar por
                            resuelto el Contrato mediante comunicación cursada con
            <input type="text" onChange={timeDays} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchTimeDayFifteenth(timeDay);
                        }}
                    >
                        Siguiente
        </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>16- Subcontratacion y cesion</p>

                        <h1>ESCOGE CLAUSULA</h1>
                        <div className="m-3" onChange={optionClauseSixteenth}>
                            <input className="m-3 radio" type="radio" value="true" name="gender" />
                            16.1 clasuraASixteenth <br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" />
                            16.1 clasuraBSixteenth
                    </div>
                        <p>si escoges clauseB completar campo</p>
                        <label htmlFor="">
                            salvo el
                            servicio de
            <input type="text" placeholder="servicio" onChange={clauseServicio} />
                            <input type="text" placeholder="nombre" onChange={clauseName} />
                            <input type="text" placeholder="ruc" onChange={clauseRuc} />
                        </label>


                    </div>
                    <button
                        onClick={() => {
                            searchClauseSixteenth(optionClausesSixteenth, name, ruc, servicio);
                        }}
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>20- Regulacion Anticorrupcion</p>

                        <h1>ESCOGE CLAUSULA</h1>
                        <div className="m-3" onChange={optionClauseTwentieth}>
                            <input className="m-3 radio" type="radio" value="clausulaA" name="gender" />
                            16.1 clasuraATwentient <br />
                            <input className="m-3 radio" type="radio" value="clausulaB" name="gender" />
                            16.1 clasurabTwentient <br />
                            <input className="m-3 radio" type="radio" value="clausulaC" name="gender" />
                            16.1 clasuraCTwentient <br />
                        </div>
                        <p>FALTA UN PARAMETRO PARA UNA CLAUSULA revisar como llamarlo</p>
                        <button onClick={() => { searchClauseTwentienth(optionClausesTwentieth); }}>
                            Siguiente
                     </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default ContractData;

