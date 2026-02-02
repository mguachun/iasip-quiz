import React from "react";

const Score = ({ score, onNextQuestion }) => {
  const getMessage = (score) => {
  if (score === 20) return "Perfect score! You are a GOLDEN GOD 🧠🔥";
  if (score >= 15) return "Great job! You're a five star man! 🌟👏";
  if (score >= 10) return "Nice effort! Da maniac loves you 💪";
  return "Don't worry—but you might have donkey brains 🥚";
};
  return (
    <div className="score-section text-center">
      <h2>Quiz Complete! 🎉</h2>
      <h4>You scored {score}/20</h4>
      <p className="lead">{getMessage(score)}</p>
      <button className="btn btn-success mt-3" onClick={onNextQuestion}>
        Try Again
      </button>
    </div>
  );
};

export default Score;
