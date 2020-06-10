import React from 'react';


const date = {
    day: 1,
    month: '',
    year: 34,
}


const companyData = {
    name: ',',
    ruc: 34,
    address: 'Av. Pardo y Aliaga N° 652, Of. 203, San Isidro, Lima',
    representatives: {
        one: {
            name: '',
            dni: 34,
        },
        two: {
            name: '',
            dni: 34,
        }
    }
}


const providerData = {
    name: '',
    ruc: 34,
    address: '',
    representative: {
        name: '',
        dni: 34,
        numberRegistry: 34
    }
}

const TwentyThird = ({ date, companyData, providerData }) => (
    <section>
        <p>
            En señal de conformidad, se suscribe el presente documento, en dos (2) originales 
            de igual forma y tenor, en la ciudad de Lima a los {date.day} días del mes de 
            {date.month} de {date.year}.
        </p>
        <div>
            <h5>{companyData.name}</h5>
            <section>
                <p>.........................</p>
                <p>{companyData.representatives.one.name}</p>
            </section>
            <section>
                <p>.........................</p>
                <p>{companyData.representatives.two.name}</p>
            </section>
        </div>
        <div>
            <h5>{providerData.name}</h5>
            <p>.........................</p>
            <p>{providerData.representative.name}</p>
        </div>
    </section>
);


export default TwentyThird;
