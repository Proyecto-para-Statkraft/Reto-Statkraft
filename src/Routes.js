import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import ReviewContracts from "./componentes/ReviewContracts";
import ConsolidatedContracts from "./componentes/ConsolidatedContracts";

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
      </Switch>
    </HashRouter>
  );
};
export default Routes;
