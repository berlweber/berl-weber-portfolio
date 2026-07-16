import './Header.css';
import Navbar from '../Navbar/Navbar.jsx'

import { Download, Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
       
        <header>
            <a href="#home" id='logo-name-link'>
                <span className='code-symbol'>&lt;/&gt;</span>
                <span className='logo-name'>Berl Weber</span>
            </a>
            <Navbar menuOpen={menuOpen} closeMenu={handleClick} />

            <div className='header-actions'>
                <a href="https://github.com/berlweber" 
                target='_blank' 
                rel="noreferrer" 
                className='header-social-link'
                aria-label="GitHub profile"
                >
                    <FaGithub size={30} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/berl-weber-341165408/"
                target='_blank'
                rel="noreferrer"
                className='header-social-link'
                aria-label="LinkedIn profile"
                >
                    <FaLinkedin size={30} aria-hidden="true" />
                </a>
                <a href="/resume-Berl Weber-full-stack-developer.pdf" download className='resume-btn'>
                    <Download size={18} className='download-icon'/>
                    <span className='view'>View </span>Resume
                </a>
                <button className='menu-btn' onClick={handleClick} 
                aria-expanded={ menuOpen ? true : false } 
                aria-label="Toggle navigation menu"
                >
                    <Menu size={32}/>
                </button>
            </div>
        </header>
    )
}

export default Header;