import React, { useState } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import '../../style/chosecontracts.css'

const ReviewContracts = () => {
    const [selectedOption, setSelectedOption] = useState('');


    const optionContracts = e => {
        setSelectedOption(e.target.value);
    };

    console.log(selectedOption)
    return (

        <div>
            <Header />
            <div className="mt-5 d-flex justify-content-center">
                <div className="m-sm-1 col-sm-7">
                    <h5 className="mb-5">1. ¿Qué es lo que vas a contratar?</h5>
                    <div className="m-3 vista-radios" onChange={optionContracts}>
                        <input className="mb-3 radio" type="radio" value="bienes" name="gender" /> <span className="ml-3">Adquisición de Bienes</span> <br />
                        <input className="mb-3 radio" type="radio" value="transporte" name="gender" /> <span className="ml-3">Trasporte Personal</span><br />
                        <input className="mb-3 radio" type="radio" value="vigilancia" name="gender" /><span className="ml-3">Vigilancia, limpieza o jardineria en nuestras instalaciones </span> <br />
                        <input className="mb-3 radio" type="radio" value="alquiler" name="gender" /> <span className="ml-3">Alquiler </span><br />
                        <input className="mb-3 radio" type="radio" value="construccion" name="gender" /> <span className="ml-3">Construcción de una infrastructura</span> <br />
                        <input className=" radio" type="radio" value="otro" name="gender" /><span className="ml-3">Otro tipo no descrito antes</span> 
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="col-sm-3  btn btn-primary"
                            to={{
                                pathname: "/questions",
                                selectedOption,
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ReviewContracts;
