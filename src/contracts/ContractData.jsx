import React, { useState, useEffect } from "react";
import img from '../img/image14.png';
import firebase from "../componentes/firebase.js";
import { Link } from 'react-router-dom';

const ContractData = ({ search, searchDataAntecedentes, searchSellOption, searchPrice, searchPaymentMethod,
    searchTermPay, searchSite, searchRepresentative, searchHoursTime, searchoClauseThirteenth,
    searchClauseFourteenth, searchClauseSixteenth, searchClauseTwentienth, searchDate, generateWord }) => {

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

    const storageName = JSON.parse(localStorage.getItem('Usariocomprador'))

    const onCreate = () => {
        console.log('aqui toy')
        const db = firebase.firestore();
        db.collection("resumenContrato").add({
            tipo: 'Compra Venta',
            descripcion: inputRequieres,
            monto: moneys,
            plazo: timeAfterDeliveryFechayHora,
            usuyser: storageName
        })
    };

    return (
        <div id="contract-data">
            {
                (questionIntro) &&
                <div className="question-intro">
                    <div className="flex-column bd-highlight container-question">
                        <p className="text-center font-weight-bold">Datos de la empresa proveedora</p>
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
                            className="btn btn-info"
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
                <div className="container-question">
                    <p className="text-center font-weight-bold">2. Objeto</p>
                    <label htmlFor="" className="text-center">
                        Los bienes adquiridos se van a usar en:
                        </label>
                    <textarea type="text" onChange={sell} id="textarea" />
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchSellOption(sells);
                                setQuestionThird(true);
                                setQuestionSecond(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }

            {
                (questionThird) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">3. Precio</p>
                    <label htmlFor="" className="text-center">
                        El precio a pagar por los bienes adquiridos es :
                        </label>
                    <textarea type="text" id="textarea" placeholder="Ejemplo: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) " onChange={money} />
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchPrice(moneys);
                                setQuestionQuarter(true);
                                setQuestionThird(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionQuarter) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">4. Formas y Condiciones de pago</p>
                    <div onChange={TypeMoney}>
                        <p className="text-center">La moneda pactada para el precio es : </p>
                        <input className="m-3 radio" type="radio" value="soles" name="gender" />Nuevos Soles <br />
                        <input className="m-3 radio" type="radio" value="dolares" name="gender" />Dólares de los Estados Unidos de América
                    </div>
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchPaymentMethod(typeMoneys);
                                setQuestionFifth(true);
                                setQuestionQuarter(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                    </button>
                    </div>
                </div>
            }
            {
                (questionFifth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">5. Plazo de entrega de los bienes</p>
                    <label htmlFor="" className="text-center">
                        El plazo de entrega de los bienes adquiridos es:
                    </label>
                    <input type="text" onChange={deadlineDays} placeholder="Ejemplo: 10 semanas" />
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchTermPay(deadlineDay);
                                setQuestionSixth(true);
                                setQuestionFifth(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionSixth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">6. Gastos, transporte y entrega</p>
                    <label htmlFor="" className="text-center">
                        El lugar de entrega de los bienes adquiridos es:
                    </label>
                    <input type="text" onChange={site} placeholder="Escribir aquí" />
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchSite(deliveryPlace);
                                setQuestionSeventh(true);
                                setQuestionSixth(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                    </button>
                    </div>
                </div>
            }
            {
                (questionSeventh) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">7. Administradores del Contrato </p>
                    <p className="text-center">Los administradores del Contrato son:</p>
                    <label htmlFor="" className="text-center">
                        De Statkraft o subsidiaria:
                    </label>
                    <input type="text" onChange={companyRepresentative} />
                    <label htmlFor="" className="text-center">
                        De la empresa proveedora:
                    </label>
                    <input type="text" onChange={supplierRepresentative} />
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchRepresentative(representativeCompany, representativeSupplier);
                                setQuestionEighth(true);
                                setQuestionSeventh(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionEighth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">8. Exclusión de daños indirectos y responsabilidad</p>
                    <p className="text-center">
                        En caso de mal funcionamiento de los bienes adquiridos, el Proveedor deberá
                        repararlos en un plazo no mayor a:
                    </p>
                    <label htmlFor="" className="text-center">Horas para Lima</label>
                    <input type="text" onChange={numberHoursRepairLim} />
                    <label htmlFor="" className="text-center">Horas para Provincia</label>
                    <input type="text" onChange={numberHoursRepairProv} />
                    <label htmlFor="" className="text-center">El plazo de garantía de los bienes es de:</label>
                    <input type="text" onChange={timeAfterDeliveryFecha} />
                    <div className="button-continue">
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
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionNineth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">9. Penalidades</p>
                    <p className="text-center">El nivel de riesgo de seguridad es:</p>
                    <div className="div-radio-button" onChange={optionClausesThirteenth}>
                        <div>
                            <input className="m-3 radio" type="radio" value="bajo" name="gender" />
                            <label htmlFor="" className="text-center">Bajo 13.2 (opcion1)</label>
                        </div>
                        <div>
                            <input className="m-3 radio" type="radio" value="alto" name="gender" />
                            <label htmlFor="" className="text-center">Alto 13.2 (opcion2)</label>
                        </div>
                        <div className="button-continue">
                            <button
                                onClick={() => {
                                    searchoClauseThirteenth(optionClauseThirteenth);
                                    setQuestionNineth(false);
                                    setQuestionTenth(true);
                                }}
                                class="btn btn-info"
                            >
                                CONTINUAR
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                (questionTenth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">10. Garantías</p>
                    <p className="text-center">¿Los bienes van a ser entregados en una de las centrales?</p>
                    <div onChange={optionClausesFourteenth}>
                        <input className="m-3 radio" type="radio" value="true" name="gender" />
                        <label htmlFor="" className="text-center">Sí</label>
                        <input className="m-3 radio" type="radio" value="false" name="gender" />
                        <label htmlFor="" className="text-center">No</label>
                    </div>
                    <label htmlFor="" className="text-center">
                        Si su respuesta anterior es "Sí", rellene el siguiente campo con la respuesta al
                        siguiente enunciado: El monto de la póliza de responsabilidad civil extra contractual
                        es...
                    </label>
                    <textarea name="" onChange={moneyPoliza} id="textarea"
                        placeholder="Ejemplo: US$ 67,274.36 (Sesenta y Siete Mil Doscientos Setenta y Cuatro con 36/100 Dólares de los Estados Unidos de América) ">
                    </textarea>
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchClauseFourteenth(optionClauseFourteenth, moneysPoliza);
                                setQuestionEleventh(true);
                                setQuestionTenth(false);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                    </button>
                    </div>
                </div>
            }
            {
                (questionEleventh) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">11. Subcontratación</p>
                    <p className="text-center">
                        ¿La empresa contratada va a subcontratar? De ser así, ¿Conoce el nombre de la empresa
                        con la que haría el subcontrato?
                    </p>
                    <div className="m-3" onChange={optionClauseSixteenth}>
                        <input className="m-3 radio" type="radio" value="true" name="gender" /> Sí<br />
                        <input className="m-3 radio" type="radio" value="false" name="gender" /> Sí, pero desconoce el nombre.<br />
                        <input className="m-3 radio" type="radio" value="false" name="gender" /> No<br />
                    </div>
                    <div className="button-continue">
                        <button
                            onClick={() => {
                                searchClauseSixteenth(optionClausesSixteenth);
                                setQuestionEleventh(false);
                                setQuestionTwelfth(true);
                            }}
                            class="btn btn-info"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionTwelfth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">12. Ética en los negocios</p>
                    <p className="text-center">Riesgo de Compliance es</p>
                    <div className="m-3" onChange={optionClauseTwentieth}>
                        <input className="m-3 radio" type="radio" value="bajo" name="gender" /> Muy bajo<br />
                        <input className="m-3 radio" type="radio" value="medio" name="gender" />Medio <br />
                        <input className="m-3 radio" type="radio" value="alto" name="gender" /> Muy alto <br />
                    </div>
                    <div className="button-continue">
                        <button onClick={() => {
                            searchClauseTwentienth(optionClausesTwentieth);
                            setQuestionTwelfth(false);
                            setQuestionThirteenth(true);
                        }}
                            class="btn btn-info">
                            CONTINUAR
                        </button>
                    </div>
                </div>
            }
            {
                (questionThirteenth) &&
                <div className="container-question">
                    <p className="text-center font-weight-bold">13. Varios</p>
                    <p className="text-center">Indique la fecha en la que se suscribe el documento</p>
                    <label htmlFor="" className="text-center">Día</label>
                    <input type="text" placeholder="23" onChange={day} />
                    <label htmlFor="" className="text-center">Mes</label>
                    <input type="text" placeholder="Junio" onChange={month} />
                    <label htmlFor="" className="text-center">Año</label>
                    <input type="text" placeholder="2020" onChange={year} />
                    <div className="button-continue">
                        <button onClick={() => {
                            searchDate(days, months, years);
                            setQuestionThirteenth(false);
                            setQuestionEnd(true);
                        }}
                            class="btn btn-info">
                            CONTINUAR
                     </button>
                    </div>
                </div>
            }
            {
                (questionEnd) &&
                <div className="container-question">
                    <p className="text-center titleWelcome">¡Haz terminado de realizar tu contrato!</p>
                    <p className="text-center">Si desea puede descargarlo en formato Word.</p>
                    <img src={img} alt="imagen" />
                    <div className="row mt-3">
                        <div className="col-sm-6"><button id="btn-export" className="btn btn-info" onClick={generateWord}>DESCARGAR EN WORD</button></div>
                        <div className="col-sm-6"><button id="btn-export" className="btn btn-info" onClick={onCreate}> GUARDAR</button></div>
                        <div className="col-sm-6"><Link id="btn-export" className="btn btn-info" to="/" >FINALIZAR</Link></div>

                    </div>
                </div>
            }
        </div >
    );
};

export default ContractData;

