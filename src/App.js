import React, { useState } from "react";
import './App.css';
import Nav from '../src/components/Nav';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Tabs from '../src/components/Tabs';

function App() {
  const [tabs] = useState([
    {
      name: "AboutMe",
    },
    {
      name: "Contact",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Header>
          <Nav
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          ></Nav>
        </Header>
      </header>
      <main>
        <Tabs currentTab={currentTab}></Tabs>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;