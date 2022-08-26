import Quiz from "./Quiz";
import Result from "./Result";
import About from "./About";
//import React, { useState } from "react";

function App() {
  return (
    <>
      <div className="about">
        <About />
      </div>
      <div className="result">
        <Result />
      </div>
      <div className="quiz">
        <Quiz />
      </div>
    </>
  );
}

export default App;
