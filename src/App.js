import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/sections/HeroSection/HeroSection.js';
import Navbar from './components/common/navbar/Navigation.js';
import HeroSection from './components/sections/HeroSection/HeroSection.js';
import AboutSection from './components/sections/AboutSection/AboutSection.js';
import ServiceSection from './components/sections/ServiceSection/ServiceSection.js';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
