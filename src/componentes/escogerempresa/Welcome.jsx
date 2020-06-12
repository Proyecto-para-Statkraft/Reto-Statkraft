import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';


const Welcome = () => {

    const [nameServices, setnameServices] = useState("");
    const nameService = e => { setnameServices(e.target.value) };

    const [requiresServices, setRequiresServices] = useState("");
    const RequiresService = e => { setRequiresServices(e.target.value) };

    const usariocomprador = [
        nameServices,
        requiresServices
    ];
    localStorage.setItem('Usariocomprador', JSON.stringify(usariocomprador));

    return (
        <div>
            <Header />
            <div className="pt-5 container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <p className="text-center mb-5 titleWelcome">¡Bienvenido a +Lett! </p>
                        <div>
                            <p className="mb-2">Vamos a empezar, pero primero ¿cuál es tu nombre? </p>
                            <input className="input-class" type="text" onChange={nameService} />
                        </div>
                        <div className="mt-4">
                            <p>¿Cuál es el nombre de la persona que requiere el servicio? </p>
                            <input className="input-class" type="text" onChange={RequiresService} />
                        </div>
                        <div className="row justify-content-end mt-5">
                            <Link className="col-sm-3  btn btn-primary"
                                to={{
                                    pathname: "/chooseContract",
                                    nameServices,
                                    requiresServices
                                }}>Continuar</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
