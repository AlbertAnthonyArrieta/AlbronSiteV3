import './App.css';
import Container from 'react-bootstrap/Container';
import './components/sections/HeroSection/HeroSection.js';
import Navbar from './components/common/navbar/Navigation.js';
import HeroSection from './components/sections/HeroSection/HeroSection.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
      <HeroSection />
      </Container>
    </div>
  );
}

export default App;
