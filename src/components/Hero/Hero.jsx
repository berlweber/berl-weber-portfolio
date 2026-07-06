import './Hero.css';
import heroPhoto from '../../assets/hero.png'
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section>
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
                <div className='links-to-accounts'>
                    <p>Let's connect:
                        <FaGithub />
                        <FaLinkedin />
                    </p>
                </div>
            </div>
            <img src={heroPhoto} alt="photo of Berl Weber"
             className='hero-photo'/>
        </section>
    );
};

export default Hero;