import Tag from '../Tag/Tag.jsx';
import './ProjectCard.css';
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from 'lucide-react';

const ProjectCard = (props) => {
    const project = props.project;

    return (
        <article className={'project-card ' + ( project.featured ? 'tutortrack' : undefined )}>
            {project.featured && (
                <span className='project-badge'>Featured Project</span>
            )}
            {project.group && (
                <span className='project-badge'>Group Project</span>
            )}
            <img src={project.screenshot} alt="screenshot of deployed project" className='project-screenshot'/>
            <div className='project-card-content'>
                <h3>{project.name}</h3>
                <p className='project-description'>{project.description}</p>
                <ul className='project-tech-stack'>
                    {project.tech.map((tech) => (
                        <Tag key={tech} tech={tech} />
                    ))}
                </ul>
                {project.demoNote && (
                    <p className='demo-note'>{project.demoNote}</p>
                )}
                <div className='project-links'>
                    {project.github ?
                    <a href={project.github}
                        target='_blank' rel="noreferrer" className='project-repo'>
                        <FaGithub size={20} className='github-smbl'/>
                        GitHub
                    </a> :
                    <div className='repo-links'>
                        <a href={project.githubFrontend}
                            target='_blank' rel="noreferrer" className='project-repo'>
                            <FaGithub size={20} className='github-smbl'/>
                            Frontend
                        </a>
                        <a href={project.githubBackend}
                            target='_blank'
                            rel="noreferrer"
                            className='project-repo'>
                            <FaGithub size={20} className='github-smbl' />
                            Backend
                        </a>
                    </div>
                    }
                    <a href={project.siteLink}
                        target='_blank'
                        rel='noreferrer'
                        className='live-demo'>
                        Live Demo
                        <ExternalLink size={16} />
                    </a>
                    {project.caseStudyLink && (
                        <a className='case-study-link' href={project.caseStudyLink}>
                            {project.caseStudyLabel}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;