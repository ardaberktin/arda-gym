import React from "react";
import "../Components/StartEmptyWorkout.css";

function StartEmptyWorkout() {
  return (
    <div className="start-empty-workout">
      <div className="start-empty-container">
        <h1>Start Workout</h1>
        <p>Quick Start</p>
        <div className="empty-workout-button-container">
          <button className="empty-workout-button">
            <p>Start an Empty Workout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartEmptyWorkout;
