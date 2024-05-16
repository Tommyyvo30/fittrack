import React from "react";
import "../Styles/App.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  let navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/features");
  };

  const handleLoginRegisterClick = () => {
    navigate("/Register_Login"); // Change this to your login/register page route
  };

  return (
    <div className="homepage">
      <Header />
      <div className="overlay-content">
        <p>Welcome to FitTrack, your personal fitness tracker.</p>
        <div className="buttons-container">
          <button className="learn-more-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>
          <button
            className="login-register-button"
            onClick={handleLoginRegisterClick}
          >
            Login/Register
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
