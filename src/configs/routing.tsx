import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "../features/dashboard/dashboard2";

const routes = (
  <Switch>
    <Route exact path="/" component={Hero} />
  </Switch>
);

export default routes;
