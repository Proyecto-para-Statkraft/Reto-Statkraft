import React, { useEffect, useState } from "react";
import Header from "../Header";
import AdendaComplete from "./AdendaComplete";
import firebase from '../firebase.js';

const Adenda = (props) => {

    // console.log('numero', props.location.number)
    const number = props.location.number;

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("adendaData")
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
            console.log(data)
        };
        fetchData();
    }, []);

    // console.log('spell', spells)



    return (

        <div>
            <Header />
            {spells.filter(doc => doc.codeContract === number)
                .map(doc =>
                    <AdendaComplete data={doc} />
                )
            }

        </div>
    )
}

export default Adenda;
