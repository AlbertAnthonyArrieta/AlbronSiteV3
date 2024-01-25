import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/pages/home/Home.js';
import Contact from "./components/pages/contact/Contact.js";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/contact" Component={Contact} />
    </Routes>
  );
}

export default App;
