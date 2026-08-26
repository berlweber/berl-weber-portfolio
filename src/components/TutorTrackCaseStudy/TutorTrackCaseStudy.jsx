import './TutorTrackCaseStudy.css';
import { TbListDetails, TbScale } from 'react-icons/tb';

const TutorTrackCaseStudy = () => {
    return (
        <section id="tutorTrackCaseStudy" className='tutortrack-case-study'>
            <h3>TutorTrack: Designing for Real Use</h3>
            <div className='decisions-wrapper'>
                <div className="decision-block">
                    <div className='decision-icon-wrapper'>
                        <TbScale size={50} aria-hidden="true" className='decision-icon'/>
                    </div>
                    <div className='decision-content'>
                        <h4>Balancing Low Friction with Accurate Records</h4>
                        <p>Written comments were valuable, but requiring them could discourage
                            tutors from logging sessions, so I kept them optional. For dates,
                            I removed the “today” default and made selecting a date required,
                            because sessions might be entered days later—aconcern that actual 
                            use later confirmed.</p>
                    </div>
                </div>
                <div className="decision-block">
                    <div className='decision-icon-wrapper'>
                        <TbListDetails size={50} aria-hidden="true" className='decision-icon' />
                    </div>
                    <div className='decision-content'>
                        <h4>Making Unpredictable Content Easy to Navigate</h4>
                        <p>An assignment could contain no monthly records or several months of
                            session logs and progress reports, so users couldn’t know what
                            was on the page without scrolling through it. I added a growing
                            side navigation showing every month and its number of sessions
                            and reports, with links directly to each section.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorTrackCaseStudy;
