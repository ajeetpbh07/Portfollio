// src/components/About.jsx
import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I'm a Computer Science student at Ajay Kumar Garg Engineering College with a specialization in Artificial Intelligence and Machine Learning. 
          I enjoy building scalable web applications and working on innovative projects like Bhandara. 
          My passion lies in leveraging technology to solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
