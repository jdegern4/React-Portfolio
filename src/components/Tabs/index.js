import React from "react";
import AboutMe from '../About-Me';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';

function Tabs({ currentTab }) {
    const renderTab = () => {
        switch (currentTab.name) {
            case "AboutMe":
                return <AboutMe/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <ContactForm/>;
            case "Resume":
                return <Resume/>;
            default:
                return <AboutMe/>;
        }
    }
}

export default Tabs;