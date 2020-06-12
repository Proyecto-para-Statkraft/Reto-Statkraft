import React, { useState, useEffect } from "react";
import img from '../img/image14.png';

const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice, searchPaymentMethod,
    searchTermPay, searchSite, searchRepresentative, searchHoursTime, searchoClauseThirteenth,
    searchClauseFourteenth, searchClauseSixteenth, searchClauseTwentienth, searchDate }) => {

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
    const [questionEnd, setQuestionEnd] = useState(false);


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

    const [optionClausesSixteenth, setOptionClauseSixteenth] = useState("");
    const optionClauseSixteenth = e => { setOptionClauseSixteenth(e.target.value) };



    const [optionClausesTwentieth, setOptionClauseTwentieth] = useState("");
    const optionClauseTwentieth = e => { setOptionClauseTwentieth(e.target.value) };


    const [days, setDays] = useState("");
    const day = e => { setDays(e.target.value) };

    const [months, setMonths] = useState("");
    const month = e => { setMonths(e.target.value) };


    const [years, setYears] = useState("");
    const year = e => { setYears(e.target.value) };



    return (
        <div id="contract-data">
            {
                (questionIntro) &&
                <div className="question-intro">
                    <div className="flex-column bd-highlight container-question">
                        <p className="text-center font-weight-bold">Datos de la empresa con la que estás contratando</p>
                        <label htmlFor="">
                            Nombre de la empresa
                        </label>
                        <input type="text" onChange={nameProvider} />
                        <label htmlFor=""> RUC </label>
                        <input type="text" onChange={rucProvider} />
                        <label htmlFor="">Dirección </label>
                        <input type="text" onChange={addressProvider} />
                        <br />
                        <p className="text-center font-weight-bold">Datos del representante de la empresa</p>
                        <label htmlFor="">
                            Nombre completo
                        </label>
                        <input type="text" onChange={representativeNameProvider} />
                        <label htmlFor="">
                            DNI
                        </label>
                        <input type="text" onChange={representativeDniProvider} />
                        <label htmlFor="">
                            Partida Electrónica N° (SUNARP)
                        </label>
                        <input
                            type="text"
                            onChange={representativeNumberRegistryProvider}
                        />
                    </div>

                    <div className="button-continue">
                        <button
                            onClick={() => {
                                search(providerData);
                                setQuestionIntro(false);
                                setQuestionFirst(true);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                    </button>
                    </div>
                </div>
            }
            {
                (questionFirst) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">1. Antecendente</p>
                    <label htmlFor="" className="text-center">
                        Nuestra empresa esta dedicada a la generación y comercialización de
                        energía eléctrica, que requiere:
                    </label>
                    <textarea placeholder="Detallar Servicio..."
                            onChange={product} id="textarea"></textarea>
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchDataAntecedentes(inputRequieres);
                                setQuestionSecond(true);
                                setQuestionFirst(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionSecond) &&
                <div className="row m-5 clause-question" id="question-2">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>2. Objeto</p>
                        <label htmlFor="">
                            Los bienes adquiridos se van a usar en:
                            <textarea type="text" onChange={sell} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchSellOption(sells);
                            setQuestionThird(true);
                            setQuestionSecond(false);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
               </button>
                </div>
            }

            {
                (questionThird) &&
                <div className="row m-5 clause-question" id="question-3">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>3. Precio</p>
                        <label htmlFor="">
                            El precio a pagar por los bienes adquiridos es :
                            <textarea type="text" placeholder="Ejm: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) " onChange={money} />
                        </label>

                    </div>
                    <button
                        onClick={() => {
                            searchPrice(moneys);
                            setQuestionQuarter(true);
                            setQuestionThird(false);
                        }}
                        class="btn btn-info"
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
                            <input className="m-3 radio" type="radio" value="soles" name="gender" />Nuevos Soles <br />
                            <input className="m-3 radio" type="radio" value="dolares" name="gender" />Dólares de los Estados Unidos de América
                    </div>
                    </div>
                    <button
                        onClick={() => {
                            searchPaymentMethod(typeMoneys);

                            setQuestionFifth(true);
                            setQuestionQuarter(false);
                        }}
                        class="btn btn-info"
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
                        class="btn btn-info"
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
                        class="btn btn-info"
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionSeventh) &&
                <div className="row m-5 clause-question" id="question-6">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>7. Administradores del Contrato </p>
                        <p>Los administradores del Contrato son:</p>
                        <label htmlFor="">
                            De Statkraft
                            <input type="text" onChange={companyRepresentative} />
                        </label>
                        <label htmlFor="">
                            De la empresa contratada
                            <input type="text" onChange={supplierRepresentative} />
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            searchRepresentative(representativeCompany, representativeSupplier);
                            setQuestionEighth(true);
                            setQuestionSeventh(false);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionEighth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>8. Exclusión de daños indirectos y responsabilidad</p>
                        <p>En caso de mal funcionamiento de los bienes adquiridos, el Proveedor deberá repararlos en un plazo no mayor a:</p>
                        <label htmlFor="">
                            Horas para Lima
                            <input type="text" onChange={numberHoursRepairLim} />
                        </label>
                        <label htmlFor="">
                            Horas para Provincia
                            <input type="text" onChange={numberHoursRepairProv} />
                        </label>
                        <label htmlFor="">
                            El plazo de garantía de los bienes es de:
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
                            setQuestionNineth(true);
                            setQuestionEighth(false);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionNineth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>9. Penalidades</p>
                        <p>El nivel de riesgo de seguridad es:</p>
                        <div className="m-3" onChange={optionClausesThirteenth}>
                            <label htmlFor="">
                                Bajo 13.2 (opcion1)
                                <input className="m-3 radio" type="radio" value="bajo" name="gender" />
                            </label>
                            <label htmlFor="">
                                Alto 13.2 (opcion2)
                                 <input className="m-3 radio" type="radio" value="alto" name="gender" />
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            searchoClauseThirteenth(optionClauseThirteenth);
                            setQuestionNineth(false);
                            setQuestionTenth(true);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
                    </button>
                </div>
            }
            {
                (questionTenth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>10. Garantías</p>
                        <p>¿Los bienes van a ser entregados en una de las centrales?</p>
                        <div className="m-3" onChange={optionClausesFourteenth}>
                            <input className="m-3 radio" type="radio" value="true" name="gender" />
                            Si<br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" />
                            No
                        </div>
                        <label htmlFor="">
                            Si su respuesta anterior es Si, rellene este campo.El monto de la póliza de responsabilidad civil extra contractual es:
                        <textarea name="" onChange={moneyPoliza}
                                placeholder="Ejm: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) "></textarea>
                        </label>

                    </div>
                    <button
                        onClick={() => {
                            searchClauseFourteenth(optionClauseFourteenth, moneysPoliza);
                            setQuestionEleventh(true);
                            setQuestionTenth(false);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
                    </button>
                </div>
            }
            {
                (questionEleventh) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>11. Subcontratación</p>

                        <p>¿La empresa contratada va a subcontratar y tiene el nombre de la empresa
                        con la que haria el subcontrato?
                        </p>
                        <div className="m-3" onChange={optionClauseSixteenth}>
                            <input className="m-3 radio" type="radio" value="true" name="gender" /> Si<br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" /> Si, pero no tiene el nombre <br />
                            <input className="m-3 radio" type="radio" value="false" name="gender" /> No<br />
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            searchClauseSixteenth(optionClausesSixteenth);
                            setQuestionEleventh(false);
                            setQuestionTwelfth(true);
                        }}
                        class="btn btn-info"
                    >
                        Siguiente
                </button>
                </div>
            }
            {
                (questionTwelfth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>12. Ética en los negocios</p>

                        <p>Riesgo de Compliance es</p>
                        <div className="m-3" onChange={optionClauseTwentieth}>
                            <input className="m-3 radio" type="radio" value="bajo" name="gender" /> Muy bajo<br />
                            <input className="m-3 radio" type="radio" value="medio" name="gender" />Medio <br />
                            <input className="m-3 radio" type="radio" value="alto" name="gender" /> Muy alto <br />
                        </div>
                        <button onClick={() => {
                            searchClauseTwentienth(optionClausesTwentieth);
                            setQuestionTwelfth(false);
                            setQuestionThirteenth(true);
                        }}
                            class="btn btn-info">
                            Siguiente
                     </button>
                    </div>
                </div>
            }
            {
                (questionThirteenth) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>13. Varios</p>

                        <p>Fecha en la que se suscribe el documento</p>
                        <label htmlFor="">
                            Dia
                        <input type="text" placeholder="23" onChange={day} />
                        </label>
                        <label htmlFor="">
                            Mes
                        <input type="text" placeholder="Junio" onChange={month} />
                        </label>
                        <label htmlFor="">
                            Mes
                        <input type="text" placeholder="2020" onChange={year} />
                        </label>
                    </div>
                    <button onClick={() => {
                        searchDate(days, months, years);
                        setQuestionThirteenth(false);
                        setQuestionEnd(true);
                    }}
                        class="btn btn-info">
                        Siguiente
                     </button>
                </div>

            }
            {
                (questionEnd) &&
                <div className="row m-5">
                    <div className="m-3 d-flex flex-column bd-highlight">
                        <p>¡Haz terminado de realizar tu contrato!</p>

                        <p>Si quieres tener el contrato que acabar de realizar puedes descargarlo en formato Word.</p>
                        <img src={img} alt="imagen" />
                    </div>
                </div>

            }
        </div >
    );
};

export default ContractData;

