import React from 'react';
import { Link } from 'react-router-dom';
import img from '../style/img/logoempresa.png'
import '../style/header.css'

const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src={img} alt="imagen" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse " id="navbarNavAltMarkup">
                    <div className="navbar-nav font">
                        <Link className="nav-item nav-link active m-3 text-center font" to="/">Inicio</Link>
                        <Link className="nav-item nav-link active m-3 text-center font" to="/reviewcontracts">Revisar Contratos</Link>
                        <Link className="nav-item nav-link active m-3 btn-yellow text-center font " to="/consolidatedcontracts">Consolidado de Contratos</Link>
                    </div>
                </div>
                <hr class="my-4"></hr>
            </nav>
        </header>
    )
}


export default Header;