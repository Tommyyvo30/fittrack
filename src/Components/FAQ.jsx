import React from "react";
import Header from "./Header";

const FAQ = () => {
  return (
    <div className="faq-hero">
      <Header />
      <div className="faq-hero-content">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to all your queries about FitTrack.</p>
      </div>
      <div className="faq-content">
        {/* General Questions */}
        <div className="faq-section">
          <h2>General Questions</h2>
          <dl className="faq-list">
            <dt>How do I start using FitTrack?</dt>
            <dd>
              You can start by signing up for a free account on our homepage.
              Just click the "Sign Up" button and follow the instructions.
            </dd>

            <dt>Is FitTrack free to use?</dt>
            <dd>
              Yes, the basic version of FitTrack is free. We also offer a
              premium subscription with additional features.
            </dd>

            <dt>Can I use FitTrack on multiple devices?</dt>
            <dd>
              Yes, you can access your FitTrack account from any device with
              internet connectivity.
            </dd>
          </dl>
        </div>

        {/* Subscription Questions */}
        <div className="faq-section">
          <h2>Subscription Questions</h2>
          <dl className="faq-list">
            <dt>How do I upgrade to a premium subscription?</dt>
            <dd>
              You can upgrade to premium through your account settings or by
              clicking on any of the "Go Premium" buttons throughout the app.
            </dd>
            <dt>
              What additional features does the premium subscription offer?
            </dt>
            <dd>
              With premium, you get access to detailed analytics, personalized
              workout plans, and ad-free experience, among other benefits.
            </dd>
          </dl>
        </div>

        {/* Technical Questions */}
        <div className="faq-section">
          <h2>Technical Questions</h2>
          <dl className="faq-list">
            <dt>I forgot my password, how do I reset it?</dt>
            <dd>
              On the login page, click "Forgot Password?" and enter your email
              to receive reset instructions.
            </dd>

            <dt>How can I synchronize my fitness tracker with FitTrack?</dt>
            <dd>
              Go to the "Devices" section in settings, and follow the
              instructions to connect your fitness tracker.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
