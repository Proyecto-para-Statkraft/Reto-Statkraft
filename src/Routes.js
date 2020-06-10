import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import ReviewContracts from "./componentes/choosecontract/ChooseContracts";
import ConsolidatedContracts from "./componentes/ConsolidatedContracts";
import Adenda from "./componentes/adenda/Adenda";
import QuestionsOne from "./componentes/choosecontract/Questions";
import ContrractsGoods from "./componentes/choosecontract/ContractsGoods";
import NumberContracts from "./componentes/adenda/NumberContracts";
import MakeContract from "./contracts/MakeContract";

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
        <Route path="/adenda" component={Adenda} />
        <Route path="/questions" component={QuestionsOne} />
        <Route path="/contractsgoods" component={ContrractsGoods} />
        <Route path="/numbercontracts" component={NumberContracts} />
        <Route path="/makecontract" component={MakeContract} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
