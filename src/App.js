import React from "react";
import "./styles/globals.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div>
  );
}

export default App;
