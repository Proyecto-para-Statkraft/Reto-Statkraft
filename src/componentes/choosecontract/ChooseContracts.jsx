import React, { useState } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import '../../style/chosecontracts.css'

const ReviewContracts = (props) => {
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
                    <h5 className="mb-5">1- ¿Qué es lo que vas a contratar?</h5>
                    <div className="m-3" onChange={optionContracts}>
                        <input className="mb-3 radio" type="radio" value="bienes" name="gender" /> Adquisición de Bienes <br />
                        <input className="mb-3 radio" type="radio" value="transporte" name="gender" /> Trasporte Personal<br />
                        <input className="mb-3 radio" type="radio" value="vigilancia" name="gender" /> Vigilancia, limpieza o jardineria en nuestras instalaciones <br />
                        <input className="mb-3 radio" type="radio" value="alquiler" name="gender" /> Alquiler <br />
                        <input className="mb-3 radio" type="radio" value="construccion" name="gender" /> Construcción de una infrastructura <br />
                        <input className=" radio" type="radio" value="otro" name="gender" /> Otro tipo no descrito antes
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="btn btn-primary m-3 "
                            to={{
                                pathname: "/questions",
                                selectedOption,
                                props
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ReviewContracts;
