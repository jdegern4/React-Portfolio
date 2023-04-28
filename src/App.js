import React from "react";
import "./App.css";
import Nav from "../src/components/Nav";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./components/About-Me";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <main className="components">
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="*"
            element={<Navigate to="/about-me" replace={true} />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
