import React, { Component } from "react";

export class IncreaseDecrease extends Component {
  render() {
    let number = [];
    for (var i = 0; i <= 100; i++) {
      number.push(i + ", ");
    }
    if (number.length > 100) {
      for (var i = 99; i >= -100; i--) {
        number.push(i + ", ");
      }
    }
    for (var i = -99; i <= 100; i++) {
      number.push(i + ", ");
    }
    return <h1 className={this.messageClass}>{number}</h1>;
  }
}

export default IncreaseDecrease;
