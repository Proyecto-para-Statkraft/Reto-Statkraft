import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import '../style/home.css'

const Home = () => {
    return (
        <div className="view-home">
            <Header />
            <div className="m-5 d-flex justify-content-center banner-contract">
                <div className="borde col-sm-5 banner-text">
                    <div className="text-center">
                        <h3 className="m-5">Empieza a crear tu contrato</h3>
                    </div>
                    <div className=" d-flex justify-content-center ">
                        <Link className="col-sm-6 mb-5 btn btn-primary btn-md btn-block" to="/makecontract">Empezar</Link>
                    </div>
                </div>
            </div>
            <div className="section-types-contracts">
                <p className="text-center contract-subtitle">Conoce nuestros 6 tipos de contratos</p>
                <div className="m-3 d-flex justify-content-center cards-type-contracts">
                    <div className="card-deck justify-content-center">
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/ground-transportation.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Transporte de Personal</p>
                            </div>
                        </div>
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/crane.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Obra</p>
                            </div>
                        </div>
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/sell-property--v1.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Compraventa</p>
                            </div>
                        </div>
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/home-automation.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Modelo CV + Instalación</p>
                            </div>
                        </div>
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/contract-job.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Intermediación Laboral</p>
                            </div>
                        </div>
                        <div className="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/mortgage.png" className=" card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato Locación de Servicios</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;
