import './Header.css';
import Navbar from '../Navbar/Navbar.jsx'

import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
       
        <header>
            <a href="#home">
                <span>&lt;/&gt;</span>
                <span>Berl Weber</span>
            </a>
            <Navbar />

            <a href="https://github.com/berlweber" target='_blank'>
                <FaGithub />
            </a>
            <a href="https://github.com/berlweber" target='_blank'>
                <FaLinkedin />
            </a>
            <a href="/resume-Berl Weber-full-stack-developer.pdf" download className='resume-btn'>
                <Download size={18} />
                Resume
            </a>
        </header>
    )
}

export default Header;