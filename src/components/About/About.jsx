import './About.css';
import { Brain, BookOpen } from 'lucide-react';
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
    return (
        <section id='about'>
            <h3>About Me</h3>
            <p>I’m a full-stack web developer with a strong analytical and back-end focus, 
                drawn to complex logic, structured problem-solving, and building reliable systems. 
                I enjoy understanding how products work as a whole, improving both the technical 
                foundation and the user experience to help solve real problems effectively.</p>
            <p>I completed a remote Software Engineering Bootcamp at General Assembly after a year of
                 independent self-study in JavaScript and HTML/CSS, strengthening both my technical
                  foundation and my ability to learn new systems quickly.</p>
            <p>Based in Antwerp, Belgium, I work remotely and am comfortable collaborating across
                 time zones, including adapting to US working hours if needed. My experience learning and
                  building in fully remote environments strengthened my communication, self-management, 
                  and independent problem-solving skills. </p>
            <div className='sub-about-sect-container'>
                <div className='sub-sec'>
                    <span><Brain size={22}/></span>
                    <h4>Analytical Problem Solver</h4>
                    <p>I enjoy working through complexity, debugging deeply, and understanding how systems behave 
                        beneath the surface. I’m especially drawn to back-end logic, reliability, and 
                        structured problem-solving.</p>
                </div>
                <div className='sub-sec'>
                    <span><TbTargetArrow size={26}/></span>
                    <h4>Product & User Thinking</h4>
                    <p>I care about both technical correctness and user experience, keeping the bigger
                         picture in mind while refining implementation details. I aim to build products
                          that are clear, maintainable, and genuinely useful. </p>
                </div>
                <div className='sub-sec'>
                    <span><BookOpen size={22}/></span>
                    <h4>Continuous Learner</h4>
                    <p>I’m naturally driven to understand how things work and continuously improve 
                        my skills through self-directed learning, experimentation, and hands-on 
                        development experience.</p>
                </div>
            </div>
        </section>
    );
};

export default About;