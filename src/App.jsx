import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {

  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <div className='about-skills-layout'> 
          <About />
          <TechStack />
        </div>
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;