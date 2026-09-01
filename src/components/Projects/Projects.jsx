import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { ExternalLink } from 'lucide-react';
import tutorTrackScreenshot from '../../assets/projects/tutorTrack screenshot.webp';
import reflectlyScreenshot from '../../assets/projects/reflectly Screenshot.webp';
import codeBlueprintScreenshot from '../../assets/projects/code-blueprint Screenshot.webp';
import snakeGameScreenshot from '../../assets/projects/snake-game screenshot.webp';
import TutorTrackCaseStudy from '../TutorTrackCaseStudy/TutorTrackCaseStudy.jsx';

const Projects = () => {
    const data = [
        {
            screenshot: tutorTrackScreenshot,
            name: 'TutorTrack',
            description: "A tutoring management platform used by the Hebrew-speaking staff at a Yeshiva (Jewish school) to manage students, assignments, sessions, billing, absences, monthly reports, and role-based permissions.",
            demoNote: "Hebrew interface · Demo credentials on sign-in page",
            featured: true,
            tech: ['Python', 'Django', 'PostgreSQL'],
            github: 'https://github.com/berlweber/tutor-track',
            siteLink: 'https://tutor-track-demo-fe7315d541fe.herokuapp.com/',
            caseStudyLink: '#tutorTrackCaseStudy',
            caseStudyLabel: 'Product Decisions →',
        },
        {
            screenshot: reflectlyScreenshot,
            name: 'Reflectly',
            description: "A MERN mood-tracking app with reflection logs and community features. I focused on backend setup, authentication, API structure, and debugging.",
            group: true,
            tech: ['Node.js', 'Express', 'React', 'mongoDB'],
            githubFrontend: 'https://github.com/berlweber/reflectly-front-end',
            githubBackend: 'https://github.com/berlweber/Reflectly',
            siteLink: 'https://reflectly-moods.netlify.app/'
        },
        {
            screenshot: codeBlueprintScreenshot,
            name: 'CodeBlueprint',
            description: "A project-planning app for organizing user stories, routes, ERDs, and pseudocode before development. Includes authentication and full CRUD workflows for managing project planning details.",
            tech: ['Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/berlweber/code-blueprint',
            siteLink: 'https://code-blueprint-d0c3aefef581.herokuapp.com/'
        },
        {
            screenshot: snakeGameScreenshot,
            name: 'Snake Game',
            description: "A browser-based game focused on JavaScript logic, DOM manipulation, keyboard controls, event handling, collision detection, and real-time game-state updates.",
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/berlweber/Snake-game',
            siteLink: 'https://berlweber.github.io/Snake-game/'
        },
    ]
    return (
        <section id='projects' className='projects'>
            <div className='projects-header'>
                <h2>Projects</h2>
                <a href="http://github.com/berlweber" target='_blank' rel='noreferrer' className='github-general'>View all on GitHub <ExternalLink size={16} /> </a>
            </div>
            <div className='projects-grid'>
                {data.map((project) =>(
                <ProjectCard
                key={project.name} project={project}
                />
                ))}
            </div>
            <TutorTrackCaseStudy />
            {/* look in pre launch checklist in this repo before launching  */}
        </section>
    )
}

export default Projects;
