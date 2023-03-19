import React from "react";

const Portfolio = () => {
    return (
        <section className="JD-portfolio">
            <div>
                <span><a href="https://github.com/jdegern4/Julias_Children">Julia's Children</a></span>
                <a href="https://arcane-brushlands-08991.herokuapp.com/"><img src={require(`../../assets/Julias-Children.jpg`)} alt={`Julia's Children`}/></a>
            </div>
            <div>
                <span><a href="https://github.com/jdegern4/Get-Facts-and-Find-Cats">Get Facts and Find Cats</a></span>
                <a href="https://mcamy2001.github.io/Get-Facts-and-Find-Cats/"><img src={require(`../../assets/GFAFC.PNG`)} alt={`Get Facts and Find Cats`}></img></a>
            </div>
            <div>
                <span><a href="https://github.com/jdegern4/do-the-ding-dang-thing">Do the Ding Dang Thing</a></span>
            </div>
            <div>
                <span><a href="https://github.com/jdegern4/Social-Network-API">Social Network API</a></span>
            </div>
        </section>
    )
}

export default Portfolio;