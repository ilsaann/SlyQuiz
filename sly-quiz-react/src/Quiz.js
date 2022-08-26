import React, { useState } from "react";
//this file will handle Displaying the quiz questions and answers
export default function Quiz() {
  //const [answers, setAnswers] = useState({});
  //load up the question array
  function takeQuiz() {
    //this initiates the quiz and populates questions
    fetch("/questions", (questions) => {
      console.log(questions);
    });
  }
  function populateQA() {
    //get the answers by question ID
    fetch("/answer", (answers) => {
      console.log(answers);
    });
  }
  return (
    <>
      <div className="question-card">
        <h2>Do prefer sneaky or range style attacks?</h2>
        <ul>
          <li className="sly">Sneaky</li>
          <li className="bentley">Ranged</li>
          <li className="murray">Fists, Actually</li>
        </ul>
      </div>
    </>
  );
}
