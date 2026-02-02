// App.jsx

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import Score from "./Components/Score";
import qBank from "./Components/QuestionBank";
import "./App.css";

const App = () => {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Check answer and move to next question
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if selected option matches the answer
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or end quiz
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="app-title mb-4">It's Always Sunny Quiz</h1>

      {!quizEnd ? (
        <div className="question-card card shadow-lg p-4 mb-4">
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            onSubmit={handleFormSubmit}
          />
        </div>
      ) : (
        <div className="score-card card shadow-lg p-4 mb-4 text-center">
          <Score score={score} onNextQuestion={handleRestart} className="score-section" />
        </div>
      )}
    </div>
  );
};

export default App;
