import React, { useState, useEffect } from "react";
import Header from "../componentes/Header";
import Table from 'react-bootstrap/Table';
import firebase from '../componentes/firebase.js';
import ResumenContracts from "./ResumenContracts";


const ConsolidatedContracts = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            await db.collection("resumenContrato")
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
            // console.log(data)
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Tipo de Contrato</th>
                        <th>Descripcion del Servicio</th>
                        <th>Monto del Contrato</th>
                        <th>Plazo</th>
                        <th>comprador</th>
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
    )
}


export default ConsolidatedContracts;

