import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = { countDown: 10 };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      const { countDown } = this.state;
      if (countDown > 0) {
        this.setState(({ countDown }) => ({
          countDown: countDown - 1
        }));
      } else {
        alert("Time's Up!!");
        clearInterval(this.clockInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
  render() {
    return (
      <>
        <h1>Timer</h1>
        <h2>{this.state.countDown}</h2>
      </>
    );
  }
}
