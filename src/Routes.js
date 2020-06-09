import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import ReviewContracts from "./componentes/contratos/choosecontract/ReviewContracts";
import ConsolidatedContracts from "./componentes/ConsolidatedContracts";
import AdendaComplete from "./componentes/contratos/adenda/AdendaComplete";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/reviewcontracts" component={ReviewContracts} />
        <Route
          path="/consolidatedcontracts"
          component={ConsolidatedContracts}
        />
        <Route path="/adenda" component={AdendaComplete} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
