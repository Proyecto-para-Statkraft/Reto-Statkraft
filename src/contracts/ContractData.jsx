import React, { useState, useEffect } from "react";

const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice,
    searchPaymentMethod, searchTermPay, searchSite, searchAnexoTench, searchRepresentative,
    searchHoursTime }) => {

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

    const [inputRequieres, setInputRequiere] = useState("");
    const product = e => {
        setInputRequiere(e.target.value);
    };
    // const [inputRequieresen, setInputRequiereEn] = useState("");
    // const place = e => {
    //     setInputRequiereEn(e.target.value);
    // };

    const [options, setOption] = useState("");
    const option = e => {
        setOption(e.target.value);
    };

    const [sells, setSells] = useState("");
    const sell = e => {
        setSells(e.target.value);
    };

    const [clause35, setClause35] = useState("");
    const clausePrice = e => {
        setClause35(e.target.value);
    };

    const [moneys, setMoneys] = useState("");
    const money = e => {
        setMoneys(e.target.value);
    };

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
            <div className="row m-5 ">
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
                    }}
                >
                    CONTINUAR
                </button>
            </div>

            <div className="row m-5">
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
                        searchDataAntecedentes(inputRequieres);
                    }}
                >
                    
                    Siguiente
                </button>
            </div>
            
            <div className="row m-5">
                <p>2. Objeto</p>
                <label htmlFor="">
                    Los bienes adquiridos se van a usar en:
                    <textarea type="text" onChange={sell} placeholder="Escribir aquí" />
                </label>
                <button
                    // onClick={() => {
                        
                    // }}
                >
                    Siguiente
                </button>
            </div>
            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <h1>ESCOGE CLAUSULA</h1>
                    <div className="m-3" onChange={option}>
                        <input
                            className="m-3 radio"
                            type="radio"
                            value="true"
                            name="gender"
                        />
                        2.3 Las partes podrán acordar la variación del alcance del objeto
                        del contrato hasta en un 15% del monto señalado en la Cláusula 3.1
                        con un tope máximo de USD 30,000.00 (Treinta mil y 00/100 Dólares de
                        Estados Unidos de América) mediante la suscripción de una Orden de
                        Variación, de acuerdo al formato que obra en el Anexo N° 3. En caso
                        la variación sea por un monto mayor, las partes suscribirán la
                        adenda correspondiente. <br />
                        <input
                            className="m-3 radio"
                            type="radio"
                            value="false"
                            name="gender"
                        />
                        2.3 (Cláusula Intencionalmente dejada en blanco por las partes)
                    </div>
                </div>
                <button
                    onClick={() => {
                        searchSellOption(sells, options)
                        setOption('');
                    }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>3. Precio</p>
                    <label htmlFor="">
                        El precio a pagar por los bienes adquiridos es :
                        <textarea type="text" 
                                    placeholder="Ejm: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) " 
                                    onChange={money} />
                    </label>

                    <h1>ESCOGE CLAUSULA</h1>
                    <div className="m-3" onChange={clausePrice}>
                        <input
                            className="m-3 radio"
                            type="radio"
                            value="true"
                            name="gender"
                        />
                        3.5 Las partes acuerdan que en caso sea necesaria la adquisición de bienes adicionales
                            estos se facturarán de acuerdo a lo señalado en el Anexo N° 2, para ello COMPAÑIA>
                            deberá enviar al <span>LOCADOR</span> una Orden de Variación de acuerdo al formato y
                            condiciones señaladas en el Anexo N° 3. <br />
                        <input
                            className="m-3 radio"
                            type="radio"
                            value="false"
                            name="gender"
                        />
                        3.5 (Cláusula Intencionalmente dejada en blanco por las partes)
                    </div>
                </div>
                <button
                    onClick={() => {
                        searchPrice(clause35, moneys);
                    }}
                >
                    Siguiente
                </button>
            </div>

            <div className="row m-5">
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

            <div className="row m-5">
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

            <div className="row m-5">
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
