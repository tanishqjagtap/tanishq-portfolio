import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pro1 from "../assets/pro1.png"; // ✅ Fixed import path

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ Init AOS inside useEffect
  }, []);

  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "Made using Node.js,javascript,css,3models(blender)",
      image: pro1,
      link: "google.com",
    },

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container-fluid px-5 text-center">
        <h2 className="mb-5 text-gradient" data-aos="fade-up">
          My Projects
        </h2>
        <div className="row justify-content-center">
          {projects.map((proj, index) => (
            <div
              className="col-md-5 mb-5"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              <div className="project-card">
                <img src={proj.image} alt={proj.title} className="project-img" />
                <div className="project-overlay">
                  <h4>{proj.title}</h4>
                  <p className="mb-3">{proj.description}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
