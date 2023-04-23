import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
