import './Header.css';
import Navbar from '../Navbar/Navbar.jsx'

import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
       
        <header>
            <a href="#home" id='logo-name-link'>
                <span className='code-symbol'>&lt;/&gt;</span>
                <span className='logo-name'>Berl Weber</span>
            </a>
            <Navbar />

            <div className='header-actions'>
                <a href="https://github.com/berlweber" target='_blank' rel="noreferrer">
                    <FaGithub size={30} className='FaGithub'/>
                </a>
                <a href="------------" target='_blank' rel="noreferrer">
                {/*still need to enter the link to linkedin*/ }
                    <FaLinkedin size={30} className='FaLinkedin'/>
                </a>
                <a href="/resume-Berl Weber-full-stack-developer.pdf" download className='resume-btn'>
                    <Download size={18} className='download-icon'/>
                    View Resume
                </a>
            </div>
        </header>
    )
}

export default Header;