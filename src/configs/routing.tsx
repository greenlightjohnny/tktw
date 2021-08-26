import React from "react";
import { Route, Switch } from "react-router";
import Hero from "../components/Hero";

const routes = (
  <Switch>
    <Route exact path="/prescriber" component={Hero} />
  </Switch>
);

export default routes;
