import React, { useState, useEffect } from "react";
const workoutOptions = {
  Push: {
    Chest: 3,
    Shoulders: 2,
    Triceps: 1,
  },
  Pull: {
    Biceps: 2,
    Forearms: 1,
  },
  Back1: {
    Middle_Back: 2,
    Lower_Back: 1,
    Biceps: 2,
  },
  Back2: {
    Lats: 3,
    Biceps: 2,
  },
  Leg1: {
    Calves: 1,
    Quadriceps: 3,
    Hamstrings: 1,
  },
  Leg2: {
    Calves: 1,
    Quadriceps: 2,
    Hamstrings: 2,
  },
  ShouldersArms: {
    Shoulders: 3,
    Biceps: 2,
    Triceps: 2,
  },
  ChestBack: {
    Chest: 2,
    Middle_Back: 1,
    Lats: 1,
  },
};
const WorkoutPlanner = () => {
  const [selectedOption, setSelectedOption] = useState("Push");
  const [workoutPlan, setWorkoutPlan] = useState({});

  useEffect(() => {
    const fetchExercises = async (muscleGroup) => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
        {
          headers: { "X-Api-Key": "HDSdmguEdXTHZd++VYZDiw==f5p31ItZo9SPfG4P" },
        }
      );
      const data = await response.json();
      return data;
    };

    const generateWorkout = async () => {
      const plan = {};
      for (const [muscleGroup, numExercises] of Object.entries(
        workoutOptions[selectedOption]
      )) {
        const exercises = await fetchExercises(muscleGroup);
        plan[muscleGroup] = [];
        for (let i = 0; i < numExercises; i++) {
          const randomIndex = Math.floor(Math.random() * exercises.length);
          plan[muscleGroup].push(exercises[randomIndex]);
        }
      }
      setWorkoutPlan(plan);
    };

    generateWorkout();
  }, [selectedOption]);

  return (
    <div className="workout-planner">
      <h2>Workout Planner</h2>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {Object.keys(workoutOptions).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="workout-plan">
        {Object.entries(workoutPlan).map(([muscleGroup, exercises]) => (
          <div key={muscleGroup}>
            <h3>{muscleGroup}</h3>
            <ul>
              {exercises.map((exercise, index) =>
                exercise ? <li key={index}>{exercise.name}</li> : null
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanner;
