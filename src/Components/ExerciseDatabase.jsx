import React, { useState } from "react";
import "../Styles/App.css";

const ExerciseDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${searchTerm}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "HDSdmguEdXTHZd++VYZDiw==f5p31ItZo9SPfG4P",
        },
      }
    );
    const data = await response.json();
    setExercises(data);
    setSelectedExercise(null); // Reset selected exercise on new search
  };

  const selectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="exercise-database-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for an exercise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {selectedExercise ? (
        <div className="selected-exercise-details">
          <h2>{selectedExercise.name}</h2>
          <p>Type: {selectedExercise.type}</p>
          <p>Muscle: {selectedExercise.muscle}</p>
          <p>Equipment: {selectedExercise.equipment}</p>
          <p>Difficulty: {selectedExercise.difficulty}</p>
          <p>{selectedExercise.instructions}</p>
        </div>
      ) : (
        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="exercise-item"
              onClick={() => selectExercise(exercise)}
            >
              <h3>{exercise.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseDatabase;
