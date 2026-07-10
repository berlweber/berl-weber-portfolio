import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ menuOpen }) => {
    const [activeLink, setActiveLink] = useState('#home');

    const handleClick = (event) => {
        setActiveLink(event.currentTarget.getAttribute("href"));
    }
    
    return (
        <nav className={ "navbar " + (menuOpen ? 'open' : 'closed') } >
            <a href="#home" onClick={handleClick} 
                className={ '#home' === activeLink ? "active-tab" : undefined } >Home</a>
            <a href="#about" onClick={handleClick} 
                className={ '#about' === activeLink ? "active-tab" : undefined } >About Me</a>
            <a href="#skills" onClick={handleClick} 
                className={ '#skills' === activeLink ? "active-tab" : undefined } >Skills</a>
            <a href="#projects" onClick={handleClick} 
                className={ '#projects' === activeLink ? "active-tab" : undefined } >Projects</a>
            <a href="#contact" onClick={handleClick}   
                className={ '#contact' === activeLink ? "active-tab" : undefined } >Contact</a>
        </nav>
    );
};

export default Navbar;