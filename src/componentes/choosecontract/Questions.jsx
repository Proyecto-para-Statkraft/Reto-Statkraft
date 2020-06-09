import React, { useState } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const Questions = (prosp) => {

    const [goods, setGoods] = useState('');


    const optionGoods = e => {
        setGoods(e.target.value);
    };


    console.log('contrato selecionado', prosp.location.selectedOption)
    console.log('respuesta', goods)

    if (prosp.location.selectedOption === 'bienes') {
        return (
            <div>
                <Header />
                <div className="m-4 d-flex justify-content-center">
                    <div className="m-sm-1 col-sm-7">
                        <h5 className="mb-5">"2- ¿Parte del servicio es instalacion de bienes?</h5>
                        <div className="m-3" onChange={optionGoods}>
                            <input className="m-3 radio" type="radio" value="si" name="gender" /> Si <br />
                            <input className="m-3 radio" type="radio" value="no" name="gender" /> No
                    </div>
                        <div className=" d-flex justify-content-end ">
                            <Link className="btn btn-primary m-3 "
                                to={{
                                    pathname: "/contractsgoods",
                                    goods,
                                }}>Siguiente</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (prosp.location.selectedOption === 'transporte') {

        return (
            <div>
                <Header />
                <div className="m-5">
                    <div className="m-5 col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 class=" col-sm-6">Contrato de Transporte de Personal </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/ground-transportation.png" class=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-around">
                        <Link className="col-sm-3 btn btn-outline-primary " to="/reviewcontracts">Anterior</Link>
                        <Link className="col-sm-3  btn btn-primary " to="/">Crear Contrato</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (prosp.location.selectedOption === 'vigilancia' || prosp.location.selectedOption === 'personas') {

        return (
            <div>
                <Header />
                <div className="m-5">
                    <div className="m-5 col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 class=" col-sm-6">Contrato de Intermediación Laboral </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/contract-job.png" class=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-around">
                        <Link className="col-sm-3 btn btn-outline-primary " to="/reviewcontracts">Anterior</Link>
                        <Link className="col-sm-3  btn btn-primary " to="/">Crear Contrato</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (prosp.location.selectedOption === 'construccion') {

        return (
            <div>
                <Header />
                <div className="m-5">
                    <div className="m-5 col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 class=" col-sm-6">Contrato de Obra </h4>
                                    <img src="https://img.icons8.com/ios/100/000000/crane.png" class=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-around">
                        <Link className="col-sm-3 btn btn-outline-primary " to="/reviewcontracts">Anterior</Link>
                        <Link className="col-sm-3  btn btn-primary " to="/">Crear Contrato</Link>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div>
            <Header />
            <div className="m-4 d-flex justify-content-center">
                <div className="m-sm-1 col-sm-7">
                    <h5 className="mb-5">"2- ¿Es alquiler?</h5>
                    <div className="m-3" onChange={optionGoods}>
                        <input className="m-3 radio" type="radio" value="sii" name="gender" /> Si <br />
                        <input className="m-3 radio" type="radio" value="noo" name="gender" /> No
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="btn btn-primary m-3 "
                            to={{
                                pathname: "/contractsgoods",
                                goods,
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Questions;