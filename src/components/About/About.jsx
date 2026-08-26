import './About.css';
import { Brain, BookOpen } from 'lucide-react';
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
    return (
        <section id='about' className='about-me'>
            <div className='about-main'>
                <h2>About Me</h2>
                <p>My flagship project, TutorTrack, is a tutoring management platform I built during my bootcamp and
                    continued developing for several weeks afterward. It's now in daily production use by a school 
                    for managing its tutoring program.</p>
                <p>After a year of independent study in JavaScript and HTML/CSS, I completed General Assembly’s remote 
                    Software Engineering Bootcamp, expanding into full-stack development with React, Node/Express, 
                    Python/Django, PostgreSQL, and MongoDB.</p>
                <p>Based in Antwerp, Belgium, I’m seeking remote opportunities and am comfortable collaborating across
                    time zones, including adapting to US working hours if needed. My experience learning and
                    building in fully remote environments strengthened my communication, self-management, 
                    and independent problem-solving skills. </p>
            </div>
            <div className='about-sect-sub-containers'>
                <div className='sub-sec'>
                    <span className='strength-card-symbol'><Brain size={40}/></span>
                    <h3>Analytical Problem Solver</h3>
                    <p>I enjoy working through complexity and tracing bugs to their root cause 
                        rather than patching symptoms. When implementing complex business rules
                         and workflows, I break the problem down and test the logic as I go to 
                         make sure the code matches the intended behavior.</p>
                </div>
                <div className='sub-sec'>
                    <span className='strength-card-symbol'><TbTargetArrow size={40}/></span>
                    <h3>Product & User Thinking</h3>
                    <p>I think beyond whether the code works to whether the product serves its purpose for 
                        the people using it. In TutorTrack, I made valuable comments optional so the
                         extra effort wouldn’t discourage session logging, while requiring deliberate
                          date entry with no default value, to reduce inaccurate records.</p>
                          <a href="#tutorTrackCaseStudy" className='link-to-case-study'>See the thinking behind TutorTrack →</a>
                </div>
                <div className='sub-sec'>
                    <span className='strength-card-symbol'><BookOpen size={40}/></span>
                    <h3>Continuous Learner</h3>
                    <p>I’m naturally curious and genuinely enjoy learning, professionally and 
                        personally. I see my current stack as a foundation, not a limit, and 
                        bring that drive to learning a team’s technologies, adapting to its ways 
                        of working, and expanding what I can contribute.</p>
                </div>
            </div>
        </section>
    );
};

export default About;