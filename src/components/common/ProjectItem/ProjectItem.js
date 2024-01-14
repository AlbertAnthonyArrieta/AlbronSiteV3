export const ProjectItem = ({ image, title, desc }) => {
    return (
        <div className="project-item" style={{ backgroundImage: `url(${image})` }}>
            <div className="project-item-container">
                <h2 className="project-item-title">{title}</h2>
                <p className="project-item-desc">{desc}</p>
            </div>
        </div>
    )
}

export default ProjectItem;