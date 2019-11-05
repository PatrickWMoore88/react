import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Books extends Component {
  render() {
    return (
      <div>
        <h1>Books</h1>
        <ul className="books-list">
          <li className="book">
            <Link to="/books/To Kill A Mockingbird">To Kill A Mockingbird</Link>
          </li>
          <li className="book">
            <Link to="/books/One Who Flew Over The Cuckoo's Nest">
              One Who Flew Over The Cuckoo's Nest
            </Link>
          </li>
          <li className="book">
            <Link to="/books/The Count Of Monte Cristo">
              The Count Of Monte Cristo
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Books;
