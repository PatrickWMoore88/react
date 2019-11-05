import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="/">Home</a>
      </li>
      <li className="menu-item">
        <a href="/books">All Books</a>
      </li>
      <li className="menu-item">
        <a href="/latest">Latest Books</a>
      </li>
    </ul>
  );
}
