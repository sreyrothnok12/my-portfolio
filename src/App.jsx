import {useState} from 'react';
import Sidenav from './components/Sidenav.jsx';
import Main from './components/Main.jsx';
import Work from './components/Work.jsx';
import Skill from './components/Skill.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';


function App(props) {
  return (
    <div>
      <Sidenav />
      <Main />
      {/* <About /> */}
      <Work />
      <Skill />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;