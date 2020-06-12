import React, { useState } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const Questions = (props) => {

    const [goods, setGoods] = useState('');


    const optionGoods = e => {
        setGoods(e.target.value);
    };

    const type = '';

    // const [type, setType] = useState('');

    // const typeContracts = [
    //     type
    // ];

    // localStorage.setItem('Tipo', JSON.stringify(typeContracts));

    // console.log('contrato selecionado', props.location.selectedOption)
    // console.log('respuesta', goods)

    if (props.location.selectedOption === 'bienes') {
        return (
            <div>
                <Header />
                <div className="mt-5 d-flex justify-content-center">
                    <div className="m-sm-1 col-sm-7">
                        <h5 className="mb-5">2. ¿También incluye instalación de bienes?</h5>
                        <div className="m-3 vista-radios" onChange={optionGoods}>
                            <input className="m-3 radio" type="radio" value="si" name="gender" /> Si <br />
                            <input className="m-3 radio" type="radio" value="no" name="gender" /> No
                        </div>
                        <div className=" d-flex justify-content-end ">
                            <Link className="col-sm-3  btn btn-primary"
                                to={{
                                    pathname: "/contractsgoods",
                                    goods,
                                    props
                                }}>Siguiente</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (props.location.selectedOption === 'transporte') {

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="margin-d  col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Transporte de Personal </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/ground-transportation.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-end">
                        <Link className="col-sm-3  btn btn-primary"
                            to={{
                                pathname: "/optioncompany",
                                props
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (props.location.selectedOption === 'vigilancia') {
        // setType('Intermediacion Laboral')
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="margin-d  col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Intermediación Laboral </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/contract-job.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-end">
                        <Link className="col-sm-3  btn btn-primary"
                            to={{
                                pathname: "/optioncompany",
                                props
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (props.location.selectedOption === 'alquiler') {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="margin-d col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Consulta con el Área Legal </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/scales--v1.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="d-flex justify-content-end">
                        <Link className="col-sm-3  btn btn-primary" to="/">Finalizar</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (props.location.selectedOption === 'construccion') {
        // setType('Obra')
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="margin-d col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Obra </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/crane.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-end">
                        <Link className="col-sm-3  btn btn-primary"
                            to={{
                                pathname: "/optioncompany",
                                props
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div >
        )
    }
    // setType('Locación y Servicios')
    return (
        < div >
            <Header />
            <div className="container">
                <div className="margin-d col-sm-10">
                    <div>
                        <h5 className="m-3">El contrato que debes utilizar es:</h5>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="borde fondo col-sm-5">
                            <div className="row mt-5 mb-4 ml-5">
                                <h4 className=" col-sm-6">Contrato de Locación y Servicios </h4>
                                <img src="https://img.icons8.com/ios/100/000000/crane.png" className=" col-sm-6 card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="m-5 d-flex justify-content-end">
                    <Link className="col-sm-3  btn btn-primary"
                        to={{
                            pathname: "/optioncompany",
                            props
                        }}>Siguiente</Link>
                </div>
            </div>
        </div >

    )
}

export default Questions;