import React from "react";
import Clause from "./OptionalClauses/Clause14-1-2";

const Fourteenth = ({ data, Fourteenth }) => {
    const { companyData } = data;
    const { optionClauseFourteenth, moneysPoliza } = Fourteenth;

    if (Fourteenth !== "") {
        return (
            <div>
                <section>
                    <h3>DÉCIMA CUARTA: GARANTÍAS</h3>
                    <p>

                        El <span>PROVEEDOR</span> deberá contratar y mantener a su costo las
            siguientes garantías:
                    </p>
                    <p>
                        14.1 Garantía del Fiel Cumplimiento del Contrato.- Esta garantía
                        deberá ser entregada en la fecha de suscripción del Contrato y debe
                        ser por el 20% del monto total del Contrato y tiene como finalidad
            garantizar que el <span>PROVEEDOR</span> dará fiel cumplimiento al
                                                Contrato y al pago de las penalidades previstas en la cláusula
                                                décima tercera. Esta garantía estará vigente hasta tres (3) meses
                                    después de la entrega de los Bienes a satisfacción de <span>{companyData.name}</span>. </p>
                    <p>
                        14.1.1 Esta carta fianza será ejecutada por <span>{companyData.name}</span> en caso de resolución del Contrato
            por causa imputable al <span>PROVEEDOR</span>, o en caso de
                                                aplicación de penalidades previstas en el Contrato. También podrá
                                                ser ejecutada en caso de incumplimiento de la garantía de calidad y
                                                rendimiento de los Bienes, ello sin perjuicio del reemplazo total o
                                                parcial de los Bienes defectuosos y demás compromisos otorgados por
            el <span>PROVEEDOR</span>
                        según dicha garantía. Si fuera el caso que la ejecución de la carta
                        fianza se produjera antes del vencimiento del plazo contractual, y
                        que haya quedado dinero remanente luego de los pagos efectuados por
            concepto de penalidades contractuales,<span>{companyData.name}</span> conservará en su poder el dinero
                                    remanente hasta treinta (30) días calendario siguientes a la entrega
            de los Bienes a <span>{companyData.name}</span>, fecha a partir de
            la cual el <span>PROVEEDOR</span> puede solicitar la entrega
                                                respectiva, sin que ello dé lugar al pago de intereses de ningún
            tipo por parte de <span>{companyData.name}</span>.
          </p>

                    {optionClauseFourteenth ? (
                        <Clause companyData={companyData} money={moneysPoliza} />
                    ) : (
                            ""
                        )}

                    <p>
                        14.2. Garantía del Adelanto: En el supuesto que en Anexo N° 2 del
            presente Contrato se prevea la entrega de un adelanto a favor del <span>PROVEEDOR</span>, éste deberá
            entregar a <span>{companyData.name}</span>, en la fecha de suscripción de este
                                                Contrato, una carta fianza bancaria por una suma igual o equivalente
                                                al monto del adelanto más el Impuesto General a las Ventas, que
                                                garantizará la correcta, fiel y oportuna utilización del adelanto en
                                                la ejecución del Contrato. Esta carta fianza estará vigente hasta
                                                tres (3) meses posterior a la culminación del Contrato, a
            satisfacción de <span>{companyData.name}</span>.
          </p>
                    <p>
                        14.3 Las garantías mencionadas en esta cláusula deberán ser
                        otorgadas por un banco de primera categoría (considérese Banco de
                        Crédito del Perú, BBVA Banco Continental, Interbank, Scotiabank,
                        Citibank y Banco Interamericano de Finanzas) y deben contar con las
                        características de irrevocable, indivisible, solidaria, de
                        realización automática, sin beneficio de excusión.
          </p>
                    <p>
                        14.4 Queda expresamente entendido que las garantías mencionadas en
                        los numerales precedentes deberán necesariamente hacer referencia al
                        presente Contrato con el número o código interno
                        que le asigne <span>{companyData.name}</span>. Caso
                        contrario, <span>{companyData.name}</span> podrá rechazar la recepción de las
                        garantías.
          </p>
                    <p>
                        14.5 El <span>PROVEEDOR</span> se obliga a gestionar y obtener la
                        renovación periódica de las garantías mencionadas en los numerales
                        precedentes, cuantas veces sea necesario de manera que esta se
                        encuentre siempre vigente durante los plazos de vigencia pactados en
                        esta cláusula.
          </p>
                </section>
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
                    cursada.
                    días calendario de anticipación, sin que esto genere obligación alguna
                    de la Parte que resuelve a favor de la otra Parte, salvo el pago de
                    las obligaciones efectivamente ejecutadas a la fecha de resolución.
                </p>
            </section>

            </div>
        );
    }
    return (
        <div>
            <p>Seccion Garantias</p>
        </div>
    );
};

export default Fourteenth;
