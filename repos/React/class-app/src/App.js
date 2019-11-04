import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  name = "Patrick";

  doThing = () => {};

  render() {
    return (
      // <> is a react fragment and is the same as <React.Fragment>
      <>
        <Header />
        <h1 className="hello">Hey There!</h1>
        <Footer />
      </>
    );
  }
}

// The dev will not create an element like this
// const app = new App();
// console.log(app);

export default App;
