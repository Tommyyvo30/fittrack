import React from "react";
import Header from "./Header";

const ContactUs = () => {
  return (
    <div className="contact-us-hero">
      <Header />
      <div className="contact-us-hero-content">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any question you might have.</p>
      </div>
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
