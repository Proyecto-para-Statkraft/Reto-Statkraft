import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import './style/home.css'

const Home = () => {
    return (

        <div>
            <Header />
            <div className="m-5 d-flex justify-content-center ">
                <div className="borde col-sm-5">
                    <div className="text-center">
                        <h3 class="m-5">Empieza a crear tu contrato</h3>
                    </div>
                    <div className=" d-flex justify-content-center ">
                        <Link className="col-sm-6 mb-5 btn btn-primary btn-md btn-block" to="/">Empezar</Link>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center">Conoce nuestros 6 tipos de contratos</p>
                <div className="m-3 d-flex justify-content-center ">
                    <div class="card-deck">
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/ground-transportation.png" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Contrato de Transporte de Personal</p>
                            </div>
                        </div>
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/crane.png" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Contrato de Obra</p>
                            </div>
                        </div>
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/sell-property--v1.png" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Contrato de Compraventa</p>
                            </div>
                        </div>
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/home-automation.png" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Modelo CV + Instalación</p>
                            </div>
                        </div>
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/contract-job.png" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Contrato de Intermediación Laboral</p>
                            </div>
                        </div>
                        <div class="borde card style">
                            <img src="https://img.icons8.com/ios/100/000000/mortgage.png" class=" card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p class="card-title">Contrato Locación de Servicios</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;
