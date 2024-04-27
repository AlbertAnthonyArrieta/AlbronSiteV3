import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home.js';
import Contact from "./components/pages/contact/Contact.js";

// Project Category  Pages
import Facilities from "./components/pages/Projects/FacilitiesPage/FacilitiesPage.js";
import Wellpads from "./components/pages/Projects/WellPadsPage/WellPadsPage.js";
import Pipelines from "./components/pages/Projects/PipelinesPage/PipelinesPage.js";
import PowerGeneration from "./components/pages/Projects/PowerGenerationPage/PowerGenerationPage.js";

//Project Pages
import CompressorStation1 from './components/pages/Projects/ProjectPages/CompressorStation1/CompressorStation1.js';
import CompressorStation2 from './components/pages/Projects/ProjectPages/CompressorStation2/CompressorStation2.js';
import WellsiteBattery1 from './components/pages/Projects/ProjectPages/WellsiteBattery1/WellsiteBattery1.js';
import WellsiteBattery2 from './components/pages/Projects/ProjectPages/WellsiteBattery2/WellsiteBattery2.js';
import PowerGeneration1 from './components/pages/Projects/ProjectPages/PowerGeneration1/PowerGeneration1.js';

// Service Pages
import  EngineeringandDrafting  from './components/pages/Services/EngineeringandDraftingPage/EngineeringandDraftingPage.js';
import ConstructionDesign from './components/pages/Services/ConstructionDesignPage/ConstructionDesignPage.js';
import Animation from './components/pages/Services/3DAnimationPage/3DAnimationPage.js';
import AsBuilt from './components/pages/Services/AsBuiltPage/AsBuiltPage.js';
import Scanning from './components/pages/Services/3DScanningPage/3DScanningPage.js';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/projects/facilities" Component={Facilities} />
        <Route exact path="/projects/wellpads" Component={Wellpads} />
        <Route exact path="/projects/pipelines" Component={Pipelines} />
        <Route exact path="/projects/powergeneration" Component={PowerGeneration} />

        <Route exact path="/projects/facilities/compressorstation1" Component={CompressorStation1} />
        <Route exact path="/projects/facilities/compressorstation2" Component={CompressorStation2} />
        <Route exact path="/projects/wellpads/wellsitebattery1" Component={WellsiteBattery1} />
        <Route exact path="/projects/wellpads/wellsitebattery2" Component={WellsiteBattery2} />
        <Route exact path="/projects/powergeneration/powergeneration1" Component={PowerGeneration1} />

        
        <Route exact path="/services/engineeringanddrafting" Component={EngineeringandDrafting} />
        <Route exact path="/services/constructiondesign" Component={ConstructionDesign} />
        <Route exact path="/services/3danimation" Component={Animation} />
        <Route exact path="/services/asbuilt" Component={AsBuilt} />
        <Route exact path="/services/3dscanning" Component={Scanning} />
      </Routes>
    </>
  );
}

export default App;
