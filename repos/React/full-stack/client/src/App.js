import React from "react";
import logo from "./logo.svg";
import Users from "./components/Users";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users />
        <Posts />
      </header>
    </div>
  );
}

export default App;
