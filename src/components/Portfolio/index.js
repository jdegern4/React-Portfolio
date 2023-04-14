import React from "react";

const Portfolio = () => {
  return (
    <section className="JD-portfolio">
      <div className="project-flex">
        <div className="project-col">
          <span>
            <a href="https://github.com/jdegern4/Julias_Children">
              <p className="project-title"><strong>Julia's Children</strong></p>
            </a>
          </span>
          <a href="https://arcane-brushlands-08991.herokuapp.com/">
            <img className="project-img"
              src={require(`../../assets/Julias-Children.jpg`)}
              alt={`Julia's Children`}
            />
          </a>
        </div>
        <div className="project-col">
          <span>
            <a href="https://github.com/jdegern4/Get-Facts-and-Find-Cats">
              <p className="project-title"><strong>Get Facts and Find Cats</strong></p>
            </a>
          </span>
          <a href="https://mcamy2001.github.io/Get-Facts-and-Find-Cats/">
            <img className="project-img"
              src={require(`../../assets/GFAFC.PNG`)}
              alt={`Get Facts and Find Cats`}
            ></img>
          </a>
        </div>
        <div className="project-col">
          <span>
            <a href="https://github.com/jdegern4/do-the-ding-dang-thing">
              <p className="project-title"><strong>Do the Ding Dang Thing</strong></p>
            </a>
          </span>
          <a href="https://guarded-taiga-92417.herokuapp.com/">
            <img className="project-img"
              src={require(`../../assets/DtDDT.png`)}
              alt={`Do the Ding Dang Thing`}
            ></img>
          </a>
        </div>
        <div className="project-col">
          <span>
            <a href="https://github.com/jdegern4/Social-Network-API">
            <p className="project-title"><strong>Social Network API</strong></p>
            </a>
          </span>
          <span>
            <img className="project-img"
            src={require(`../../assets/SNAPI.png`)}
            alt={`Social Network API`}
            ></img>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
