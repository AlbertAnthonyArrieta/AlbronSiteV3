import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home.js';
import Contact from "./components/pages/contact/Contact.js";
import Facilities from "./components/pages/Projects/FacilitiesPage/FacilitiesPage.js";
import Wellpads from "./components/pages/Projects/WellPadsPage/WellPadsPage.js";
import Pipelines from "./components/pages/Projects/PipelinesPage/PipelinesPage.js";
import PowerGeneration from "./components/pages/Projects/PowerGenerationPage/PowerGenerationPage.js";

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
      </Routes>
    </>
  );
}

export default App;
