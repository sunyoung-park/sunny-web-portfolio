import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar"; 
import Section from "./components/Section";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="app">
      <Navbar /> 
      <main>
        <Section id="profile" title="디자인에 깊은 이해를 가진 앱 개발자" backgroundColor="lightblue">
          <p>안녕하세요. 디자인 지식이 풍부한 앱 개발자 박선영입니다.</p>
        </Section>
        <Section id="contact" backgroundColor="lightgreen">
          <Contact />
        </Section>
        <Section id="introduce" title="Introduce" backgroundColor="lightcoral">
          <p>This is the Contact section.</p>
        </Section>
      </main>
    </div>
  );
}

export default App
