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
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links" role="navigation">
        {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
        ].map((item) => (
            <li key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;