import React from "react";
import "../styles/components/Section.scss";

const Section = ({ id, title, children, backgroundColor }) => {
  return (
    <section className="main-section" id={id} style={{ backgroundColor }}>
      <div className="section-wrapper">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;