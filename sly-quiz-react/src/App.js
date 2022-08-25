import Quiz from "./Quiz";
import Result from "./Result";
import About from "./About";
//import React, { useState, useEffect } from "react";

function App() {
  // const [display, setDisplay] = useState("none");
  // function handleCollapse() {
  //   if (this.display === "none") {
  //     setDisplay("block");
  //   } else {
  //     setDisplay("none");
  //   }
  // }
  // useEffect(() => {
  //   document.getElementsByClassName(".content").style = { display };
  // });
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

// const display = useState([]);
// original way to make a collapsible portion- however we don't want to work directly with the DOM gotta get the virtual DOM
// var coll = document.getElementsByClassName("collapsible");
// for (var i = 0; i < coll.length; i++) {
// coll[i].addEventListener("click", function () {
// coll.classList.toggle("active");
// var content = this.nextElementSibling;
// if (content.style.display === "block") {
//   content.style.display = "none";
// } else {
//   content.style.display = "block";
// }
//  });
//  }
