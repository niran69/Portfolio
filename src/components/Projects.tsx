import React from "react";
import "./Projects.css";
import { Layers } from "lucide-react";

const projects = [
  {
  title: "FoodHub – System Design & Architecture",
  description:
    "Production‑ready system design documentation covering architecture, ERD, API design, security, and deployment strategy.",
  link: "https://foodhub-docs.vercel.app",
  icon: "architecture",
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
         <div className="project-card p-8 rounded-xl bg-[#111] hover:bg-[#151515] transition-all duration-300">
  {project.title.includes("FoodHub") && (
    <div className="mb-4 text-orange-400">
      <Layers size={28} strokeWidth={2} />
    </div>
  )}

  <h3 className="text-lg font-semibold text-white">
    {project.title}
  </h3>

  <p className="text-sm text-white/70 mt-3 leading-relaxed">
    {project.description}
  </p>

  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-400 mt-4 inline-block font-medium hover:underline"
    >
      View Documentation →
    </a>
  )}
</div>
        ))}
      </div>
    </section>
  );
};

export default Projects;