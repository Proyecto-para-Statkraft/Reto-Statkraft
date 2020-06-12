import React, { useState, useEffect, Fragment } from "react";
import Header from "../componentes/Header";
import Table from 'react-bootstrap/Table';
import firebase from '../componentes/firebase.js';
import ResumenContracts from "./ResumenContracts";


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
            <div className="m-5"></div>
            <div className="m-5">
                <h3>Contratos</h3>
                <Table striped bordered hover>
                    <thead className="m-5 border border-info ">
                        <tr className="m-5 table-info" >
                            <th>N.</th>
                            <th>Tipo de Contrato</th>
                            <th>Descripcion del Servicio</th>
                            <th>Monto del Contrato</th>
                            <th>Plazo</th>
                            <th>Comprador</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>

                        {spells.map(doc =>
                            <ResumenContracts key={doc.id} data={doc} />
                        )
                        }

                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}


export default ConsolidatedContracts;

