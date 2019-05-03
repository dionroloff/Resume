import React from "react";
import "./App.css";
import Contact from "./Contact";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, My name is Dion.
        </h1>
        <h2>
          I'm a software engineer
        </h2>
      </header>
      <Profile />
      <Contact />
    </div>
  );
}

export default App;
