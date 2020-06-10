import React, { useState } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';

const NumberContracts = () => {


    const [number, setNumber] = useState('');

    const numberContract = e => {
        setNumber(e.target.value);
    };

    // console.log(number)
    return (

        <div>
            <Header />
            <p>Numero de contrato</p>
            <input type="text" onChange={numberContract} />

            <Link className="btn btn-primary m-3 "
                to={{
                    pathname: "/adenda",
                    number,
                }}>Siguiente</Link>

        </div>
    )
}

export default NumberContracts;




