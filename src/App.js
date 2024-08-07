
import './App.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Education from './componenets/Education/Education';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import Scrollup from './componenets/Scrollup/Scrollup';
import Skills from './componenets/Skills/Skills';
import Work from './componenets/Work/Work'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
              <Home />
              <About />
              <Skills/>
              <Education/>
              <Work/>
              <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  );
}

export default App;
