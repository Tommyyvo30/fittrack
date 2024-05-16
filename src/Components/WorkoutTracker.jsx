import React, { useState } from "react";

const WorkoutTrackerPage = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    setWorkouts([...workouts, { name: "", sets: "", reps: "", weight: "" }]);
  };

  const updateWorkout = (index, field, value) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index][field] = value;
    setWorkouts(updatedWorkouts);
  };

  const deleteWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="workout-tracker">
      <h2>Workout Tracker</h2>
      {workouts.map((workout, index) => (
        <div key={index} className="workout">
          <input
            type="text"
            placeholder="Exercise Name"
            value={workout.name}
            onChange={(e) => updateWorkout(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Sets"
            value={workout.sets}
            onChange={(e) => updateWorkout(index, "sets", e.target.value)}
          />
          <input
            type="number"
            placeholder="Reps"
            value={workout.reps}
            onChange={(e) => updateWorkout(index, "reps", e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight"
            value={workout.weight}
            onChange={(e) => updateWorkout(index, "weight", e.target.value)}
          />
          <button onClick={() => deleteWorkout(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addWorkout}>Add Workout</button>
    </div>
  );
};

export default WorkoutTrackerPage;
