import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "../features/dashboard/dashboard";

const routes = (
  <Switch>
    <Route exact path="/" component={Hero} />
  </Switch>
);

export default routes;
