import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import ReviewContracts from "./componentes/choosecontract/ChooseContracts";
import ConsolidatedContracts from "./componentes/ConsolidatedContracts";
import AdendaComplete from "./componentes/adenda/AdendaComplete";
import QuestionsOne from "./componentes/choosecontract/Questions";
import ContrractsGoods from "./componentes/choosecontract/ContractsGoods";

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
        <Route path="/questions" component={QuestionsOne} />
        <Route path="/contractsgoods" component={ContrractsGoods} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
