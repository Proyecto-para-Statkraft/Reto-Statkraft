import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice,
    searchPaymentMethod, searchTermPay, searchSite }) => {

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


    return (
        <div>
            <div className="row m-5 clause-question question-intro">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la empresa Slatkraft</p>
                    <label htmlFor="">
                        {" "}
                        Nombre de la empresa Stalkraft jeje{" "}
                        <input type="text" onChange={nameCompany} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        RUC <input type="text" onChange={rucCompany} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Direccion <input type="text" onChange={addressCompany} />{" "}
                    </label>
                    <p>Datos de representante uno</p>
                    <label htmlFor="">
                        {" "}
                        Nombre Representante
            <input type="text" onChange={representativeOneNameCompany} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Dni representante{" "}
                        <input type="text" onChange={representativeOneDniCompany} />{" "}
                    </label>
                    <p>Datos de representante dos</p>
                    <label htmlFor="">
                        {" "}
                        Nombre Representante{" "}
                        <input type="text" onChange={representativeTwoNameCompany} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Dni representante{" "}
                        <input type="text" onChange={representativeTwoDniCompany} />{" "}
                    </label>
                </div>
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la empresa Proveedor</p>
                    <label htmlFor="">
                        {" "}
                        Nombre de la empresa <input
                            type="text"
                            onChange={nameProvider}
                        />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        RUC <input type="text" onChange={rucProvider} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Direccion <input type="text" onChange={addressProvider} />{" "}
                    </label>
                    <p>Datos de representante uno</p>
                    <label htmlFor="">
                        {" "}
                        Nombre Representante
            <input type="text" onChange={representativeNameProvider} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Dni representante{" "}
                        <input type="text" onChange={representativeDniProvider} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        Nombre Representante{" "}
                        <input
                            type="text"
                            onChange={representativeNumberRegistryProvider}
                        />{" "}
                    </label>
                </div>
                <button
                    onClick={() => {
                        search(companyData, providerData);
                        window.location.pathname = '/makecontract/question-first';
                    }}
                >
                Siguiente
                </button>
            </div>

            <div className="row m-5 clause-question" id="question-1">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>1-Antecendente</p>
                    <label htmlFor="">
                        {" "}
                        Nuestra empresa esta dedicada a la generación y comercialización de
                        energía eléctrica, que requiere{" "}
                        <input type="text" onChange={product} />{" "}
                    </label>
                    <label htmlFor="">
                        {" "}
                        en la direccion <input type="text" onChange={place} />{" "}
                    </label>
                </div>
                <button
                    onClick={() => {
                        searchDataAntecedentes(inputRequieres, inputRequieresen);
                    }}
                >
                    {" "}
                    Siguiente
                </button>
            </div>
        
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
                        searchSellOption(sells)
                    }}
                >
                    Siguiente
                </button>
            </div>

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

            <div className="row m-5 clause-question" id="question-4">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>4- Forma y Condiciones de pago</p>
                    <div className="m-3" onChange={TypeMoney}>
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
                    <p>5- Palzo de entrega de los Bienes</p>

                    <label htmlFor="">
                        dias de plazo
                        <input type="text" onChange={deadlineDays} />
                    </label>

                </div>
                <button
                    onClick={() => { searchTermPay(deadlineDay); }}
                >
                    Siguiente
        </button>
            </div>

            <div className="row m-5 clause-question" id="question-6">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>6- Gasto, Transporte y Entrega</p>

                    <label htmlFor="">
                        lugar de entrega
                        <input type="text" onChange={site} />
                    </label>

                </div>
                <button
                    onClick={() => { searchSite(deliveryPlace); }}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default ContractData;
