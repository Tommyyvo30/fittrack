import React from "react";
import Header from "./Header";
const AboutUs = () => {
  return (
    <div className="about-us-hero">
      <Header />
      <div className="about-us-hero-content">
        <h1>Welcome to FitTrack</h1>
        <p>Your fitness journey starts here.</p>
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          FitTrack is your personal fitness companion, helping you stay on track
          with your fitness goals. Our platform offers a variety of tools to
          monitor your workouts, create custom workout plans, and explore a wide
          range of exercises. Whether you're a fitness enthusiast or just
          starting your journey, FitTrack is here to support you every step of
          the way.
        </p>
        <p>
          Our team is dedicated to providing you with the best experience
          possible, constantly updating and improving our features based on user
          feedback. Join the FitTrack community today and take the first step
          towards a healthier, happier you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
