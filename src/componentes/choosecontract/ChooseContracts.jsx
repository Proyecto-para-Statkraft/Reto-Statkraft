import React, { useState } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import '/home/lizbethj/Desktop/Slatkratf/Reto-Statkraft/src/style/chosecontracts.css'

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
                    <h5 className="mb-5">1- El servicio que vas a adquirir es/son</h5>
                    <div className="m-3" onChange={optionContracts}>
                        <input className="mb-3 radio" type="radio" value="bienes" name="gender" /> Bienes <br />
                        <input className="mb-3 radio" type="radio" value="transporte" name="gender" /> Trasporte Personal<br />
                        <input className="mb-3 radio" type="radio" value="vigilancia" name="gender" /> Vigilancia, limpieza o jardineria y se va a dar en instalaciones de Statkraft <br />
                        <input className="mb-3 radio" type="radio" value="personas" name="gender" /> Para que 10 o mas personas realicen un trabajo complementario en Stathraft en contacto directo con personal de Statkraft y permanente en Statkraft <br />
                        <input className="mb-3 radio" type="radio" value="construccion" name="gender" /> Solo la construccion de una infraestructura <br />
                        <input className=" radio" type="radio" value="otro" name="gender" /> Otro tipo no descrito antes
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="btn btn-primary m-3 "
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
