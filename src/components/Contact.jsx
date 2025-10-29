import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-fluid px-5 text-center">
        <h2 className="mb-4 text-gradient" data-aos="fade-up">
          Contact Me
        </h2>
        <p className="mb-5 text-secondary" data-aos="fade-up" data-aos-delay="100">
          Let’s work together! Fill out the form below and I’ll get back to you soon.
        </p>

        <form
          className="mx-auto"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-lg px-5 py-2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
