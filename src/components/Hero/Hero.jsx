import './Hero.css';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <p className='eyebrow'>Hi I'm</p>
            <h1>Berl Weber</h1>
            <h2>Full-Stack Web Developer</h2>
            <h3 className='accent'>with a Back-End Focus and Product Mindset</h3>
            <p>I’m particularly drawn to complex logic, debugging, and analytical problem-solving, and
                 I aim to build clear, reliable systems with attention not only to technical correctness, 
                 but also to usability, maintainability, and the overall user experience.</p>
            <div className='call-to-action'>
                <a href="#projects">
                    View My Work
                    <ArrowRight />
                </a>
                <a href="#contact">
                    Contact Me
                    <Mail />
                </a>
            </div>
        </>
    );
};

export default Hero;