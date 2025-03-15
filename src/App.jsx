import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar"; 
import Section from "./components/Section";

function App() {

  return (
    <div className="app">
      <Navbar /> {/* ✅ Navbar 추가 */}
      <main>
        <Section id="about" title="About" backgroundColor="lightblue">
          <p>This is the About section.</p>
        </Section>
        <Section id="projects" title="Projects" backgroundColor="lightgreen">
          <p>This is the Projects section.</p>
        </Section>
        <Section id="contact" title="Contact" backgroundColor="lightcoral">
          <p>This is the Contact section.</p>
        </Section>
      </main>
    </div>
  );
}

export default App
