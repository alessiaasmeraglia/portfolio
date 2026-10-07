import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className={`project-card ${
                index % 2 !== 0 ? "project-card--reverse" : ""
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div className="project-card__header">
                <div className="project-card__meta">
                    <span className="project-card__number">{project.number}</span>
                    <span className="project-card__type">{project.type}</span>
                </div>

                <span className="project-card__category">{project.category}</span>
            </div>

            <motion.div
                className="project-card__media"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                    duration: 0.95,
                    delay: reduceMotion ? 0 : 0.08,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
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
                        <i
                            className="bi bi-arrow-up-right"
                            aria-hidden="true"
                        />
                    </span>
                </Link>
            </motion.div>

            <div className="project-card__content">
                <div className="project-card__copy">
                    <h3>
                        <Link to={`/projects/${project.slug}`}>
                            <span className="project-card__title-text">
                                {project.title}
                            </span>
                            <i
                                className="bi bi-arrow-up-right project-card__title-arrow"
                                aria-hidden="true"
                            />
                        </Link>
                    </h3>

                    {project.highlight && (
                        <p className="project-card__highlight">
                            {project.highlight}
                        </p>
                    )}

                    <p>{project.description}</p>
                </div>

                <div className="project-card__technologies">
                    {project.technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
