import React from "react";
import Tracker from "../Assets/Tracker.jpg";
import Plan from "../Assets/Plan.png";
import Exercises from "../Assets/Exercises.jpg";
const features = [
  {
    title: "Workout Tracker",
    description:
      "Keep track of your workouts and progress over time with ease.",
    image: Tracker, //Temp image until I find suitable one
    id: 1,
  },
  {
    title: "Workout Plans",
    description:
      "Customizable workout plans to suit your goals and preferences.",
    image: Plan, //Temp image until I find suitable one
    id: 2,
  },
  {
    title: "Exercises",
    description:
      "A vast library of exercises to spice up your fitness routine.",
    image: Exercises, //Temp image until I find suitable one
    id: 3,
  },
];

const FeaturesPage = () => {
  return (
    <div className="featuresPage">
      <div className="features-container">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`feature-row ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
            <div className="feature-description">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
