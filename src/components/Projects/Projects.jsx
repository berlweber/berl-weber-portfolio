import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { ExternalLink } from 'lucide-react';
import tryout from '../../assets/react.svg';

const Projects = () => {
    const data = [
        {
            screenshot: tryout,
            name: 'TutorTrack',
            description: "A tutoring management platform used in a Yeshiva to manage students, assignments, sessions, billing, absences, monthly reports, and role-based permissions.",
            featured: true,
            tech: ['Python', 'Django', 'PostgreSQL'],
            github: 'https://github.com/berlweber/tutor-track',
            siteLink: 'https://tutor-track-9c7f1aa7eb60.herokuapp.com/'
        },
        {
            screenshot: tryout,
            name: 'Reflectly',
            description: "A MERN mood-tracking app with reflection logs and community features. I focused on backend setup, authentication, API structure, and debugging.",
            group: true,
            tech: ['Node.js', 'Express', 'React', 'mongoDB'],
            githubFrontend: 'https://github.com/berlweber/reflectly-front-end',
            githubBackend: 'https://github.com/berlweber/Reflectly',
            siteLink: 'https://reflectly-moods.netlify.app/'
        },
        {
            screenshot: tryout,
            name: 'CodeBlueprint',
            description: "A project-planning app for organizing user stories, routes, ERDs, and pseudocode before development. Includes authentication and full CRUD workflows for managing project planning details.",
            tech: ['Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/berlweber/code-blueprint',
            siteLink: 'https://tutor-track-9c7f1aa7eb60.herokuapp.com/'
        },
        {
            screenshot: tryout,
            name: 'Snake Game',
            description: "A browser-based game focused on JavaScript logic, DOM manipulation, keyboard controls, event handling, collision detection, and real-time game-state updates.",
            tech: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/berlweber/Snake-game',
            siteLink: 'https://berlweber.github.io/Snake-game/'
        },
    ]
    return (
        <section id='projects'>
            <h3>Projects</h3>
            <a href="http://github.com/berlweber" target='_blank' rel='noreferrer' className='github-general'>View all on GitHub <ExternalLink size={16} /> </a>
            <br />
            {data.map((project) =>(
            <ProjectCard 
            key={project.name} project={project}
            />

            ))}
        </section>
    )
}

export default Projects;