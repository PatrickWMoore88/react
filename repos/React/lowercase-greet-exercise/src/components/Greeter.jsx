import React, { Component } from "react";

export class Greeter extends Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello There", messageClass: "message" };
  }
  render() {
    let greetingMsg = this.state.message.toLowerCase();
    if (this.props.name) {
      greetingMsg += `, ${this.props.name.toLowerCase()}`;
    }
    return <span className={this.messageClass}>{greetingMsg}</span>;
  }
}

export default Greeter;
