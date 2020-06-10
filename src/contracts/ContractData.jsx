import React, { useState, useEffect } from "react";

const ContractData = ({ search }) => {


    const [companyData, setCompanyData] = useState({});
    const [providerData, setProviderData] = useState({});

    const [nameCompanyData, setNameCompanyData] = useState('');
    const [rucCompanyData, setRucCompanyData] = useState('');
    const [addressCompanyData, setAddressCompanyData] = useState('');
    const [representativesOneNameCompanyData, setRepresentativesOneNameCompanyData] = useState('');
    const [representativesOneDniCompanyData, setRepresentativesOneDniCompanyData] = useState('');
    const [representativesTwoNameCompanyData, setRepresentativesTwoNameCompanyData] = useState('');
    const [representativesTwoDniCompanyData, setRepresentativesTwoDniCompanyData] = useState('');


    const [nameProviderData, setNameProviderData] = useState('');
    const [rucProviderData, setRucProviderData] = useState('');
    const [addressProviderData, setAddressProviderData] = useState('');
    const [representativesNameProviderData, setRepresentativesNameProviderData] = useState('');
    const [representativesDniProviderData, setRepresentativesDniProviderData] = useState('');
    const [representativesNumberRegistryProviderData, setRepresentativesNumberRegistryProviderData] = useState('');

    const nameCompany = e => {
        setNameCompanyData(e.target.value);
    };

    const rucCompany = e => {
        setRucCompanyData(e.target.value);
    };

    const addressCompany = e => {
        setAddressCompanyData(e.target.value);
    };

    const representativeOneNameCompany = e => {
        setRepresentativesOneNameCompanyData(e.target.value);
    };

    const representativeOneDniCompany = e => {
        setRepresentativesOneDniCompanyData(e.target.value);
    };

    const representativeTwoNameCompany = e => {
        setRepresentativesTwoNameCompanyData(e.target.value);
    };

    const representativeTwoDniCompany = e => {
        setRepresentativesTwoDniCompanyData(e.target.value);
    };

    const nameProvider = e => {
        setNameProviderData(e.target.value);
    };

    const rucProvider = e => {
        setRucProviderData(e.target.value);
    };

    const addressProvider = e => {
        setAddressProviderData(e.target.value);
    };

    const representativeNameProvider = e => {
        setRepresentativesNameProviderData(e.target.value);
    };

    const representativeDniProvider = e => {
        setRepresentativesDniProviderData(e.target.value);
    };

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
                representativeTwoDni: representativesTwoDniCompanyData,
            });

            setProviderData({
                name: nameProviderData,
                ruc: rucProviderData,
                addres: addressProviderData,
                representativeName: representativesNameProviderData,
                representativeDni: representativesDniProviderData,
                numberRegistry: representativesNumberRegistryProviderData,
            })
        }
        data()
    }, [addressCompanyData, addressProviderData, nameCompanyData, nameProviderData, representativesDniProviderData, representativesNameProviderData, representativesNumberRegistryProviderData, representativesOneDniCompanyData, representativesOneNameCompanyData, representativesTwoDniCompanyData, representativesTwoNameCompanyData, rucCompanyData, rucProviderData]);


    return (
        <div>
            <div className="row m-5">
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la empresa Slatkraft</p>
                    <label htmlFor=""> Nombre de la empresa Stalkraft jeje <input type="text" onChange={nameCompany} /> </label>
                    <label htmlFor=""> RUC <input type="text" onChange={rucCompany} /> </label>
                    <label htmlFor=""> Direccion <input type="text" onChange={addressCompany} /> </label>
                    <p>Datos de representante uno</p>
                    <label htmlFor=""> Nombre Representante<input type="text" onChange={representativeOneNameCompany} /> </label>
                    <label htmlFor=""> Dni representante <input type="text" onChange={representativeOneDniCompany} /> </label>
                    <p>Datos de representante dos</p>
                    <label htmlFor=""> Nombre Representante <input type="text" onChange={representativeTwoNameCompany} /> </label>
                    <label htmlFor=""> Dni representante <input type="text" onChange={representativeTwoDniCompany} /> </label>
                </div>
                <div className="m-3 d-flex flex-column bd-highlight">
                    <p>Datos de la empresa Proveedor</p>
                    <label htmlFor=""> Nombre de la empresa <input type="text" onChange={nameProvider} /> </label>
                    <label htmlFor=""> RUC <input type="text" onChange={rucProvider} /> </label>
                    <label htmlFor=""> Direccion <input type="text" onChange={addressProvider} /> </label>
                    <p>Datos de representante uno</p>
                    <label htmlFor=""> Nombre Representante<input type="text" onChange={representativeNameProvider} /> </label>
                    <label htmlFor=""> Dni representante <input type="text" onChange={representativeDniProvider} /> </label>
                    <label htmlFor=""> Nombre Representante <input type="text" onChange={representativeNumberRegistryProvider} /> </label>
                </div>
            </div>
            <button onClick={() => { search(companyData, providerData) }}> Siguiente</button>

        </div>
    )
}

export default ContractData;

