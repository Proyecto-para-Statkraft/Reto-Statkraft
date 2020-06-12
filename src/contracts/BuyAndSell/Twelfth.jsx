import React from "react";

const Twelfth = ({ data, Twelfth }) => {
    const { companyData } = data;
    const { numberHoursRepairLima, numberHoursRepairProvincia, timeAfterDeliveryFechayHora } = Twelfth;

    if (Twelfth !== "") {
        return (
            <section>
                <h3>DÉCIMA SEGUNDA: EXCLUSIÓN DE DAÑOS INDIRECTOS Y RESPONSABILIDAD</h3>
                <p>
                    12.1 <span>{companyData.name}</span> no será responsable en ningún
                    caso frente al
          <span>PROVEEDOR</span> por lucro cesante o daños indirectos, salvo en
          los casos de dolo o culpa inexcusable de <span>{companyData.name}</span>, tal como lo establecen los artículos
          1328° y 1986° del Código Civil. Asimismo, la responsabilidad total de <span>{companyData.name}</span> frente al <span>PROVEEDOR</span>
                    no excederá en ningún caso el monto total de la contraprestación
                    pactada en la cláusula tercera de este Contrato.
        </p>
                <p>
                    12.2 El <span>PROVEEDOR</span> se obliga a defender, indemnizar y a
          mantener indemne y libre de todo perjuicio a <span>{companyData.name}</span> y/o a sus afiliadas, subsidiarias,
                              funcionarios, directores, empleados, agentes o representantes contra
                              cualquier demanda, reclamo, multa, daño (incluyendo daño personal y a
          los bienes de <span>{companyData.name}</span>, del <span>PROVEEDOR</span> o de terceros), responsabilidad, pérdida,
                              deuda, costo y/o gasto (incluyendo sin limitación alguna los costos
                              administrativos, judiciales, arbitrales y honorarios de abogados)
          derivados de: (i) cualquier incumplimiento del <span>PROVEEDOR</span>{" "}
                    de las obligaciones asumidas en este Contrato; (ii) cualquier
                    información y/o documentación falsa o inexacta que hubiese sido
          proporcionada por el <span>PROVEEDOR</span> bajo el marco del presente
                                                  Contrato; y/o, (iii) el incumplimiento de cualquier norma legal por
          parte del <span>PROVEEDOR</span>. Se incluye dentro de este deber de
                                                  indemnidad cualquier multa o sanción que pudiera ser impuesta por el
          COES o por cualquier otra autoridad administrativa contra <span>{companyData.name}</span> por causas imputables al<span>PROVEEDOR</span>. </p>
                <p>
                    12.3 Asimismo, el <span>PROVEEDOR</span> será responsable por todo y
                    cualquier acto u omisión relacionado a la compraventa de Bienes, que
          pueda generarle a<span>{companyData.name}</span>, sus dependientes o a
                                                  terceros de cualquier naturaleza, incluyendo sin ser limitativo:
                                                  responsabilidad civil, penal, tributaria, laboral, administrativa,
                                                  seguridad, o ambiental, en el transcurso de la compraventa de Bienes,
                                                  incluyendo daño emergente, lucro cesante, daños materiales, lesiones o
          muerte, etc., debiendo el <span>PROVEEDOR</span> asumir todos los
                                                  gastos, costos, indemnizaciones y compensaciones que deben ser pagados
                                                  para tal fin.
        </p>
                <p>
                    12.4 Si por cualquier circunstancia el personal del{" "}
                    <span>PROVEEDOR</span> tuviese la necesidad de ingresar a las áreas
          operativas de <span>{companyData.name}</span> , el
          <span>PROVEEDOR </span> declara conocer y haber hecho conocer a su
                  personal, las Normas de Integridad contenidas en el Reglamento Interno
        de Trabajo de <span>{companyData.name}</span>, el Reglamento Interno de Seguridad de <span>{companyData.name}</span>, el Reglamento de Seguridad y Salud en
                                el Trabajo con Electricidad, R.M. N° 111-2013-MEM/DM, las normas y
          procedimientos de uso correcto de los servicios y equipos que <span>{companyData.name}</span>
                    ponga a disposición del <span>PROVEEDOR</span>, así como todas las
          medidas para el cuidado de la seguridad, salud y medio ambiente que <span>{companyData.name}</span> exige a sus contratistas.
          El <span>PROVEEDOR</span> se compromete a observar y cumplir todas las
                              normas y reglamentos mencionados en este literal, así como todas
                    aquellas que <span>{companyData.name}</span> ponga en su conocimiento.
          Adicionalmente, el <span>PROVEEDOR</span>
                    declara que es de su exclusiva responsabilidad contar con los
                    implementos de seguridad adecuados para el tipo de trabajo que vaya a
                    realizar dentro de las áreas operativas de <span>{companyData.name}</span>.
                    <span>{companyData.name}</span> se reserva el derecho de impedir el ingreso de cualquier trabajador o
          supervisor del <span>PROVEEDOR</span> que incumpla los citados
                      procedimientos y normas. En caso esta situación se torne persistente
          y/o generalizada, <span>{companyData.name}</span> queda facultada a
                                                  paralizar los trabajos y resolver el Contrato sin lugar a reclamo por
          parte del <span>PROVEEDOR</span>.
        </p>
                <p>
                    12.5 Si por cualquier circunstancia, el <span>PROVEEDOR</span> o su
                    personal tuviese que desarrollar alguna actividad dentro de áreas
          operativas de <span>{companyData.name}</span>, el <span>PROVEEDOR</span> se obliga a mantener libre de responsabilidad
          resarcitoria o indemnizatoria a <span>{companyData.name}</span> por
                  todos los daños personales (incluyendo lesiones o muertes), accidentes
                      individuales o colectivos de trabajo, enfermedades comunes o
                      profesionales de su personal utilizado para la ejecución del Contrato,
                      y contra cualquier daño, reclamo, acción legal, daños personales,
                      incluyendo muerte, daños a propiedad de terceros, etc., que puedan
                      cometer o ser originados en actos cometidos por su personal, empleados
          o invitados dentro o fuera de la propiedad o instalaciones de<span>{companyData.name}</span>, o por cualquier daño originado en
          este Contrato por parte del <span>PROVEEDOR</span>, debiendo contar el{" "}
                    <span>PROVEEDOR</span> con la cobertura adecuada para estos riesgos,
                    mediante una Póliza de Responsabilidad Civil conforme a lo previsto en
                    la cláusula décimo cuarta de este Contrato.
        </p>
                <p>
                    12.6 Las Partes reiteran que sin perjuicio de la supervisión y
          fiscalización que pueda verificarse por parte de <span>{companyData.name}</span>, no existirá relación de dependencia
          ni subordinación de ningún tipo entre <span>{companyData.name}</span>{" "}
                    y el <span>PROVEEDOR</span>, su personal, subcontratistas y
                    cesionarios. Para claridad, las Partes dejan constancia que en ningún
                    caso se podrá entender que existe responsabilidad civil solidaria en
                    los términos previstos en el artículo 1981° del Código Civil, por lo
          que <span>{companyData.name}</span> no será responsable ante cualquier
                          daño, accidente, contaminación, costos, gastos, indemnización, multas,
                          sanciones y en general cualquier reclamo que pueda plantearse como
                      consecuencia de la transferencia y/o transporte de los Bienes, o de la
          infracción a las leyes y reglamentos por parte del <span>PROVEEDOR</span>. </p>
                <p>
                    12.7 En el hipotético caso que alguna autoridad ordenara a <span>{companyData.name}</span> el pago de suma alguna o la asunción
                    de cualquiera de las obligaciones descritas en los numerales
          anteriores de esta cláusula, el <span>PROVEEDOR</span> se obliga a
                                                  sustituirse en dicho pago, asumiéndolo directamente o en su defecto,
          reembolsando el monto correspondiente a <span>{companyData.name}</span>. En este último supuesto, el <span>PROVEEDOR</span> contará con un plazo de tres (3) días
          calendario contados a partir de la fecha en que <span>{companyData.name}</span> le informase sobre el pago efectuado
          en su nombre. De lo contrario, <span>{companyData.name}</span> se
                                                  encuentra plenamente facultado a retener directamente de las
          retribuciones del <span>PROVEEDOR</span> pendientes de pago los
          importes correspondientes y/o repetir dichos pagos contra el <span>PROVEEDOR</span>.
        </p>
                <p>
                    12.8 El <span>PROVEEDOR</span> será responsable de reparar cualquier
          error en el funcionamiento de los Bienes en un
          plazo no mayor a {numberHoursRepairLima} horas para Lima y a {numberHoursRepairProvincia} horas para
                              provincias, si se determinase su responsabilidad respecto
                              de dicho error. Asimismo, será responsable plena y absolutamente por
                              la buena calidad y correcto funcionamiento de los Bienes, aun cuando
                              no sea el fabricante de los mismos, durante el plazo de vigencia de
                    este Contrato, así como durante los {timeAfterDeliveryFechayHora} siguientes a la fecha de entrega.
          Finalmente, el <span>PROVEEDOR</span> será responsable por los perjuic
          ios generados a <span>{companyData.name}</span> en caso de producirse un mal funcionamiento en los Bienes que se encuentren dentro del
                                                  periodo de garantía.
        </p>
            </section>
        );
    }
    return (
        <div>
            <p>Exclusion de daño Existentes</p>
        </div>
    );
};

export default Twelfth;
