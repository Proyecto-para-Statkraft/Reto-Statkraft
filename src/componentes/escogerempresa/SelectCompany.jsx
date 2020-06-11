import React from 'react';
import MakeContract from '../../contracts/MakeContract';
import { Link } from 'react-router-dom';
import Header from "../Header";

const SelectCompany = (props) => {

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

    if (props.location.data === 'pariac' || props.location.data === 'cobriza' || props.location.data === 'trabajadores') {
        return (
            <MakeContract companyData={Shaqsha} />
        )
    }
    if (props.location.data === 'shaqsha') {
        return (
            <MakeContract companyData={Stakraft} />
        )
    } return (
        <div>
            <Header />
            <div className="m-5">
                <div className="m-5 col-sm-10">
                    <div>
                        <h5 className="m-3">Tienes que hacer una</h5>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="borde fondo col-sm-5">
                            <div className="row mt-5 mb-4 ml-5">
                                <h4 className=" col-sm-6">Consulta con el Área Legal</h4>
                                <img src="https://img.icons8.com/ios/100/000000/scales--v1.png" className=" col-sm-6 card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="m-5 d-flex justify-content-around">
                    <Link className="col-sm-3 btn btn-outline-primary " to="/">Anterior</Link>
                    <Link className="col-sm-3  btn btn-primary " to="/">Finalizar</Link>
                </div>
            </div>
        </div >

    )
}

export default SelectCompany;