import React from "react";
import About from '../About-Me';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';
import TabContent from "../Tab-Content";

function Tabs({ currentTab }) {
    const renderTab = () => {
        switch (currentTab.name) {
            case "About":
                return <About/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <ContactForm/>;
            case "Resume":
                return <Resume/>;
            default:
                return <About/>;
        }
    }

    return (
        <div>
            <TabContent>{renderTab()}</TabContent>
        </div>
    )
}

export default Tabs;