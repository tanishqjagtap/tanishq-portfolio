import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 text-center text-light bg-black">
      <p className="mb-0 small">
        © {new Date().getFullYear()} Your Name — Crafted with ❤️ using React
      </p>
    </footer>
  );
};

export default Footer;
