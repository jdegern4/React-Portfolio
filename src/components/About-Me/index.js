import React from "react";

function AboutMe() {
  return (
    <section className="introduction">
      <div className="headshot">
        <img
          src={require(`../../assets/Jordan Degerness headshot.png`)}
          // Last name spelled incorrectly to ensure TTS pronounces it correctly
          alt={`Jordan Dehgrrness headshot`}
        ></img>
      </div>
      <p>
        I am a full-stack web developer utilizing my background in music to
        bring strong creativity and problem-solving skills to all aspects of web
        applications. <br></br><br></br>I always keep efficiency, readability,
        responsiveness, and intuitive design at forefront of priorities for
        source code and end products alike. <br></br><br></br>I am a quick learner and
        amicable and communicative collaborator who values strong chemistry in
        workgroups to maximize value of deliverables.
      </p>
    </section>
  );
}

export default AboutMe;