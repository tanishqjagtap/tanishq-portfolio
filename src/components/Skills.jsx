import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Bootstrap",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX Basics",
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container-fluid px-5 text-center">
        <h2 className="mb-5 text-gradient" data-aos="fade-up">
          My Skills
        </h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              className="col-6 col-md-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="skill-card">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
