import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  name = "Patrick";

  doThing = () => {};

  render() {
    return (
      // <> is a react fragment and is the same as <React.Fragment>
      <>
        <header className="header">header</header>
        <h1 className="hello">Hello World</h1>
        <footer className="footer">footer</footer>
      </>
    );
  }
}

// The dev will not create an element like this
// const app = new App();
// console.log(app);

export default App;
