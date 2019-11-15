import React from "react";
// import logo from "./logo.svg";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // <> is a react fragment and is the same as <React.Fragment>
      <>
        <Counter />
      </>
    );
  }
}

export default App;
