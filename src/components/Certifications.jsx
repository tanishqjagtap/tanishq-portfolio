import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Coursepdf from "../assets/Course.pdf";

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const certifications = [

    {
      title: "Redhat",
      issuer: "Redhat",
      date: "2025",
      description:
        "Certificate given by RedHat for its courses",
      link: Coursepdf,
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container text-center">
        <h2 className="mb-5 text-gradient" data-aos="fade-up">
          Certifications
        </h2>

        <div className="row justify-content-center">
          {certifications.map((cert, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="cert-card p-4 h-100">
                <h4 className="mb-2">{cert.title}</h4>
                <h6 className="text-secondary mb-2">
                  {cert.issuer} • {cert.date}
                </h6>
                <p className="mb-3">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
