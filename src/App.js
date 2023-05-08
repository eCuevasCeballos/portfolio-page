/* Imports the components */
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

/* Main structure of the page */
function App() {
  return (
    <div>
      <nav role='navigation'>
        <NavBar />
      </nav>
      <div role='main'>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
