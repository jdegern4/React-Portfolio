import React from "react";

const Portfolio = () => {
  return (
    <section className="JD-portfolio">
      <div className="project-flex">
        <div className="project-col">
          <div className="project-title">
            <a
              href="https://github.com/jdegern4/Julias_Children"
              target="blank"
              rel="noreferrer"
            >
              Julia's Children
            </a>
          </div>
          <a
            href="https://arcane-brushlands-08991.herokuapp.com/"
            target="blank"
            rel="noreferrer"
          >
            <img
              className="project-img"
              src={require(`../../assets/Julias-Children.jpg`)}
              alt={`Julia's Children`}
            />
          </a>
        </div>
        <div className="project-col">
          <div className="project-title">
            <a
              href="https://github.com/jdegern4/Get-Facts-and-Find-Cats"
              target="blank"
              rel="noreferrer"
            >
              Get Facts and Find Cats
            </a>
          </div>
          <a
            href="https://mcamy2001.github.io/Get-Facts-and-Find-Cats/"
            target="blank"
            rel="noreferrer"
          >
            <img
              className="project-img"
              src={require(`../../assets/GFAFC.PNG`)}
              alt={`Get Facts and Find Cats`}
            ></img>
          </a>
        </div>
        <div className="project-col">
          <div className="project-title">
            <a
              href="https://github.com/jdegern4/do-the-ding-dang-thing"
              target="blank"
              rel="noreferrer"
            >
              Do the Ding Dang Thing
            </a>
          </div>
          <a
            href="https://guarded-taiga-92417.herokuapp.com/"
            target="blank"
            rel="noreferrer"
          >
            <img
              className="project-img"
              src={require(`../../assets/DtDDT.png`)}
              alt={`Do the Ding Dang Thing`}
            ></img>
          </a>
        </div>
        <div className="project-col">
          <div className="project-title">
            <a
              href="https://github.com/jdegern4/Social-Network-API"
              target="blank"
              rel="noreferrer"
            >
              Social Network API
            </a>
          </div>
          <span>
            <img
              className="project-img"
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
