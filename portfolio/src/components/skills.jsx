// src/components/Skills.jsx
import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skills = [
    'React',
    'JavaScript',
    'C++',
    'Git/GitHub',
    'HTML',
    'CSS',
    'OOPS',
    'DBMS'
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
