import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Projects from './components/Projects/Projects.jsx';

const App = () => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </>
  );
};

export default App;