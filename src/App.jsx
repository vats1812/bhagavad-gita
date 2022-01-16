import React from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="app">
      <Background />
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default App;
