import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  name = "Patrick";

  doThing = () => {};

  render() {
    return (
      // <> is a react fragment and is the same as <React.Fragment>
      <>
        <Header greetersName="Patrick" />
        <h1 className="hello">Hey There!</h1>
        <Footer />
      </>
    );
  }
}

export default App;
