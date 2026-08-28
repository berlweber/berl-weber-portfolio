import './Contact.css';
import { Mail } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
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
        <section id='contact' className='contact'>
            <div className='contact-content'>
                <h2>Contact</h2>
                <p>I’m currently looking for junior full-stack or back-end-focused
                     opportunities, remotely or in the Antwerp area. If you’re building
                      practical software and think I could contribute to your team, I’d
                       be glad to hear from you.</p>
                <ul className='contact-details'>
                    <li>
                        <a href="mailto:a5142732357@gmail.com">
                            <Mail size={24} />
                            a5142732357@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+32488305152">
                            <FiPhone size={24} />
                            +324 88 30 51 52
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/berl-weber-341165408/" target='_blank' rel='noreferrer'>
                            <FaLinkedinIn size={24} />
                            linkedin.com/in/berl-weber
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/berlweber" target='_blank' rel='noreferrer'>
                            <FaGithub size={24} className='github-symbol'/>
                            github.com/berlweber
                        </a>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className='contact-form'> {/*action="mailto:a5142732357@gmail.com" method='post' encType='text/plain'*/}
                <div className='name-and-email'>
                    <div className='input-wrapper'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            placeholder='Jane Smith'
                            required
                            className='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='jane.smith@example.com'
                            required
                            className='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name='subject'
                    id='subject'
                    placeholder='Junior developer opportunity'
                    required
                    className='subject'
                    value={formData.subject}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    placeholder='Hi Berl, I’d like to discuss an opportunity...'
                    id='message'
                    required
                    className='text-area'
                    value={formData.message}
                    onChange={handleChange}
                    >
                </textarea>
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
