import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  name = "Patrick";
  render() {
    return (
      // <> is a react fragment and is the same as <React.Fragment>
      <>
        <Header greetersName="Patrick" />
      </>
    );
  }
}

export default App;
