import { Phone, Mail } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsSend } from "react-icons/bs";

const Contact = () => {
    return (
        <section>
          <h3>Contact</h3>
            <p>
            I’m currently looking for junior full-stack or back-end focused developer
            opportunities, remote or local. I’m interested in building reliable,
            practical software with thoughtful teams that value clear communication,
            quality work, and real-world problem solving.
            </p>
            <ul className='contact-details'>
                <li>
                    <Mail size={20} />
                    <a href="mailto:a5142732357@gmail.com">a5142732357@gmail.com</a>
                </li>
                <li>
                    <FiPhone size={20} />
                    <a href="tel:+32488305152">+32488 30 51 52</a>
                </li>
                {/* <li>
                    <FaLinkedin size={20} />
                    <a href="linkedin.com/in/berl-weber-341165408/" target='_blank' rel='noreferrer'>linkedin.com/in/berl weber</a>
                </li> */}
                <li>
                    <FaGithub size={20} />
                    <a href="https://github.com/berlweber" target='_blank' rel='noreferrer'>github.com/berlweber</a>
                </li>
            </ul>
            <form action="mailto:a5142732357@gmail.com" method='post' encType='text/plain'>
                 <input type="text" name='name' value="Your Name"/>
                 <input type="email" name='email' value="Your Email"/>
                 <input type="text" name='Subject' value="Subject"/>
                 <textarea name="message" value="Your Message" cols={50} rows={3}></textarea>
                 <button type='submit' className='submit-btn'>
                    Sent Message
                    <BsSend size={16}/>
                 </button>
                 {/* still need to make the form controlled */}
                 {/* still need to make the submit button working */}
            </form>   
        </section>
    );
};

export default Contact;