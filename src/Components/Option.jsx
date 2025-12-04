import React from "react";

const Option = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <div key={index} className="form-check">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
            className="form-check-input"
            id={`option-${index}`}
          />
          <label htmlFor={`option-${index}`} className="form-check-label">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Option;
