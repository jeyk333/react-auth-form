import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import StepTwo from "../pages/StepTwo";
import StepThree from "../pages/StepThree";
import history from "../utils/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Registration} exact />
        <Route path="/step-two" component={StepTwo} />
        <Route path="/step-three" component={StepThree} />
      </Switch>
    </Router>
  );
};

export default Routes;
