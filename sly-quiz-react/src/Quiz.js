import React, { useState, useEffect } from "react";
import sly from "./images/sly.png";
import bentley from "./images/bentley.png";
import murray from "./images/murray.png";

//this file will handle Displaying the quiz questions and answers
//shit

export default function Quiz() {
  const allQuestions = [];
  //const storePA = { S: 0, M: 0, B: 0 };

  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    getQuestion();
    populateQA(0);
  }, []);

  const [qNumber, setQNumber] = useState(0);
  const [questions, setQuestions] = useState(0);
  const [choices, setChoices] = useState([{ answer: "girl you crazy" }]);
  const [playerAnswer, setPlayerAnswer] = useState({ S: 0, M: 0, B: 0 });
  const number = qNumber + 1;
  console.log("number", number);

  //should useEffect here so that it reloads with each new question

  function getQuestion() {
    fetch(`http://127.0.0.1:5000/questions/`, {
      mode: "cors",
    })
      .then(function (data) {
        return data.json();
      })
      .then((ques) => {
        if (allQuestions.length === 0) {
          const theseQs = [];
          for (const e of ques) {
            theseQs.push(e);
          }
          return setQuestions(theseQs);
        } else {
          return "all questions loaded";
        }
      });
  }

  // now the correlating answerchoices need to be fetched
  function populateQA(num) {
    console.log("number in QA", number);
    //get the answers by question ID
    fetch(`http://127.0.0.1:5000/answers/${num + 1}`, {
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((Ans) => {
        console.log("populateQA", Ans);
        const currentChoices = [];
        for (const e of Ans) {
          currentChoices.push(e);
        }
        return setChoices(currentChoices);
      });
  }

  function tally(x) {
    if (x === "M") {
      setPlayerAnswer({ ...playerAnswer, M: playerAnswer.M + 1 });
    } else if (x === "S") {
      setPlayerAnswer({ ...playerAnswer, S: playerAnswer.S + 1 });
    } else if (x === "B") {
      setPlayerAnswer({ ...playerAnswer, B: playerAnswer.B + 1 });
    }
    return playerAnswer;
  }

  function getResults(pa) {
    console.log("gr", pa);
    if (pa.M > (pa.S && pa.B)) {
      return murray;
    }
    if (pa.S > (pa.M && pa.B)) {
      return sly;
    }
    if (pa.B > (pa.M && pa.S)) {
      return bentley;
    } else {
      return sly;
    }
  }

  return (
    <>
      {!playing && (
        <button
          className="play"
          onClick={() => {
            setPlaying(!playing);
            setDone(false);
            setQNumber(0);
            populateQA(0);
            setPlayerAnswer({ S: 0, M: 0, B: 0 });
          }}
        >
          TAKE CHARACTER QUIZ
        </button>
      )}

      {playing && (
        <div className="question-card">
          <h2>{questions[qNumber].question}</h2>
          <ul>
            <li
              onClick={() => {
                tally(choices[0].answercode);
                if (qNumber + 1 >= questions.length) {
                  setPlaying(false);
                  setDone(true);
                } else {
                  setQNumber(qNumber + 1);
                  populateQA(qNumber + 1);
                }
              }}
            >
              {choices[0].answer}
            </li>
            <li
              onClick={() => {
                tally(choices[1].answercode);
                if (qNumber + 1 >= questions.length) {
                  setPlaying(false);
                  setDone(true);
                } else {
                  setQNumber(qNumber + 1);
                  populateQA(qNumber + 1);
                }
              }}
            >
              {choices[1].answer}
            </li>
            <li
              onClick={() => {
                tally(choices[2].answercode);
                if (qNumber + 1 >= questions.length) {
                  setPlaying(false);
                  setDone(true);
                } else {
                  setQNumber(qNumber + 1);
                  populateQA(qNumber + 1);
                }
              }}
            >
              {choices[2].answer}
            </li>
          </ul>
        </div>
      )}
      {!playing && done && (
        <div className="show-result">
          <h3> Welcome to the gang!</h3>
          <img src={getResults(playerAnswer)} alt="getResults" />
        </div>
      )}
    </>
  );
}

//return getResults(playerAnswer)

//onClick={}
// useEffect(() => {
//   getQuestion(number);
//   populateQA();
// }, []);
