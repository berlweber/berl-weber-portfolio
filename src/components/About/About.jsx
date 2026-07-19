import './About.css';
import { Brain, BookOpen } from 'lucide-react';
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
    return (
        <section id='about' className='about-me'>
            <h2>About Me</h2>
            <p>My flagship project, TutorTrack, is a tutoring management platform I built during my bootcamp and
                 continued developing for several weeks afterward. It's now in daily production use by a school 
                 for managing its tutoring program.</p>
            <p>I completed a remote Software Engineering Bootcamp at General Assembly after a year of independent 
                self-study in JavaScript and HTML/CSS, strengthening both my technical foundation and my ability 
                to learn new systems quickly.</p>
            <p>Based in Antwerp, Belgium, I’m seeking remote opportunities and am comfortable collaborating across
                 time zones, including adapting to US working hours if needed. My experience learning and
                  building in fully remote environments strengthened my communication, self-management, 
                  and independent problem-solving skills. </p>
            <div className='sub-about-sect-container'>
                <div className='sub-sec'>
                    <span><Brain size={22}/></span>
                    <h3>Analytical Problem Solver</h3>
                    <p>I enjoy working through complexity and tracing bugs to their root cause 
                        rather than patching symptoms. When implementing complex business rules
                         and workflows, I break the problem down and test the logic as I go to 
                         make sure the code matches the intended behavior.</p>
                </div>
                <div className='sub-sec'>
                    <span><TbTargetArrow size={26}/></span>
                    <h3>Product & User Thinking</h3>
                    <p>I think beyond whether the code works to whether the product serves its purpose for 
                        the people using it. In TutorTrack, I made valuable comments optional so the
                         extra effort wouldn’t discourage session logging, while requiring deliberate
                          date entry to reduce inaccurate records.</p>
                          {/* will add a link something like "See the thinking behind TutorTrack →" */}
                </div>
                <div className='sub-sec'>
                    <span><BookOpen size={22}/></span>
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