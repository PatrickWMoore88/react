import React, { Component } from "react";

export class Greeter extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello There", messageClass: "message" };
  }
  render() {
    let greetingMsg = this.state.message.toUpperCase();
    // if (this.props.name) {
    //   greetingMsg += `, ${this.props.name.toUpperCase()}`;
    // }
    let leetAlphabet = {
      A: "4",
      B: "8",
      E: "3",
      G: "6",
      I: "1",
      O: "0",
      P: "9",
      S: "5",
      T: "7",
      Z: "2"
    };
    let name = this.props.name.toUpperCase();
    for (var i = 0; i < greetingMsg.length; i++) {
      if (leetAlphabet[greetingMsg[i]]) {
        greetingMsg = greetingMsg.replace(
          greetingMsg[i],
          leetAlphabet[greetingMsg[i]]
        );
      }
    }
    for (var i = 0; i < name.length; i++) {
      if (leetAlphabet[name[i]]) {
        name = name.replace(name[i], leetAlphabet[name[i]]);
      }
    }
    if (this.props.name) {
      greetingMsg += `, ${name}`;
    }
    return <span className={this.messageClass}>{greetingMsg}</span>;
  }
}

export default Greeter;
