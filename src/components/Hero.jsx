import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero-section text-center text-light">
      <div className="hero-overlay"></div>
      <div className="container position-relative" data-aos="fade-up">
        <h1 className="display-3 fw-bold mb-3">
          Hi, I'm <span className="text-gradient">TanishqJagtap</span>
        </h1>
        <p className="lead mb-4">Game Developer | UI Enthusiast | Problem Solver</p>
        <a href="#projects" className="btn btn-outline-light btn-lg">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
