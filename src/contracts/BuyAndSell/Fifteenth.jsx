import React from "react";

const Fifteenth = ({ Fifteenth }) => {
    const { timeDay } = Fifteenth;

    if (Fifteenth !== "") {
        return (
            <section>
                <h3>DECIMO QUINTA: CASO FORTUITO O FUERZA MAYOR</h3>
                <p>
                    15.1 Ninguna de las Partes será responsable ante la otra por las
                    obligaciones aquí contraídas, cuando el cumplimiento del presente
                    Contrato se vea afectado total o parcialmente, por circunstancias de
                    fuerza mayor y/o caso fortuito, referido a una causa no imputable a
                    las Partes, consistente en un evento extraordinario, imprevisible e
                    irresistible, que impida la ejecución de la obligación o determina su
                    cumplimiento parcial, tardío o defectuoso.
        </p>
                <p>
                    15.2 Cuando la fuerza mayor y/o caso fortuito suceda, la Parte
                    afectada deberá notificar por escrito, mediante comunicación simple, a
                    la otra Parte en el plazo más breve posible. Las Partes continuarán
                    con la prestación de las obligaciones contractuales no afectadas por
                    el caso fortuito o por la fuerza mayor.
        </p>
                <p>
                    15.3 La Parte afectada por caso fortuito o fuerza mayor deberá
                    reiniciar el cumplimiento de la obligación contractual afectada dentro
                    de las setenta y dos (72) horas siguientes, luego de que dicho caso(s)
                    o causa(s) hubieren desaparecido. La Parte no afectada colaborará con
                    este esfuerzo.
        </p>
                <p>
                    15.4 Si la fuerza mayor o hecho fortuito continúa por más de quince
                    (15) días calendario, las Partes revisarán el objeto del Contrato y,
                    si este aún es posible a satisfacción de STATKRAFT, las Partes
                    acordarán los términos en los que el Contrato continuará vigente. En
                    caso el hecho fortuito o fuerza mayor haga imposible la prestación del
                    objeto del Contrato a satisfacción de STATKRAFT, luego de transcurrido
                    el plazo de quince (15) días antes mencionado, cualquiera de las
                    Partes podrá dar por resuelto el Contrato mediante comunicación
          cursada con {timeDay} días calendario de anticipación, sin que esto genere obligación alguna
                              de la Parte que resuelve a favor de la otra Parte, salvo el pago de
                              las obligaciones efectivamente ejecutadas a la fecha de resolución.
        </p>
            </section>
        );
    }
    return (
        <div>
            <p>Seccion Caso Fortuito </p>
        </div>
    );
};

export default Fifteenth;
