import React from "react";
import "../App.css";
import "./Workout.css";

import StartEmptyWorkout from "../Components/StartEmptyWorkout";
import Templates from "../Components/Templates";

function Workout() {
  return (
    <div className="workout">
      <StartEmptyWorkout />
      <Templates />
    </div>
  );
}

export default Workout;
