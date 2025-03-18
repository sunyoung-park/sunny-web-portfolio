import React from "react";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">SunnySunny</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("profile")}>Profile</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => scrollToSection("introduce")}>Introduce</li>
        <li onClick={() => scrollToSection("work-experience")}>WorkExperience</li>
      </ul>
    </nav>
  );
};

export default Navbar;