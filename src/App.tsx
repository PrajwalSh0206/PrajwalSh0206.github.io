import './css/App.scss';
import HeroPage from './components/HeroPage';
import Skill from './components/Skills/Skill';
import './css/Navbar.scss';
import FooterSection from './components/Footer/Footer';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Work from './components/Work/Work';
import { useState } from 'react';
import FloatingButton from './components/common/FloatingButton';

function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  return (
    <div className="flex w-full h-full">
      <Navbar display={toggleDisplay}></Navbar>
      <div className="lg:w-9/12 w-full">
        <FloatingButton setToggleDisplay={setToggleDisplay} toggleDisplay={toggleDisplay}></FloatingButton>
        <HeroPage></HeroPage>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Work></Work>
        <Contacts></Contacts>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default App;
