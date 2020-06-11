import React, { useState, useEffect } from "react";

const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice,
    searchPaymentMethod, searchTermPay, searchSite, searchAnexoTench, searchRepresentative,
    searchHoursTime }) => {

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


    const [companyData, setCompanyData] = useState({});
    const [providerData, setProviderData] = useState({});
    const [nameCompanyData, setNameCompanyData] = useState("");

    const nameCompany = e => {
        setNameCompanyData(e.target.value);
    };
    const [rucCompanyData, setRucCompanyData] = useState("");

    const rucCompany = e => {
        setRucCompanyData(e.target.value);
    };
    const [addressCompanyData, setAddressCompanyData] = useState("");
    const addressCompany = e => {
        setAddressCompanyData(e.target.value);
    };
    const [
        representativesOneNameCompanyData,
        setRepresentativesOneNameCompanyData
    ] = useState("");
    const representativeOneNameCompany = e => {
        setRepresentativesOneNameCompanyData(e.target.value);
    };
    const [
        representativesOneDniCompanyData,
        setRepresentativesOneDniCompanyData
    ] = useState("");
    const representativeOneDniCompany = e => {
        setRepresentativesOneDniCompanyData(e.target.value);
    };

    const [
        representativesTwoNameCompanyData,
        setRepresentativesTwoNameCompanyData
    ] = useState("");
    const representativeTwoNameCompany = e => {
        setRepresentativesTwoNameCompanyData(e.target.value);
    };
    const [
        representativesTwoDniCompanyData,
        setRepresentativesTwoDniCompanyData
    ] = useState("");
    const representativeTwoDniCompany = e => {
        setRepresentativesTwoDniCompanyData(e.target.value);
    };
    const [nameProviderData, setNameProviderData] = useState("");
    const nameProvider = e => {
        setNameProviderData(e.target.value);
    };
    const [rucProviderData, setRucProviderData] = useState("");
    const rucProvider = e => {
        setRucProviderData(e.target.value);
    };
    const [addressProviderData, setAddressProviderData] = useState("");
    const addressProvider = e => {
        setAddressProviderData(e.target.value);
    };
    const [
        representativesNameProviderData,
        setRepresentativesNameProviderData
    ] = useState("");
    const representativeNameProvider = e => {
        setRepresentativesNameProviderData(e.target.value);
    };
    const [
        representativesDniProviderData,
        setRepresentativesDniProviderData
    ] = useState("");
    const representativeDniProvider = e => {
        setRepresentativesDniProviderData(e.target.value);
    };
    const [
        representativesNumberRegistryProviderData,
        setRepresentativesNumberRegistryProviderData
    ] = useState("");
    const representativeNumberRegistryProvider = e => {
        setRepresentativesNumberRegistryProviderData(e.target.value);
    };

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
            setCompanyData({
                name: nameCompanyData,
                ruc: rucCompanyData,
                address: addressCompanyData,
                representativeOneName: representativesOneNameCompanyData,
                representativeOneDni: representativesOneDniCompanyData,
                representativeTwoName: representativesTwoNameCompanyData,
                representativeTwoDni: representativesTwoDniCompanyData
            });

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
    }, [
        addressCompanyData,
        addressProviderData,
        nameCompanyData,
        nameProviderData,
        representativesDniProviderData,
        representativesNameProviderData,
        representativesNumberRegistryProviderData,
        representativesOneDniCompanyData,
        representativesOneNameCompanyData,
        representativesTwoDniCompanyData,
        representativesTwoNameCompanyData,
        rucCompanyData,
        rucProviderData
    ]);


    const [typeMoneys, setTypeMoneys] = useState("");
    const TypeMoney = e => {
        setTypeMoneys(e.target.value);
    };

    const [deadlineDay, SetDeadlineDay] = useState("");
    const deadlineDays = e => {
        SetDeadlineDay(e.target.value);
    };

    const [deliveryPlace, setDeliveryPlace] = useState("");
    const site = e => {
        setDeliveryPlace(e.target.value);
    };

    const [numberAnexoTenth, setNumberAnexoTent] = useState("");
    const numAnexoTenth = e => {
        setNumberAnexoTent(e.target.value);
    };


    const [representativeCompany, setRepresentativeCompany] = useState("");
    const companyRepresentative = e => {
        setRepresentativeCompany(e.target.value);
    };


    const [representativeSupplier, setRepresentativeSupplier] = useState("");
    const supplierRepresentative = e => {
        setRepresentativeSupplier(e.target.value);
    };

    const [numberHoursRepairLima, setNumberHoursRepairLima] = useState("");
    const numberHoursRepairLim = e => {
        setNumberHoursRepairLima(e.target.value);
    };

    const [numberHoursRepairProvincia, setNumberHoursRepairProvincia] = useState("");
    const numberHoursRepairProv = e => {
        setNumberHoursRepairProvincia(e.target.value);
    };

    const [timeAfterDeliveryFechayHora, settimeAfterDeliveryFechayHora] = useState("");
    const timeAfterDeliveryFecha = e => {
        settimeAfterDeliveryFechayHora(e.target.value);
    };

    return (
        <div>
            {
            (questionIntro) &&  
            <div className="row m-5 clause-question question-intro">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la Empresa</p>
                    <label htmlFor="">
                        Nombre de la empresa Stakraft
                        <input type="text" onChange={nameCompany} />
                    </label>
                    <label htmlFor="">
                        RUC <input type="text" onChange={rucCompany} />
                    </label>
                    <label htmlFor="">
                        Direccion <input type="text" onChange={addressCompany} />
                    </label>
                    <p>¿Por quién está representada la empresa?</p>
                    <label htmlFor="">
                        Nombre Completo
                        <input type="text" placeholder="Ej: Juan Antonio Rozas Mory" 
                               onChange={representativeOneNameCompany} />
                    </label>
                    <label htmlFor="">
                        DNI
                        <input type="text" placeholder="Ej: 07867123" onChange={representativeOneDniCompany} />
                    </label>
                    <p>Datos de representante dos</p>
                    <label htmlFor="">
                        Nombre Completo
                        <input type="text" placeholder="Ej: Álvaro Antonio Porturas Ingunza" onChange={representativeTwoNameCompany} />
                    </label>
                    <label htmlFor="">
                        DNI
                        <input type="text" placeholder="Ej: 09340737" onChange={representativeTwoDniCompany} />
                    </label>
                </div>
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la empresa con la que estás contratando</p>
                    <label htmlFor="">
                        Nombre de la empresa <input
                            type="text"
                            onChange={nameProvider}/>
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
                        search(companyData, providerData);
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
                    }}
                >
                    Siguiente
                </button>
                </div> 
            }

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
                    onClick={() => { searchPaymentMethod(typeMoneys); }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5 clause-question" id="question-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>5. Plazo de entrega de los bienes</p>
                    <label htmlFor="">
                        El plazo de entrega de los bienes adquiridos es:
                        <input type="text" onChange={deadlineDays} placeholder="Ejm: 10 semanas"/>
                    </label>
                </div>
                <button
                    onClick={() => { searchTermPay(deadlineDay); }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>6. Gastos, transporte y entrega</p>
                    <label htmlFor="">
                        El lugar de entrega de los bienes adquiridos es:
                        <input type="text" onChange={site} placeholder="Escribir aquí"/>
                    </label>
                </div>
                <button
                    onClick={() => { searchSite(deliveryPlace); }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>10- Liquidacion del Contrato</p>
                    <label htmlFor="">
                        numero de anexo
                        <input type="text" onChange={numAnexoTenth} />
                    </label>

                </div>
                <button
                    onClick={() => { searchAnexoTench(numberAnexoTenth); }}
                >
                    Siguiente
                </button>
            </div>

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
                    onClick={() => { searchRepresentative(representativeCompany, representativeSupplier); }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>12- Exclusion de daño Existentess </p>

                    <label htmlFor="">
                        Será responsable de reparar cualquier
              error en el funcionamiento de los Bienes en un plazo no mayor
                        <input type="text" onChange={numberHoursRepairLim} />
                    </label>
                    <label htmlFor="">
                        horas para Lima y a
                        <input type="text" onChange={numberHoursRepairProv} />
                    </label>

                    <label htmlFor="">
                        aun cuando no sea el fabricante de los mismos, durante el plazo de vigencia de
              este Contrato, así como durante los
                        <input type="text" onChange={timeAfterDeliveryFecha} />
                    </label>

                </div>
                <button
                    onClick={() => { searchHoursTime(numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora) }}
                >
                    Siguiente
        </button>
            </div>
        </div>
    );
};

export default ContractData;
