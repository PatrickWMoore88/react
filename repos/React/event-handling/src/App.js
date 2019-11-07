import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleLasers = this.handleLasers.bind(this);
  }
  handleLasers(id) {
    this.setState(state => ({ isActive: true }));
    if (id === "1") {
      alert(`Active ${id} Laser`);
    } else {
      alert(`Active ${id} Lasers`);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleLasers.bind(this, "All")}>
            Activate All Lasers!!
          </button>
          <button
            onClick={e => {
              this.handleLasers("1", e);
            }}
          >
            Activate Laser 1!!
          </button>
          <button onClick={this.handleLasers.bind(this, "2")}>
            Activate Laser 2!!
          </button>
          <p>Are the Lasers Active? {this.state.isActive ? "true" : "false"}</p>
        </header>
      </div>
    );
  }
}
