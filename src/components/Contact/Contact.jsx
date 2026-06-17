import { Phone, Mail } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        // write what should happen when submiting the form = send email 
    }

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
            <form onSubmit={handleSubmit}> {/*action="mailto:a5142732357@gmail.com" method='post' encType='text/plain'*/}
                <label htmlFor="name">Name</label>
                 <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Your Name'
                    required
                    value={formData.name} 
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                 <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='example@myself.dev'
                    required
                    value={formData.email} 
                    onChange={handleChange}
                />
                <label htmlFor="subject">Subject</label>
                 <input 
                    type="text" 
                    name='subject' 
                    id='subject'
                    placeholder='Subject'
                    required
                    value={formData.subject} 
                    onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                 <textarea 
                    name="message" 
                    placeholder='Write your message here...'
                    id='message'
                    required
                    value={formData.message} 
                    cols={50} rows={3} 
                    onChange={handleChange}
                    ></textarea>
                 <button 
                 type='submit' 
                 className='submit-btn'>
                    Send Message
                    <BsSend size={16}/>
                 </button>
                 {/* still need to make the submit button working */}
            </form>   
        </section>
    );
};

export default Contact;