import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
