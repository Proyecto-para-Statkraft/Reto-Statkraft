import React, { useState } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';

const OptionCompany = (props) => {

    const [selectedOption, setSelectedOption] = useState('');
    const optionEmpresa = e => {
        setSelectedOption(e.target.value);
    };
    
    return (

        <div>
            <Header />
            <div className="mt-5 d-flex justify-content-center">
                <div className="m-sm-1 col-sm-7">
                    <h5 className="mb-5">Elige la Empresa</h5>
                    <div className="m-3" onChange={optionEmpresa}>
                        <input className="mb-3 radio" type="radio" value="statkraft" name="gender" /> Statkraft Peru S.A <br />
                        <input className="mb-3 radio" type="radio" value="shaqsha" name="gender" /> Inversiones Shaqsha S.A.C. <br />
                        <input className="mb-3 radio" type="radio" value="nose" name="gender" /> No se cuál elegir

                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="col-sm-3  btn btn-primary "
                            to={{
                                pathname: "/empresa",
                                selectedOption,
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default OptionCompany;
