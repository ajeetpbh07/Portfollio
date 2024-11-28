// src/components/Projects.jsx
import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Bhandara Project',
      description: 'A MERN-based platform to combat hunger by connecting food donors with recipients.',
      link: 'https://github.com/your-username/bhandara-project',
    },
    {
      title: 'E-commerce Platform',
      description: 'A user-friendly e-commerce application with features like product listings, user profiles, and role-based access control.',
      link: 'https://github.com/your-username/ecommerce-project',
    },
    {
      title: 'AI Classroom Platform',
      description: 'An AI-driven platform designed to improve student engagement with features like automatic summarization and quiz generation.',
      link: 'https://github.com/your-username/ai-classroom-platform',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
