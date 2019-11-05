import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import NotFound from "./pages/Not-found";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/books/:id">
          <Book />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
