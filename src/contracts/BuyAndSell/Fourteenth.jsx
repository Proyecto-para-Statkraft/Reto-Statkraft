import React from 'react';
import Clause from './OptionalClauses/Clause14-1-2';


const Fourteenth = ({ companyData, clause, money }) => (
    <section>
        <h3>DÉCIMA CUARTA:            GARANTÍAS</h3>
        <p>
            El <span>PROVEEDOR</span> deberá contratar y mantener a su costo las siguientes garantías:
        </p>
        <p>
            14.1 Garantía del Fiel Cumplimiento del Contrato.- Esta garantía deberá ser entregada
            en la fecha de suscripción del Contrato y debe ser por el 20% del monto total del Contrato
            y tiene como finalidad garantizar que el <span>PROVEEDOR</span> dará fiel cumplimiento al
            Contrato y al pago de las penalidades previstas en la cláusula décima tercera. Esta garantía
            estará vigente hasta tres (3) meses después de la entrega de los Bienes a satisfacción de
            <span>{companyData.name}</span>.
        </p>
        <p>
            14.1.1 Esta carta fianza será ejecutada por <span>{companyData.name}</span> en caso de resolución
            del Contrato por causa imputable al <span>PROVEEDOR</span>, o en caso de aplicación de
            penalidades previstas en el Contrato. También podrá ser ejecutada en caso de incumplimiento
            de la garantía de calidad y rendimiento de los Bienes, ello sin perjuicio del reemplazo total
            o parcial de los Bienes defectuosos y demás compromisos otorgados por el <span>PROVEEDOR</span>
            según dicha garantía. Si fuera el caso que la ejecución de la carta fianza se produjera antes
            del vencimiento del plazo contractual, y que haya quedado dinero remanente luego de los pagos
            efectuados por concepto de penalidades contractuales, <span>{companyData.name}</span> conservará en su
            poder el dinero remanente hasta treinta (30) días calendario siguientes a la entrega de los
            Bienes a <span>{companyData.name}</span>, fecha a partir de la cual el <span>PROVEEDOR</span> puede
            solicitar la entrega respectiva, sin que ello dé lugar al pago de intereses de ningún tipo por
            parte de <span>{companyData.name}</span>.
        </p>
        {
            (clause) && <Clause companyData={companyData} money={money}/>
        }
        <p>
            14.2. Garantía del Adelanto: En el supuesto que en Anexo N° 2 del presente Contrato se prevea
            la entrega de un adelanto a favor del <span>PROVEEDOR</span>, éste deberá entregar a 
            <span>{companyData.name}</span>, en la fecha de suscripción de este Contrato, una carta fianza 
            bancaria por una suma igual o equivalente al monto del adelanto más el Impuesto General a las 
            Ventas, que garantizará la correcta, fiel y oportuna utilización del adelanto en la ejecución 
            del Contrato. Esta carta fianza estará vigente hasta tres (3) meses posterior a la culminación 
            del Contrato, a satisfacción de <span>{companyData.name}</span>.
        </p>
        <p>
            14.3 Las garantías mencionadas en esta cláusula deberán ser otorgadas por un banco de primera
            categoría (considérese Banco de Crédito del Perú, BBVA Banco Continental, Interbank, Scotiabank,
            Citibank y Banco Interamericano de Finanzas) y deben contar con las características de irrevocable,
            indivisible, solidaria, de realización automática, sin beneficio de excusión.
        </p>
        <p>
            14.4 Queda expresamente entendido que las garantías mencionadas en los numerales precedentes deberán
            necesariamente hacer referencia al presente Contrato con el número o código interno que le asigne
            <span>{companyData}</span>. Caso contrario, <span>{companyData}</span> podrá rechazar la recepción de las
            garantías.
        </p>
        <p>
            14.5 El <span>PROVEEDOR</span> se obliga a gestionar y obtener la renovación periódica de las 
            garantías mencionadas en los numerales precedentes, cuantas veces sea necesario de manera que esta 
            se encuentre siempre vigente durante los plazos de vigencia pactados en esta cláusula.
        </p>
    </section>
);


export default Fourteenth;
