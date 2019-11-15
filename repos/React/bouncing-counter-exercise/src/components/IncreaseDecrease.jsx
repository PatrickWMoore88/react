import React, { Component } from "react";

export class IncreaseDecrease extends Component {
  render() {
    let number = [];
    for (let i = 0; i <= 100; i++) {
      number.push(i + ", ");
    }
    if (number.length > 100) {
      for (let i = 99; i >= -100; i--) {
        number.push(i + ", ");
      }
    }
    for (let i = -99; i <= 100; i++) {
      number.push(i + ", ");
    }
    return <h1>{number}</h1>;
  }
}

export default IncreaseDecrease;
