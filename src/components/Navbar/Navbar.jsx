import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <a href="#home" className='active'>Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;