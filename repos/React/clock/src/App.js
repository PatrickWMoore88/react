import React from "react";
import AppRouter from "./AppRouter";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
