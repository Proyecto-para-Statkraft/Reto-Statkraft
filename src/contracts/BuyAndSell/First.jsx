import React from "react";


const First = ({ data, First }) => {
  const { companyData } = data;

  if (First !== "") {
    return (
      <section>
        <h3>PRIMERA: ANTECEDENTES</h3>
        <p>
          1.1 {companyData.name} es una empresa dedicada a la generación y
          comercialización de energía eléctrica, que requiere {First.product} en 
          {First.place}.
        </p>
        <p>
          1.2 El <span>PROVEEDOR</span> es una empresa contratista independiente
          dedicada, entre otras cosas, a la compraventa de bienes como los
          requeridos por {companyData.name}, para lo cual cuenta con la
          experiencia, personal propio, autonomía técnica, económica y operativa
          que lo hacen apto para proporcionar los bienes materia del Contrato.
        </p>
      </section>
    );
  }
  return (
    <div>
      <p>Seccion Antecedentes</p>
    </div>
  )
};

export default First;
