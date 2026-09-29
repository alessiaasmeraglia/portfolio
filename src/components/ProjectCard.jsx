function ProjectCard({ project, index }) {
    return (
        <article
            className={`project-card ${index % 2 !== 0 ? "project-card--reverse" : ""
                }`}
        >
            <div className="project-card__header">
                <span className="project-card__number">{project.number}</span>

                <span className="project-card__category">{project.category}</span>
            </div>

            <a href={project.link} className="project-card__image-wrapper">
                <div className="project-card__placeholder">
                    <span>{project.title}</span>
                </div>

                <span className="project-card__view">
                    View project
                    <span>↗</span>
                </span>
            </a>

            <div className="project-card__content">
                <div className="project-card__copy">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                </div>

                <div className="project-card__technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;