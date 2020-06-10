import React, {useState} from "react";
import AdendaIntroduction from "./AdendaIntroduction";
import firebase from './firebase.js';

// import FirstSection from "./FirstSection";
// import SecondSection from "./SecondSection";
// import ThirdSection from "./ThirdSection";
// import firebase from "./firebase";

const adendaData = {
    numberAdenda:'PRIMERA',
    nameContract:'COMPRAVENTA E INSTALACIÓN SKP-450026438',
    representativeOne:'Álvaro Antonio PorturasIngunza,',
    dniOne:'09340737',
    representativeTwo:'Miguel Antonio Castro Peña,',
    dniTwo:'40286317',
    business:'IBM DEL PERÚ S.A.C.,',
    rucBusiness:' 20100075009,',
    directionBusiness:'n Av. Javier Prado Este 6230, LaRiviera de Monterrico, La Molina',
    representativeBusiness:' María Eugenia Basauri Parra',
    dniBusiness:'10613966',
    partidaElectronica:'11013475',
    nameX:'“LOCADOR”',


}


const [adendaData, setSpells] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data= await db.collection("adendaData")
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
                    console.log(data)
        };
        fetchData();
    }, []);


// const [equipo, setEquipo] = React.useState(null);
// React.useEffect(()=>{
//     console.log('use')
//     // obtenerDatos()
//     const fetchData = async () => {
//         const db = firebase.firestore();
//         const data = await db.collection("adendaData").get();
//         console.log(data)
//     };
//     fetchData();

// },[])

// const obtenerDatos = async () => {
//     const data = await fetch('')
//     const users= await data.json()
//     console.log(users)

    
// }


function AdendaComplete(){

    return (
        <div>
            <AdendaIntroduction numberAdenda={adendaData.numberAdenda} nameContract={adendaData.nameContract} 
            representativeOne={adendaData.representativeOne} dniOne={adendaData.dniOne}
            representativeTwo={adendaData.representativeTwo} dniTwo={adendaData.dniTwo}
            business={adendaData.business} rucBusiness={adendaData.rucBusiness} directionBusiness={adendaData.directionBusiness}
            representativeBusiness={adendaData.representativeBusiness} dniBusiness={adendaData.dniBusiness} 
            partidaElectronica={adendaData.partidaElectronica} nameX={adendaData.nameX}/>
            {/* <FirstSection/>
            <SecondSection/>
            <ThirdSection/>  */}
        </div>
    )
}


export default AdendaComplete;