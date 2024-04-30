import '../css/App.css';
import Navbar from './Navbar';
import HeroSection from './Hero';
import SectionWithCards from './Section';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SectionWithCards />
      <Footer />
    </div>
  );
}

export default App;
