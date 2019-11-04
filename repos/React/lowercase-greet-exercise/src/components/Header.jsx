import React, { Component } from "react";
import Greeter from "./Greeter";

export class Header extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello World", messageClass: "message" };
  }
  render() {
    let greetingMsg = this.state.message.toLowerCase();
    return (
      <header className="header">
        <h1 className={this.messageClass}>{greetingMsg}</h1>
        <Greeter name={this.props.greetersName} isFeatureOn={true} />{" "}
      </header>
    );
  }
}

export default Header;
