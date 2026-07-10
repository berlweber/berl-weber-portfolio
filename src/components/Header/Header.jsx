import './Header.css';
import Navbar from '../Navbar/Navbar.jsx'

import { Download, Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (event) => {
        setMenuOpen(!menuOpen);
    }

    return (
       
        <header>
            <a href="#home" id='logo-name-link'>
                <span className='code-symbol'>&lt;/&gt;</span>
                <span className='logo-name'>Berl Weber</span>
            </a>
            <Navbar menuOpen={menuOpen} />

            <div className='header-actions'>
                <a href="https://github.com/berlweber" target='_blank' rel="noreferrer" className='social-link'>
                    <FaGithub size={30} />
                </a>
                <a href="------------" target='_blank' rel="noreferrer" className='social-link'>
                {/*still need to enter the link to linkedin*/ }
                    <FaLinkedin size={30} />
                </a>
                <a href="/resume-Berl Weber-full-stack-developer.pdf" download className='resume-btn'>
                    <Download size={18} className='download-icon'/>
                    <span className='view'>View </span>Resume
                </a>
                <button className='menu-btn' onClick={handleClick}>
                    <Menu size={32}/>
                </button>
            </div>
        </header>
    )
}

export default Header;