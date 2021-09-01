import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "../features/dashboard/dashboard2";
import Notifications from "../features/notifications/notifications";
import Dashboard from "../features/dashboard/dashboard3";
import Alerts from "../features/priceAlerts/alerts2";
import Appointments from "../features/appointments/appointments";
import RecentDiamonds from "../features/recentDiamonds/recentDiamonds";

const routes = (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/notifications" component={Notifications}></Route>
    <Route exact path="/price-alerts" component={Alerts}></Route>
    <Route exact path="/appointments" component={Appointments}></Route>
    <Route exact path="/recent-diamonds" component={RecentDiamonds}></Route>
  </Switch>
);

export default routes;
