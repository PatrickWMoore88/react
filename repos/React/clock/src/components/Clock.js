import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
  render() {
    return (
      <>
        <h1>Central Time Zone</h1>
        <h2>Houston TX</h2>
        <h2>
          {this.state.time.toLocaleTimeString("en-US", { hour12: false })}
        </h2>
      </>
    );
  }
}
