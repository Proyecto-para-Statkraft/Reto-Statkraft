import React from 'react';
import ClauseA from './OptionalClauses/Clause20-1-A';
import ClauseB from './OptionalClauses/Clause20-1-B';
import ClauseC from './OptionalClauses/Clause20-1-C';



const Twentieth = ({ clauseA, clauseB, clauseC }) => (
    <section>
        <h3>VIGESIMA:        REGULACION ANTICORRUPCION</h3>
        { (clauseA) && <ClauseA /> }
        { (clauseB) && <ClauseB /> }
        { (clauseC) && <ClauseC /> }
    </section>
);


export default Twentieth;
