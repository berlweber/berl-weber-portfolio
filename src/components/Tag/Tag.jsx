import { Proportions } from 'lucide-react';
import './Tag.css';

const Tag = (props) => {
    return (
        <li>
            {props.tech}
        </li>
    );
};

export default Tag;