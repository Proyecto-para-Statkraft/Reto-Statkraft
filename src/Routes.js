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
import Company from "./componentes/escogerempresa/Company";
import OptionCompany from "./componentes/escogerempresa/ChooseCompany";
import SelectCompany from "./componentes/escogerempresa/SelectCompany";
import Welcome from "./componentes/escogerempresa/Welcome";

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
        <Route path="/empresa" component={Company} />
        <Route path="/optioncompany" component={OptionCompany} />
        <Route path="/selectcompany" component={SelectCompany} />
        <Route path="/welcomecontract" component={Welcome} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
