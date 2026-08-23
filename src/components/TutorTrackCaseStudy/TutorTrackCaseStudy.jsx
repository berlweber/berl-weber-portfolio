import './TutorTrackCaseStudy.css';

const TutorTrackCaseStudy = () => {
    return (
        <section id="tutorTrackCaseStudy" className='tutortrack-case-study'>
            <h3>TutorTrack: Designing for Real Use</h3>
            <div className='decisions-wrapper'>
                <div className="decision-block">
                    <h4>Balancing Low Friction with Accurate Records</h4>
                    <p>Each session log could include a valuable written comment,
                        but making it required risked tutors skipping the log entirely.
                        I kept comments optional, while removing the default 
                        date and requiring deliberate selection because tutors 
                        might—and in practice sometimes did—record sessions days 
                        later, when an automatic “today” could create inaccurate records.</p>
                </div>
                <div className="decision-block">
                    <h4>Making Unpredictable Content Easy to Navigate</h4>
                    <p>An assignment could contain no monthly records or several months of 
                        session logs and progress reports, so users couldn’t know what 
                        was on the page without scrolling through it. I added a growing 
                        side navigation showing every month and its number of sessions 
                        and reports, with links directly to each section.</p>
                </div>
            </div>
        </section>
    );
};

export default TutorTrackCaseStudy;