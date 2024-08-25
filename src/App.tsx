import './css/App.scss';
import HeroPage from './components/HeroPage';
import Skill from './components/Skills/Skill';
import './css/Navbar.scss';
import FooterSection from './components/Footer/Footer';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="flex w-full h-full">
      <div className="w-3/12"></div>
      <Navbar></Navbar>
      <div className="w-9/12">
        <HeroPage></HeroPage>
        <About></About>
        <Skill></Skill>
        <Contacts></Contacts>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default App;
