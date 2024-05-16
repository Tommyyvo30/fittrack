import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/App.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateToWorkoutTracker = () => {
    navigate("/workout-tracker");
  };
  const navigatetoExerciseDatabase = () => {
    navigate("/exercise-database");
  };
  const navigatetoWorkoutPlanner = () => {
    navigate("/workout-planner");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div
          className="dashboard-item workout-tracker"
          onClick={navigateToWorkoutTracker}
        >
          Workout Tracker
        </div>
        <div
          className="dashboard-item workout-plans"
          onClick={navigatetoWorkoutPlanner}
        >
          Workout Planner
        </div>
        <div
          className="dashboard-item exercise-database"
          onClick={navigatetoExerciseDatabase}
        >
          Exercise Database
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
