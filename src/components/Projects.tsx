import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "FoodHub – System Design & Architecture",
    description:
      "Comprehensive technical documentation of a Spring Boot + React full-stack Food Delivery platform covering architecture, ERD, API design, JWT security, deployment strategy, and scalability.",
    image: "https://via.placeholder.com/600x400?text=FoodHub+Docs",
    link: "https://foodhub-docs.vercel.app",
  },
  {
    title: "E-Commerce Website",
    description:
      "Modern ecommerce platform built with React & Stripe integration.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce",
    link: "",
  },
  {
    title: "Brand Identity Design",
    description: "Complete branding package for startup.",
    image: "https://via.placeholder.com/600x400?text=Brand+Design",
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
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;