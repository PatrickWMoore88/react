import React, { Component } from "react";
import IncreaseDecrease from "./IncreaseDecrease";

let number = 0;
class Counter extends Component {
  constructor(values) {
    super(values);
    this.state = { message: number, messageClass: "message" };
  }
  render() {
    return (
      <header className="header">
        <IncreaseDecrease className={this.messageClass}>
          {number}
        </IncreaseDecrease>
      </header>
    );
  }
}

export default Counter;
