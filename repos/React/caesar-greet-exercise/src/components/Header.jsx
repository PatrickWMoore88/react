import React, { Component } from "react";
import Greeter from "./Greeter";

export class Header extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello World", messageClass: "message" };
  }
  render() {
    let greetingMsg = this.state.message.toUpperCase();
    let caesarAlphabet = {
      A: "B",
      B: "C",
      C: "D",
      D: "E",
      E: "F",
      F: "G",
      G: "H",
      H: "I",
      I: "J",
      J: "K",
      K: "L",
      L: "M",
      M: "N",
      N: "O",
      O: "P",
      P: "Q",
      Q: "R",
      R: "S",
      S: "T",
      T: "U",
      U: "V",
      V: "W",
      W: "X",
      X: "Y",
      Y: "Z",
      Z: "A"
    };
    for (var i = 0; i < greetingMsg.length; i++) {
      if (caesarAlphabet[greetingMsg[i]]) {
        greetingMsg = greetingMsg.replace(
          greetingMsg[i],
          caesarAlphabet[greetingMsg[i]]
        );
      }
    }
    return (
      <header className="header">
        <h1 className={this.messageClass}>{greetingMsg}</h1>
        <Greeter name={this.props.greetersName} isFeatureOn={true} />{" "}
      </header>
    );
  }
}

export default Header;
