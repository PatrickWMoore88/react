import React, { Component } from "react";
import Greeter from "./Greeter";

export class Header extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello World", messageClass: "message" };
  }
  render() {
    let greetingMsg = this.state.message.toUpperCase();
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
    for (var i = 0; i < greetingMsg.length; i++) {
      if (leetAlphabet[greetingMsg[i]]) {
        greetingMsg = greetingMsg.replace(
          greetingMsg[i],
          leetAlphabet[greetingMsg[i]]
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
