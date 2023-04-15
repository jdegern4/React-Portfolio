import React from "react";

function Resume() {
  return (
    <section className="RC-flex">
      <div>
        <a
          href="https://docs.google.com/document/d/1Y1FyZZZQn1q20k62DcSfKXLuWPbcgvaTVeCEUvc90gs/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <big>Download Resume</big>
        </a>
        <h3>I am skilled in:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript ES5 & ES6</li>
          <li>React</li>
          <li>Node.js</li>
          <li>jQuery</li>
          <li>SQL/noSQL/GraphQL</li>
          <li>MongoDB/Mongoose</li>
          <li>Express.js</li>
          <li>APIs (Third-Party, Web, Server-Side)</li>
          <li>GitHub/Version Control</li>
          <li>Progressive Web Applications</li>
          <li>Familiar with CI/CD, Agile, Scrum, and Kanban</li>
        </ul>
      </div>
      <br></br>
      <div className="dog-photo">
        <img
          src={require(`../../assets/Tika.jpg`)}
          alt={`Jordan and Tika, the dog`}
        ></img>
      </div>
    </section>
  );
}

export default Resume;
