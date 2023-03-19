import React from "react";

const Portfolio = () => {
    return (
        <section className="JD-portfolio">
            <div>
                <span><a href="https://github.com/jdegern4/Julias_Children">Julia's Children</a></span>
                <a href="https://arcane-brushlands-08991.herokuapp.com/"><img src={require(`../../assets/Julias-Children.jpg`)}/></a>
            </div>
            <div>
                <span><a>Get Facts and Find Cats</a></span>
            </div>
            <div>
                <span><a>Do the Ding Dang Thing</a></span>
            </div>
            <div>
                <span><a>Social Network API</a></span>
            </div>
        </section>
    )
}

export default Portfolio;