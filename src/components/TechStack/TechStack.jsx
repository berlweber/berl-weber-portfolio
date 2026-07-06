// import { SiMongoose } from 'react-icons/si';
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
        <section id='skills'>
            <h3>Tech Stack</h3>

            {techStackData.map((stack) => (
                <div key={stack.title}>

                    <h4>{stack.title}</h4>

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