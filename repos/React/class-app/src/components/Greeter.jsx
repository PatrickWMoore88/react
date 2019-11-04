import React from "react";

class Greeter extends React.Component {
  constructor(values) {
    super(values);
    this.state = { message: "Hello There", messageClass: "message" };
  }

  // message = "Hello there";
  // messageClass = "message";
  render() {
    let greetingMsg = this.state.message.toLowerCase();
    if (this.props.name) {
      greetingMsg += `, ${this.props.name.toLowerCase()}`;
    }
    return <span className={this.messageClass}>{greetingMsg}</span>;
  }
}

export default Greeter;
