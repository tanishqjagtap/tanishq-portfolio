import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [navBg, setNavBg] = useState(false);

  const handleScroll = () => {
    const sections = ["home", "about", "skills", "Certifications", "projects", "contact"];
    const scrollPos = window.scrollY + 200;

    for (let sec of sections) {
      const element = document.getElementById(sec);
      if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
        setActive(sec);
      }
    }

    setNavBg(window.scrollY > 50); // navbar background appears on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top glass-nav ${navBg ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-light" href="#home">
          <span className="text-gradient">Tanishq Jagtap</span>
        </a>

        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            {["Home", "About", "Skills", "certifications", "Projects", "Contact"].map((item) => (
              <li key={item} className="nav-item mx-2">
                <a
                  className={`nav-link ${active === item.toLowerCase() ? "active" : ""}`}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
