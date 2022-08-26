import React, { useState } from "react";
//this file will handle Displaying the quiz questions and answers
export default function Quiz() {
  // const [playing, setPlaying] = useState(false);
  return (
    <>
      <div>Let's take the character quiz</div>
      {/* <button className="play" onClick={setPlaying(!playing)}>
        Take Character Quiz
      </button> */}
      {/* playing && <div>{Question()} */}
    </>
  );
}

function Question(questionid) {
  //function getQuestion(){//
  // fetch("/questions", (questions) => {
  //console.log(questions); make sure that the question is an object of the questionid and question
  //take json.object and set currentQuestion = questions[0]
  //});
  //}

  //   function populateQA() {
  //get the answers by question ID
  //         fetch("/answer", (answers) => {
  //         console.log(answers);
  //         });
  //     }

  //currentQuestion will be an object of the question and the question id
  const currentQuestion = {
    questionid,
    question: "Do you prefer sneaky or range attacks?",
  };
  //array of answer objects, answer object will include answercode, answer, questionid
  const answers = [
    { answercode: "M", answer: "Fists, Actually" },
    { answercode: "B", answer: "Range" },
    { answercode: "S", answer: "Sneaky" },
  ];

  return (
    <>
      <div className="question-card">
        <h2>{currentQuestion.question}</h2>
        <ul>
          <li className="sly">{answers[0].answer}</li>
          <li className="bentley">{answers[1].answer}</li>
          <li className="murray">{answers[2].answer}</li>
        </ul>
      </div>
    </>
  );
}
