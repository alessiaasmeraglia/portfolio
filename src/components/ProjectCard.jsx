import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
    return (
        <article
            className={`project-card ${index % 2 !== 0 ? "project-card--reverse" : ""
                }`}
        >
            <div className="project-card__header">
                <div className="project-card__meta">
                    <span className="project-card__number">{project.number}</span>

                    <span className="project-card__type">{project.type}</span>
                </div>

                <span className="project-card__category">{project.category}</span>
            </div>

            <Link
                to={`/projects/${project.slug}`}
                className="project-card__image-wrapper"
                aria-label={`View ${project.title} project`}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="project-card__image"
                    />
                ) : (
                    <div className="project-card__placeholder">
                        <span>{project.title}</span>
                    </div>
                )}

                <span className="project-card__view">
                    View project
                    <span aria-hidden="true">↗</span>
                </span>
            </Link>

            <div className="project-card__content">
                <div className="project-card__copy">
                    <h3>
                        <Link to={`/projects/${project.slug}`}>
                            <span className="project-card__title-text">
                                {project.title}
                            </span>

                            <span
                                className="project-card__title-arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </Link>
                    </h3>

                    <p>{project.description}</p>
                </div>

                <div className="project-card__technologies">
                    {project.technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;