import React from 'react';
import './GradientProgressBar.css';

const GradientProgressBar = ({ progress }) => {
  const labelOffset = `calc(${100 - progress}% - 40px)`;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
      <div
        className="progress-label"
        style={{ right: labelOffset }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default GradientProgressBar;
