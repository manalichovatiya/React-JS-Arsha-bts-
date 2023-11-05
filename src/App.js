import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Portfolio from './Portfolio';
import Team from './Team';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/team" exact element={<Team/>} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
