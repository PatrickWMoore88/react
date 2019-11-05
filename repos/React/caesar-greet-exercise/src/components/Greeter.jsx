import React, { Component } from "react";

export class Greeter extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello There", messageClass: "message" };
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
    let name = this.props.name.toUpperCase();
    for (var i = 0; i < greetingMsg.length; i++) {
      if (caesarAlphabet[greetingMsg[i]]) {
        greetingMsg = greetingMsg.replace(
          greetingMsg[i],
          caesarAlphabet[greetingMsg[i]]
        );
      }
    }
    for (var i = 0; i < name.length; i++) {
      if (caesarAlphabet[name[i]]) {
        name = name.replace(name[i], caesarAlphabet[name[i]]);
      }
    }
    if (this.props.name) {
      greetingMsg += `, ${name}`;
    }
    return <span className={this.messageClass}>{greetingMsg}</span>;
  }
}

export default Greeter;
