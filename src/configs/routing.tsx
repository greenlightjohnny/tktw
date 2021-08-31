import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "../features/dashboard/dashboard2";
import Notifications from "../features/notifications/notifications";
import Dashboard from "../features/dashboard/dashboard3";

const routes = (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/notifications" component={Notifications}></Route>
  </Switch>
);

export default routes;
