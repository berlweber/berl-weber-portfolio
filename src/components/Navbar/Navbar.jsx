import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ menuOpen, closeMenu }) => {
    const [activeLink, setActiveLink] = useState('#home');

    const handleClick = (event) => {
        setActiveLink(event.currentTarget.getAttribute("href"));
        closeMenu();
    };

    useEffect(() => {
        const sectionsIDs = ['#home', '#about', '#skills','#projects', '#contact'];
        const sections = [];
        sectionsIDs.forEach((id) => {
            sections.push(document.querySelector(id));
        });

        const viewportHeight = window.innerHeight;
        const bandHeight = viewportHeight / 10;
        const bandTop = (viewportHeight / 3) - (bandHeight / 2);
        const bandBottom = viewportHeight - bandTop - bandHeight;

        const observerOptions = {
            rootMargin: `-${bandTop.toFixed()}px 0px -${bandBottom.toFixed()}px 0px`
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink('#' + (entry.target.id));
                };
            });
        }, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });
        
        return () => {
            observer.disconnect();
        };

    }, []);
    
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