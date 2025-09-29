import React from 'react';
import profilePhoto from '../assets/himanshu.jpg'; // Import your photo
import TypingEffect from './TypingEffect'; // Import the new typing component

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src={profilePhoto}
          alt="Himanshu Kirodiwal"
          className="profile-photo"
        />
        <h1>Himanshu Kirodiwal</h1>
        <div className="subtitle"><TypingEffect /></div>
        <p>
          Passionate about creating innovative web solutions and bringing ideas
          to life through code
        </p>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;