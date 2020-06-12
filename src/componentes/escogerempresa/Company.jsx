import React, { useState } from 'react';
import Header from "../Header";
import { Link } from 'react-router-dom';
import MakeContract from '../../contracts/MakeContract';

const Company = (props) => {

    // console.log('datos tipo y nombre', props)

    const [data, setData] = useState('');
    const selection = e => { setData(e.target.value) };

    const Stakraft = {
        name: 'STATKRAFT PERU S.A.',
        ruc: 20269180731,
        address: 'AV. FELIPE PARDO Y ALIAGA NRO. 652 INT. 203 RES. PISO 2 - LIMA - LIMA - SAN ISIDRO',
        representativesOne: {
            name: 'Juan Antonio Rozas Mory',
            dni: '07867123',
        },
        representativesTwo: {
            name: 'Álvaro Antonio Porturas Ingunza',
            dni: '09340737',
        }
    }

    const Shaqsha = {
        name: 'INVERSIONES SHAQSHA S.A.C.',
        ruc: 20600170512,
        address: 'AV. FELIPE PARDO Y ALIAGA NRO. 652 INT. 203 RES. PISO 2 - LIMA - LIMA - SAN ISIDRO',
        representativesOne: {
            name: 'Juan Antonio Rozas Mory',
            dni: '07867123',
        },
        representativesTwo: {
            name: 'Álvaro Antonio Porturas Ingunza',
            dni: '09340737',
        }
    }


    // console.log('contrato selecionado', props.location.goods)

    if (props.location.selectedOption === 'statkraft') {
        return (
            <MakeContract companyData={Stakraft} />
        )
    }
    if (props.location.selectedOption === 'shaqsha') {
        return (
            <MakeContract companyData={Shaqsha} />
        )
    }


    return (
        <div>
            <Header />
            <div className="m-4 d-flex justify-content-center">
                <div className="m-sm-1 col-sm-7">
                    <h5 className="mb-5">El servicio...</h5>
                    <div className="m-3" onChange={selection}>
                        <input className="m-3 radio" type="radio" value="pariac" name="gender" /> Es para Pariac <br />
                        <input className="m-3 radio" type="radio" value="cobriza" name="gender" /> Es para Cobriza <br />
                        <input className="m-3 radio" type="radio" value="trabajadores" name="gender" /> Involucra trabajadores de Inversiones Shaqsha o que estén en CH Pariac <br />
                        <input className="m-3 radio" type="radio" value="involucra" name="gender" /> Involucra a Shaqsha, Statkraft o Pariac y más centrales <br />
                        <input className="m-3 radio" type="radio" value="solo" name="gender" /> Es solo Statkraft <br />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <Link className="btn btn-primary m-3 "
                            to={{
                                pathname: "/selectcompany",
                                data,
                            }}>Siguiente</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Company;