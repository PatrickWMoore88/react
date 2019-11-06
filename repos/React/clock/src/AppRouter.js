import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Clock from "./components/Clock";
import Alarm from "./components/Alarm";
import Timer from "./components/Timer";
import TimeZones from "./components/TimeZones";
import TimeZone from "./components/TimeZone.js";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Clock />
        </Route>
        <Route exact path="/alarm">
          <Alarm />
        </Route>
        <Route exact path="/timer">
          <Timer />
        </Route>
        <Route exact path="/timezones">
          <TimeZones />
        </Route>
        <Route exact path="/timezones/:id">
          <TimeZones />
        </Route>
      </Switch>
    </Router>
  );
}
