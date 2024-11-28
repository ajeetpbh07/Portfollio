// src/components/Home.jsx
import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Ajeet Kumar</h1>
        <p className="home-description">
          Frontend React Developer 
        </p>
        <a href="#contact" className="home-btn">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
