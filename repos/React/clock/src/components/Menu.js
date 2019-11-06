import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

export default function Menu() {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="/">Clock</a>
      </li>
      <li className="menu-item">
        <a href="/alarm">Alram</a>
      </li>
      <li className="menu-item">
        <a href="/timer">Timer</a>
      </li>
      <li className="menu-item">
        <a href="/timezones">Time Zones</a>
      </li>
    </ul>
  );
}
