import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "FoodHub – System Design & Architecture",
    description:
      "Comprehensive technical documentation of a Spring Boot + React full-stack Food Delivery platform covering architecture, ERD, API design, JWT security, deployment strategy, and scalability.",
    link: "https://foodhub-docs.vercel.app",
  },
  {
    title: "E-Commerce Website",
    description:
      "Modern ecommerce platform built with React & Stripe integration.",
    link: "",
  },
  {
    title: "Brand Identity Design",
    description:
      "Complete branding package for startup.",
    link: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;