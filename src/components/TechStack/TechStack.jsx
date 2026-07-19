import './TechStack.css'
import Tag from '../Tag/Tag.jsx';

const TechStack = () => {
    const techStackData = [
        {
            title: 'Frontend',
            tech: ['HTML', 'CSS', 'Javascript', 'React']
        },
        {
            title: 'Backend',
            tech: ['Node.js', 'Express.js', 'Python', 'Django',]
        },
        {
            title: 'Databses',
            tech: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Django ORM']
        },
        {
            title: 'Auth & Security',
            tech: ['Authentication', 'Authorization', 'JWT', 'bcrypt', 'Django Sessions']
        },
        {
            title: 'Tools & Workflow',
            tech: ['Git', 'GitHub', 'CLI', 'npm', 'Pipenv', 'Postman']
        },
        {
            title: 'Concepts',
            tech: ['REST APIs', 'CRUD', 'MVC', 'Responsive Design', 'Deployment']
        }
    ];

    return (
        <section id='skills' className='tech-stack'>
            <h2>Tech Stack</h2>

            {techStackData.map((stack) => (
                <div key={stack.title}>

                    <h3>{stack.title}</h3>

                    <ul>
                        {stack.tech.map((tech) => (
                            <Tag key={tech} tech={tech} />
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default TechStack;