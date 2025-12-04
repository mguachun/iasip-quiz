import React from "react";

const Score = ({ score, onNextQuestion }) => {
  return (
    <div className="score-section text-center">
      <h2>Quiz Complete!</h2>
      <h4>Your score: {score}/20</h4>
      <button className="btn btn-success mt-3" onClick={onNextQuestion}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Score;
