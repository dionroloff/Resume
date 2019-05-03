import React from "react";
import "./App.css";
import Contact from "./Contact";
import Profile from "./Profile";
import Experience from "./Experience";

//Ant design
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, my name is Dion.</h1>
        <h4>I'm a software engineer</h4>
      </header>
      <Row>
        <Profile />
      </Row>
      <Row>
        <Contact/>
        <Experience/>
      </Row>
    </div>
  );
}

export default App;
