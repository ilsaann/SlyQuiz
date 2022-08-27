import React, { useState, useEffect } from "react";
//this file will handle Displaying the quiz questions and answers

export default function Quiz() {
  const currentQuestion = {};
  const answerChoices = [];
  const playerAnswer = { S: 0, M: 0, B: 0 };
  const number = [1];
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    getQuestion(number);
    populateQA();
  }, []);

  function Play() {
    console.log("i was clicked in play", currentQuestion, playing);

    if (playing && currentQuestion.length !== 0) {
      return (
        <>
          <div className="question-card">
            <h2>{currentQuestion.question}</h2>
            <ul>
              <li>{answerChoices[0]}</li>
              <li>{answerChoices[1]}</li>
              <li>{answerChoices[2]}</li>
            </ul>
          </div>
        </>
      );

      //quiz blank card
    } else {
      return <div>oops</div>;
    }
  }
  //should useEffect here so that it reloads with each new question

  function getQuestion(num) {
    fetch("/questions").then((res) => {
      const questions = res.body;
      console.log("getQuestion", questions);
      if (num > 0 && num < questions.length) {
        currentQuestion.question = questions[num];
      }
      //make sure that the question is an object of the questionid and question
      //take json.object and set currentQuestion = questions[0]
    });
  }

  // now the correlating answerchoices need to be fetched
  function populateQA() {
    //get the answers by question ID
    fetch(`/answers/${number}`).then((res) => {
      const answers = res.body;
      console.log("populateQA", answers);

      for (const e in answers) {
        answerChoices.push(e);
      }
    });

    return answerChoices;
  }

  // useEffect(() => {
  //   getQuestion();
  //   populateQA();
  // }, []);

  //maybe a useRef for the button/card
  //maybe look into that axios library
  return (
    <>
      <button
        className="play"
        onClick={() => {
          setPlaying(!playing);
          Play();
        }}
      >
        TAKE CHARACTER QUIZ
      </button>

      {/* playing && <div>{Question()} */}
    </>
  );
}
//onClick={}
