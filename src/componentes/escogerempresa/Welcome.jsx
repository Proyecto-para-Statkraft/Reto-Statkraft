import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';

const Welcome = () => {


    const [nameServices, setnameServices] = useState("");
    const nameService = e => { setnameServices(e.target.value) };

    const [requiresServices, setRequiresServices] = useState("");
    const RequiresService = e => { setRequiresServices(e.target.value) };


    return (
        <div>
            <Header />
            <div className="mt-5 d-flex justify-content-center">
                <div className="m-sm-1 col-sm-7">
                    <p>¡Bienvenido a Contratos! </p>
                    <div>
                        <label htmlFor="">
                            Vamos a empezar, pero primero ¿cuál es tu nombre? </label>
                        <input type="text" onChange={nameService} />

                        <label htmlFor="">
                            ¿Cuál es el nombre de la persona que requiere el servicio?</label>
                        <input type="text" onChange={RequiresService} />
                    </div>
                </div>
                <div className="d-flex justify-content-end ">
                    <Link className="btn btn-primary m-3 "
                        to={{
                            pathname: "/optioncompany",
                            nameServices,
                            requiresServices
                        }}>Siguiente</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
