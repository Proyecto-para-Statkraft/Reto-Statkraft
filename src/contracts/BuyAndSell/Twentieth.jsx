import React from "react";
import ClauseA from "./OptionalClauses/Clause20-1-A";
import ClauseB from "./OptionalClauses/Clause20-1-B";
import ClauseC from "./OptionalClauses/Clause20-1-C";



const Twentieth = ({ data, Twentieth }) => {

    const { companyData } = data;
    const { optionClausesTwentieth } = Twentieth;

    if (Twentieth !== "") {
        if (optionClausesTwentieth === "bajo") {
            return (
                <div>
                    <section>
                        <h3>VIGESIMA: REGULACION ANTICORRUPCION</h3>
                        <ClauseA companyData={companyData} />
                    </section>

                    <section>
                        <h3>VIGÉSIMA PRIMERA: RESPONSABILIDAD SOCIAL CORPORATIVA</h3>
                        <p>
                            <span>{companyData.name}</span>, como empresa subsidiaria del grupo
                  noruego <span>{companyData.name}</span>, tiene una política definida
                                                                              y concreta de responsabilidad social corporativa que aplica en todas
                  sus actividades. En tal sentido, <span>{companyData.name}</span>{" "}
                            pone en conocimiento del
                  <span>PROVEEDOR</span> y a través de este a sus contratistas,
                                                                              subcontratistas, proveedores de servicios y obras, y demás terceros
                                                                              relacionados, sobre la existencia de dicha política con el objetivo
                                                                              que la misma sea respetada y considerada en las actividades
                                                                              relacionadas con la prestación materia del presente contrato. El
                  <span>PROVEEDOR</span> declara que tiene conocimiento de esta
                                                                              política.
                </p>
                    </section>

                    <section>
                        <h3>VIGÉSIMA SEGUNDA: PROTECCIÓN DE DATOS PERSONALES</h3>
                        <p>
                            22.1 En el contexto de la prestación de Servicios encargada por{" "}
                            <span>{companyData.name}</span> y con la finalidad de la correcta
                            ejecución de los Servicios, las partes podrían entregar o
                            intercambiar datos de carácter personal de sus respectivos
                            trabajadores, representantes, socios, accionistas, prestadores de
                            servicio, etc. (en adelante los ´´datos´´). En este sentido, en el
                            marco de la Ley N° 29733 - Ley de Protección de Datos Personales, su
                            Reglamento aprobado mediante D.S. N° 003-2013-JUS y las demás
                            disposiciones complementarias las partes realizan las declaraciones,
                            obligaciones y compromisos contenidos en la presente Cláusula
                            Vigesimosegunda.
                </p>
                        <p>
                            22.2 Las partes declaran haber obtenido la autorización previa,
                            expresa, inequívoca e informada de parte de los titulares de los
                            datos personales, para hacer uso y realizar tratamiento de la
                            información personal, así como proporcionársela a la otra parte en
                            virtud de la contratación del Servicio en caso sea necesario; además
                            de la información que se derive del uso de la información y de
                            cualquier información pública o que pudiera recoger cualquiera de
                            las partes a través de fuentes de acceso público, incluyendo aquella
                            a la que las partes tengan acceso como consecuencia de su relación
                            laboral o contractual, con el objeto que el
                  <span>LOCADOR</span> cuente con la información necesaria para llevar
                                                                              a cabo el Servicio y cumplir con las demás obligaciones del
                                                                              Contrato.
                </p>
                        <p>
                            22.3 Las partes se obligan a no utilizar los datos proporcionados
                            por la otra parte con fines distintos a los previstos en el presente
                            contrato. Las partes se obligan a tratar los datos con la finalidad
                            exclusiva de la realización del Servicio. Una vez finalizada la
                            relación contractual o realizada la prestación del servicio, las
                            partes se obligan a destruir los datos proporcionados por la otra
                            parte, así como el resultado de cualquier elaboración propia que los
                            recopile, agrupe o permita su tratamiento, los soportes o documentos
                            en que se halle recogida la información o, en su caso, a
                            devolvérselos a la parte que los envió en función de la decisión
                            tomada por la misma en cada caso.
                </p>
                        <p>
                            22.4 Las partes se obligan a guardar confidencialidad respecto a
                            todos los datos de carácter personal que conozca y a los que tenga
                            acceso durante la vigencia del Contrato de prestación de servicios.
                            Igualmente, se obliga a custodiar e impedir el acceso a los datos de
                            carácter personal a cualquier tercero ajeno al presente contrato.
                            Las anteriores obligaciones se extienden a toda persona que pudiera
                            intervenir en cualquier fase del tratamiento por cuenta de las
                            partes y subsistirán aun después de terminados los tratamientos
                            efectuados en el marco del presente contrato.
                </p>
                        <p>
                            22.5 Las partes se compromete a comunicar y hacer cumplir a sus
                            empleados, asignados al proyecto, las obligaciones establecidas en
                            esta cláusula. Cualquier uso de los datos que no se ajuste a lo
                            dispuesto en la presente cláusula, será responsabilidad exclusiva de
                            la parte que incumpla frente a terceros y frente a la parte
                            perjudicada ante la que responderá por los daños y perjuicios que le
                            hubiere podido causar, siendo considerado también responsable del
                            tratamiento a estos efectos.
                </p>
                        <p>
                            22.6 Las partes se obligan a cumplir con la normativa vigente en
                            materia de protección de datos de carácter personal y, en
                            particular, con las medidas de seguridad física y digital que
                            corresponda.
                </p>
                        <p>
                            22.7 El <span>LOCADOR</span> y/o <span>{companyData.name}</span> se
                            obligan a brindar información, actualizar, incluir, rectificar,
                  suprimir y oponerse a la información y o tratamiento de datos que el{" "}
                            <span>LOCADOR</span> y/o <span>{companyData.name}</span> soliciten,
                            por efecto del ejercicio de los derechos de los titulares de los
                            datos personales enviando una comunicación escrita a la otra parte,
                            estando obligados a atender la solicitud de acuerdo a lo señalado en
                            las normas vigentes.
                </p>
                    </section>

                    <section>
                        <h3>VIGÉSIMA TERCERA:        VARIOS</h3>
                        <p>
                            23.1 En caso que el presente Contrato vaya aparejado de anexos, el presente Contrato
                            prevalece sobre lo establecido en sus Anexos, los que, debidamente suscritos, forman
                            parte integrante del presente Contrato, y se citan a continuación:
        </p>

                        <p>
                            23.2 Las Partes dejan constancia que en caso la compraventa haya comenzado a ejecutarse
                            antes de la firma del presente Contrato, se entenderá que la ejecución de las referidas
                            prestaciones se rige e interpreta de conformidad con el presente Contrato; en cuyo caso,
                            las Partes ratifican y convalidan las prestaciones ejecutadas por ellos con anterioridad
                            a la firma del presente Contrato
        </p>
                        <p>
                            23.3 Las Partes convienen que la nulidad o la anulabilidad de cualquiera de las cláusulas
                            del presente Contrato no afectará la validez de las demás estipulaciones contenidas en él.
                            Si cualquiera de las cláusulas de este Contrato, por cualquier motivo, fuese invalidada o
                            declarada inaplicable en arbitraje o por otra autoridad competente, las demás estipulaciones
                            del Contrato continuarán siendo válidas y aplicables, siendo que la cláusula nula será
                            reemplazada por las Partes por otra que conduzca a las Partes a los resultados comerciales
                            y jurídicos buscados en este Contrato.
        </p>
                        <p>
                            23.4 Los títulos de las cláusulas y numerales de este Contrato son ilustrativos y
                            referenciales y no tendrán ningún efecto en la interpretación del Contrato.
        </p>
                        <p>
                            23.5 Cualquier modificación o enmienda al Contrato se deberá efectuar mediante una adenda
                            suscrita por los representantes debidamente facultados de ambas Partes.
        </p>
                    </section>
                </div>
            );
        }
        if (optionClausesTwentieth === "medio") {
            return (
                <div>
                    <section>
                        <h3>VIGESIMA: REGULACION ANTICORRUPCION</h3>
                        <ClauseB />
                    </section>

                    <section>
                        <h3>VIGÉSIMA PRIMERA: RESPONSABILIDAD SOCIAL CORPORATIVA</h3>
                        <p>
                            <span>{companyData.name}</span>, como empresa subsidiaria del grupo
                      noruego <span>{companyData.name}</span>, tiene una política definida
                                                          y concreta de responsabilidad social corporativa que aplica en todas
                      sus actividades. En tal sentido, <span>{companyData.name}</span>{" "}
                            pone en conocimiento del
                      <span>PROVEEDOR</span> y a través de este a sus contratistas,
                                                          subcontratistas, proveedores de servicios y obras, y demás terceros
                                                          relacionados, sobre la existencia de dicha política con el objetivo
                                                          que la misma sea respetada y considerada en las actividades
                                                          relacionadas con la prestación materia del presente contrato. El
                      <span>PROVEEDOR</span> declara que tiene conocimiento de esta
                                                          política.
                    </p>
                    </section>

                    <section>
                        <h3>VIGÉSIMA SEGUNDA: PROTECCIÓN DE DATOS PERSONALES</h3>
                        <p>
                            22.1 En el contexto de la prestación de Servicios encargada por{" "}
                            <span>{companyData.name}</span> y con la finalidad de la correcta
                            ejecución de los Servicios, las partes podrían entregar o
                            intercambiar datos de carácter personal de sus respectivos
                            trabajadores, representantes, socios, accionistas, prestadores de
                            servicio, etc. (en adelante los ´´datos´´). En este sentido, en el
                            marco de la Ley N° 29733 - Ley de Protección de Datos Personales, su
                            Reglamento aprobado mediante D.S. N° 003-2013-JUS y las demás
                            disposiciones complementarias las partes realizan las declaraciones,
                            obligaciones y compromisos contenidos en la presente Cláusula
                            Vigesimosegunda.
                    </p>
                        <p>
                            22.2 Las partes declaran haber obtenido la autorización previa,
                            expresa, inequívoca e informada de parte de los titulares de los
                            datos personales, para hacer uso y realizar tratamiento de la
                            información personal, así como proporcionársela a la otra parte en
                            virtud de la contratación del Servicio en caso sea necesario; además
                            de la información que se derive del uso de la información y de
                            cualquier información pública o que pudiera recoger cualquiera de
                            las partes a través de fuentes de acceso público, incluyendo aquella
                            a la que las partes tengan acceso como consecuencia de su relación
                            laboral o contractual, con el objeto que el
                      <span>LOCADOR</span> cuente con la información necesaria para llevar
                                                          a cabo el Servicio y cumplir con las demás obligaciones del
                                                          Contrato.
                    </p>
                        <p>
                            22.3 Las partes se obligan a no utilizar los datos proporcionados
                            por la otra parte con fines distintos a los previstos en el presente
                            contrato. Las partes se obligan a tratar los datos con la finalidad
                            exclusiva de la realización del Servicio. Una vez finalizada la
                            relación contractual o realizada la prestación del servicio, las
                            partes se obligan a destruir los datos proporcionados por la otra
                            parte, así como el resultado de cualquier elaboración propia que los
                            recopile, agrupe o permita su tratamiento, los soportes o documentos
                            en que se halle recogida la información o, en su caso, a
                            devolvérselos a la parte que los envió en función de la decisión
                            tomada por la misma en cada caso.
                    </p>
                        <p>
                            22.4 Las partes se obligan a guardar confidencialidad respecto a
                            todos los datos de carácter personal que conozca y a los que tenga
                            acceso durante la vigencia del Contrato de prestación de servicios.
                            Igualmente, se obliga a custodiar e impedir el acceso a los datos de
                            carácter personal a cualquier tercero ajeno al presente contrato.
                            Las anteriores obligaciones se extienden a toda persona que pudiera
                            intervenir en cualquier fase del tratamiento por cuenta de las
                            partes y subsistirán aun después de terminados los tratamientos
                            efectuados en el marco del presente contrato.
                    </p>
                        <p>
                            22.5 Las partes se compromete a comunicar y hacer cumplir a sus
                            empleados, asignados al proyecto, las obligaciones establecidas en
                            esta cláusula. Cualquier uso de los datos que no se ajuste a lo
                            dispuesto en la presente cláusula, será responsabilidad exclusiva de
                            la parte que incumpla frente a terceros y frente a la parte
                            perjudicada ante la que responderá por los daños y perjuicios que le
                            hubiere podido causar, siendo considerado también responsable del
                            tratamiento a estos efectos.
                    </p>
                        <p>
                            22.6 Las partes se obligan a cumplir con la normativa vigente en
                            materia de protección de datos de carácter personal y, en
                            particular, con las medidas de seguridad física y digital que
                            corresponda.
                    </p>
                        <p>
                            22.7 El <span>LOCADOR</span> y/o <span>{companyData.name}</span> se
                            obligan a brindar información, actualizar, incluir, rectificar,
                      suprimir y oponerse a la información y o tratamiento de datos que el{" "}
                            <span>LOCADOR</span> y/o <span>{companyData.name}</span> soliciten,
                            por efecto del ejercicio de los derechos de los titulares de los
                            datos personales enviando una comunicación escrita a la otra parte,
                            estando obligados a atender la solicitud de acuerdo a lo señalado en
                            las normas vigentes.
                    </p>
                    </section>
                </div>
            );
        }
        if (optionClausesTwentieth === "alto") {
            return (
                <div>
                    <section>
                        <h3>VIGESIMA: REGULACION ANTICORRUPCION</h3>
                        <ClauseC />
                    </section>

                    <section>
                        <h3>VIGÉSIMA PRIMERA: RESPONSABILIDAD SOCIAL CORPORATIVA</h3>
                        <p>
                            <span>{companyData.name}</span>, como empresa subsidiaria del grupo
                          noruego <span>{companyData.name}</span>, tiene una política definida
                                      y concreta de responsabilidad social corporativa que aplica en todas
                          sus actividades. En tal sentido, <span>{companyData.name}</span>{" "}
                            pone en conocimiento del
                          <span>PROVEEDOR</span> y a través de este a sus contratistas,
                                      subcontratistas, proveedores de servicios y obras, y demás terceros
                                      relacionados, sobre la existencia de dicha política con el objetivo
                                      que la misma sea respetada y considerada en las actividades
                                      relacionadas con la prestación materia del presente contrato. El
                          <span>PROVEEDOR</span> declara que tiene conocimiento de esta
                                      política.
                        </p>
                    </section>

                    <section>
                        <h3>VIGÉSIMA SEGUNDA: PROTECCIÓN DE DATOS PERSONALES</h3>
                        <p>
                            22.1 En el contexto de la prestación de Servicios encargada por{" "}
                            <span>{companyData.name}</span> y con la finalidad de la correcta
                            ejecución de los Servicios, las partes podrían entregar o
                            intercambiar datos de carácter personal de sus respectivos
                            trabajadores, representantes, socios, accionistas, prestadores de
                            servicio, etc. (en adelante los ´´datos´´). En este sentido, en el
                            marco de la Ley N° 29733 - Ley de Protección de Datos Personales, su
                            Reglamento aprobado mediante D.S. N° 003-2013-JUS y las demás
                            disposiciones complementarias las partes realizan las declaraciones,
                            obligaciones y compromisos contenidos en la presente Cláusula
                            Vigesimosegunda.
                        </p>
                        <p>
                            22.2 Las partes declaran haber obtenido la autorización previa,
                            expresa, inequívoca e informada de parte de los titulares de los
                            datos personales, para hacer uso y realizar tratamiento de la
                            información personal, así como proporcionársela a la otra parte en
                            virtud de la contratación del Servicio en caso sea necesario; además
                            de la información que se derive del uso de la información y de
                            cualquier información pública o que pudiera recoger cualquiera de
                            las partes a través de fuentes de acceso público, incluyendo aquella
                            a la que las partes tengan acceso como consecuencia de su relación
                            laboral o contractual, con el objeto que el
                          <span>LOCADOR</span> cuente con la información necesaria para llevar
                                      a cabo el Servicio y cumplir con las demás obligaciones del
                                      Contrato.
                        </p>
                        <p>
                            22.3 Las partes se obligan a no utilizar los datos proporcionados
                            por la otra parte con fines distintos a los previstos en el presente
                            contrato. Las partes se obligan a tratar los datos con la finalidad
                            exclusiva de la realización del Servicio. Una vez finalizada la
                            relación contractual o realizada la prestación del servicio, las
                            partes se obligan a destruir los datos proporcionados por la otra
                            parte, así como el resultado de cualquier elaboración propia que los
                            recopile, agrupe o permita su tratamiento, los soportes o documentos
                            en que se halle recogida la información o, en su caso, a
                            devolvérselos a la parte que los envió en función de la decisión
                            tomada por la misma en cada caso.
                        </p>
                        <p>
                            22.4 Las partes se obligan a guardar confidencialidad respecto a
                            todos los datos de carácter personal que conozca y a los que tenga
                            acceso durante la vigencia del Contrato de prestación de servicios.
                            Igualmente, se obliga a custodiar e impedir el acceso a los datos de
                            carácter personal a cualquier tercero ajeno al presente contrato.
                            Las anteriores obligaciones se extienden a toda persona que pudiera
                            intervenir en cualquier fase del tratamiento por cuenta de las
                            partes y subsistirán aun después de terminados los tratamientos
                            efectuados en el marco del presente contrato.
                        </p>
                        <p>
                            22.5 Las partes se compromete a comunicar y hacer cumplir a sus
                            empleados, asignados al proyecto, las obligaciones establecidas en
                            esta cláusula. Cualquier uso de los datos que no se ajuste a lo
                            dispuesto en la presente cláusula, será responsabilidad exclusiva de
                            la parte que incumpla frente a terceros y frente a la parte
                            perjudicada ante la que responderá por los daños y perjuicios que le
                            hubiere podido causar, siendo considerado también responsable del
                            tratamiento a estos efectos.
                        </p>
                        <p>
                            22.6 Las partes se obligan a cumplir con la normativa vigente en
                            materia de protección de datos de carácter personal y, en
                            particular, con las medidas de seguridad física y digital que
                            corresponda.
                        </p>
                        <p>
                            22.7 El <span>LOCADOR</span> y/o <span>{companyData.name}</span> se
                            obligan a brindar información, actualizar, incluir, rectificar,
                          suprimir y oponerse a la información y o tratamiento de datos que el{" "}
                            <span>LOCADOR</span> y/o <span>{companyData.name}</span> soliciten,
                            por efecto del ejercicio de los derechos de los titulares de los
                            datos personales enviando una comunicación escrita a la otra parte,
                            estando obligados a atender la solicitud de acuerdo a lo señalado en
                            las normas vigentes.
                        </p>
                    </section>
                </div>
            );
        }
    }
    return (
        <div>
            <p>Seccion Regulacion Anticorrupcion</p>
        </div>
    );
};

export default Twentieth;
