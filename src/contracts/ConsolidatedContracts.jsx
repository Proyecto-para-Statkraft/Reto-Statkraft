import React, { useState, useEffect, Fragment } from "react";
import Header from "../componentes/Header";
import Table from 'react-bootstrap/Table';
import firebase from '../componentes/firebase.js';
import ResumenContracts from "./ResumenContracts";
import { exportHTML } from '../generateWord';
import '../style/consolidatedcontracts.css';


const ConsolidatedContracts = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            await db.collection("resumenContrato").orderBy('fecha', 'desc')
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
            // console.log(data)
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            <Header />
            <div className="m-2 container-table-contracts">
                <h3 className="text-center">Contratos</h3>
                <section id="table" className="table-responsive-sm">
                    <Table striped bordered hover className="table-bordered">
                        <thead className="m-5 border border-info ">
                            <tr className="m-5 table-info" >
                                <th>N° Contrato</th>
                                <th>Tipo de Contrato</th>
                                <th>Descripcion del Servicio</th>
                                <th>Monto del Contrato</th>
                                <th>Plazo</th>
                                <th>Comprador</th>
                                <th>Usuario</th>
                            </tr>
                        </thead>
                        <tbody>

                            {spells.map((doc, index) =>
                                <ResumenContracts key={doc.id} data={doc} index={index} />
                            )
                            }

                        </tbody>
                    </Table>
                </section>
                <div className="div-button-print">
                    <button id="btn-export" className="btn btn-info" onClick={() => exportHTML('table')}>DESCARGAR EN WORD</button>
                </div>
            </div>
        </Fragment>
    )
}


export default ConsolidatedContracts;

