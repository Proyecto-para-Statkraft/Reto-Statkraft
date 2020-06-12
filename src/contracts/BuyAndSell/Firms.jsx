import React from 'react';





const TwentyThird = ({ sectionTwentyThird, data, provider }) => {


    const { companyData } = data;
    const { providerData } = provider;
    const { days, months, years } = sectionTwentyThird;

    if (sectionTwentyThird !== "") {
        return (
            <section>
                <p>
                    En señal de conformidad, se suscribe el presente documento, en dos (2) originales
            de igual forma y tenor, en la ciudad de Lima a los {days} días del mes de
            {months} de {years}.
        </p>
                <div>
                    <h5>{companyData.name}</h5>
                    <section>
                        <p>.........................</p>
                        <p>{companyData.representativeOneName}</p>
                    </section>
                    <section>
                        <p>.........................</p>
                        <p>{companyData.representativeTwoName}</p>
                    </section>
                </div>
                <div>
                    <h5>{providerData.name}</h5>
                    <p>.........................</p>
                    <p>{providerData.representativeName}</p>
                </div>
            </section>
        )
    }
    return (
        <div className="m-5">
            <h2 className="text-center">Firmas </h2>
        </div>
    )
};


export default TwentyThird;
