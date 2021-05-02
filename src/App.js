import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import About from './components/About/About';
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Services />
      <About />
      <Price />
      <Contact />
    </div>
  );
}

export default App;
