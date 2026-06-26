import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Modern ecommerce platform with React & Stripe.",
    image: "/assets/project1.jpg",
    link: ""
  },

  {
    title: "FoodHub – System Design & Architecture",
    description:
      "Comprehensive technical documentation of a Spring Boot + React full-stack Food Delivery platform covering architecture, ERD, API design, JWT security, deployment strategy, and scalability.",
    image: "/assets/foodhub.jpg",
    link: "https://foodhub-docs.vercel.app"
  },

  {
    title: "Brand Identity Design",
    description: "Complete branding package for startup.",
    image: "/assets/project2.jpg",
    link: ""
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

  <button className="text-red-500 mt-2">
    View Project
  </button>
</div>
        ))}
      </div>
    </section>
  );
};

export default Projects;