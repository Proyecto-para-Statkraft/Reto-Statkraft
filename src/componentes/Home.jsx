import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className="r">
            <Header />
            <div className="d-flex justify-content-center ">
                <div class="jumbotron col-sm-4 text-center">
                    <h1 class="display-7">Empieza a crear tu contrato</h1>
                    <Link className="btn btn-primary" to="/">Empezar</Link>
                </div>
            </div>
            <div className="text-center">
                <p>Conoce nuestros 6 tipos de contratos</p>
                <br />
            </div>
            <div>
                <div class="card-deck">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo Locación de Servicios</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo Compraventa</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo Transporte</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo Intermediación Laboral</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo Contrato de Obra</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Modelo CV + Instalación</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
