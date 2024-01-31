import { Link } from 'react-router-dom';

export const ProjectItem = ({ image, title, link }) => {
    return (
        <Link className="project-item" style={{ backgroundImage: `url(${image})` }} to={link}>
            <div className="project-item-container">
                <h2 className="project-item-title">{title}</h2>
            </div>
        </Link>
    )
}

export default ProjectItem;