import React from "react";
import "./App.css";
import styled from "styled-components";

const SayHello = styled.h1`
  background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello>Hello Pick Time</SayHello>
      </header>
    </div>
  );
}

export default App;
