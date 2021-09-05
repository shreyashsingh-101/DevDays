import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Connect from "./Connect";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Landing />

      <About />

      <Projects />

      <Connect />
    </div>
  );
}

export default App;
