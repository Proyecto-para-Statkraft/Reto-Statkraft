import React, {useState} from 'react';
import { Route } from "react-router-dom";
import ViewIntro from '../RoutesContracts/PathsBuyAndSell/ViewIntro';
import ViewFirst from '../RoutesContracts/PathsBuyAndSell/ViewFirst';


const MakeContract = ({match}) => {
    const [data, setData] = useState('')
    const [antecedente, setAntecedente] = useState('');
    const [sectionSecond, setSectionSecond] = useState('');
    const [sectionThird, setSectionThird] = useState('');

    const searchData = (companyData, providerData) => {
        setData({ companyData, providerData });
    }

    const searchAntecedente = (product, place) => {
        setAntecedente({ product, place })
    }

    const searchObjeto = (sell) => {
        setSectionSecond({ sell })
    }

    const searchPrice = (moneys) => {
        setSectionThird({ moneys })
    }

    return (
        <div>
        <Route
        path={match.url + '/question-intro'}
        render={() => <ViewIntro data={data} searchData={searchData}/>}
        />
        <Route
        path={match.url + '/question-first'}
        render={() => <ViewFirst data={data} searchData={searchData} antecedente={antecedente} searchAntecedente={setAntecedente} />}
        />
    </div>
    )
};


export default MakeContract;
