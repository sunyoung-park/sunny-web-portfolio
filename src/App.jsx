import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar"; // Navbar 컴포넌트 추가

function App() {

  return (
    <div className="app">
      <Navbar /> {/* ✅ Navbar 추가 */}
      <main>
        <section id="about">
          <h2>About</h2>
          <p>This is the About section.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>This is the Projects section.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the Contact section.</p>
        </section>
      </main>
    </div>
  );
}

export default App
