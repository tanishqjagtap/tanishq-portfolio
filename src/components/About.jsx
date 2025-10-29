import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import profileImg from "../assets/profile.jpg"; // update with your correct image path

AOS.init();

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container-fluid px-5">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-lg-4 col-md-5 mb-5 mb-md-0 text-center"
            data-aos="fade-right"
          >
            <img
              src="images/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle about-img shadow-lg"
            />
          </div>

          <div className="col-lg-6 col-md-7 text-center text-md-start" data-aos="fade-left">
            <h2 className="text-gradient mb-4">About Me</h2>
            <p className="lead text-light mb-3">
              Hi, I'm <strong>Tanishq</strong> — a passionate developer who loves
              creating dynamic, visually stunning web experiences. I specialize in
              React, CSS, and Bootstrap, and I’m always learning new technologies
              to keep up with modern trends.
            </p>
            <p className="text-secondary">
              I believe great design and clean code can turn any idea into an
              impactful digital product. Outside of coding, I enjoy fitness,
              gaming, and exploring creative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
