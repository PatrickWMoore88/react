import React from "react";

class Greeter extends React.Component {
  message = "Hello there, Friend";
  render() {
    return <span>{this.message}</span>;
  }
}

export default Greeter;
