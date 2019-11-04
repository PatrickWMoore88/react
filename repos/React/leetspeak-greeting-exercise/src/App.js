import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  name = "Patrick";
  render() {
    return (
      <>
        <Header greetersName="Patrick" />
      </>
    );
  }
}

export default App;
