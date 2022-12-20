import { Link } from 'react'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import './App.css'
import AboutUs from './components/AboutUs';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <LandingPage/>
      <AboutUs />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
