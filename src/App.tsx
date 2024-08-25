import './css/App.scss';
import HeroPage from './components/HeroPage';
import Skill from './components/Skills/Skill';
import './css/Navbar.scss';
// import ProjectSection from './components/ProjectSection'
import FooterSection from './components/Footer';

import { navlist } from './props/data/navLink';
import NavLink from './components/common/NavLink';
import About from './components/About';

function App() {
  return (
    <div className="flex w-full h-full">
      <div className="w-3/12 h-100 bg-gray-800"></div>
      <div className="w-9/12">
        <HeroPage></HeroPage>
        <About></About>
        <Skill></Skill>
      </div>
    </div>
  );
}

export default App;
