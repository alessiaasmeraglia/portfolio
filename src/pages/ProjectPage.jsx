import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectPage() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="project-not-found">
                <p>404</p>
                <h1>Project not found.</h1>

                <Link to="/">
                    ← Back home
                </Link>
            </main>
        );
    }

    return (
        <main className="case-study">
            <section className="case-study__hero">
                <div className="case-study__back">
                    <Link to="/#work">← Back to work</Link>
                </div>

                <div className="case-study__meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                </div>

                <h1>{project.title}</h1>

                <p className="case-study__intro">
                    {project.description}
                </p>
                <div className="case-study__project-info">
                    {project.role && (
                        <div>
                            <span>Role</span>
                            <p>{project.role}</p>
                        </div>
                    )}

                    {project.timeline && (
                        <div>
                            <span>Timeline</span>
                            <p>{project.timeline}</p>
                        </div>
                    )}

                    {project.status && (
                        <div>
                            <span>Type</span>
                            <p>{project.status}</p>
                        </div>
                    )}
                </div>

                <div className="case-study__links">
                    {project.live && project.live !== "#" && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live project ↗
                        </a>
                    )}

                    {project.github && project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>
            </section>

            <section className="case-study__visual">
                <div className="case-study__visual-placeholder">
                    <span>{project.title}</span>
                </div>
            </section>

            <section className="case-study__overview">
                <div className="case-study__overview-label">
                    <p className="section-label">Overview</p>

                    <p>
                        From product idea to interface and implementation.
                    </p>
                </div>

                <p className="case-study__large-copy">
                    {project.overview}
                </p>
            </section>

            <section className="case-study__split">
                <article>
                    <p className="section-label">Challenge</p>

                    <p>{project.challenge}</p>
                </article>

                <article>
                    <p className="section-label">Solution</p>

                    <p>{project.solution}</p>
                </article>
            </section>
            {project.contribution && project.contribution.length > 0 && (
                <section className="case-study__contribution">
                    <div className="case-study__contribution-heading">
                        <p className="section-label">My contribution</p>

                        <h2>
                            What I worked
                            <span> on.</span>
                        </h2>
                    </div>

                    <div className="case-study__contribution-list">
                        {project.contribution.map((item, index) => (
                            <div
                                className="case-study__contribution-item"
                                key={item}
                            >
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
                <section className="case-study__gallery">
                    <div className="case-study__gallery-heading">
                        <p className="section-label">Interface</p>

                        <h2>
                            Designed around the
                            <span> product experience.</span>
                        </h2>
                    </div>

                    <div className="case-study__gallery-grid">
                        {project.screenshots.map((screenshot, index) => (
                            <figure
                                key={screenshot.src}
                                className={`case-study__screenshot ${index === 0 ? "case-study__screenshot--large" : ""
                                    }`}
                            >
                                <div className="case-study__screenshot-image">
                                    <img
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                    />
                                </div>

                                <figcaption>
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p>{screenshot.label}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <section className="case-study__features">
                <div>
                    <p className="section-label">Key features</p>

                    <h2>
                        What I built.
                    </h2>
                </div>

                <div className="case-study__feature-list">
                    {project.features.map((feature, index) => (
                        <div
                            className="case-study__feature"
                            key={feature}
                        >
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <p>{feature}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="case-study__stack">
                <p className="section-label">Stack</p>

                <div className="case-study__stack-list">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>
            </section>

            <section className="case-study__learning">
                <p className="section-label">
                    What I learned
                </p>

                <p className="case-study__large-copy">
                    {project.learnings}
                </p>
            </section>

            <section className="case-study__next">
                <p>Explore more work</p>

                <Link to="/#work">
                    All projects →
                </Link>
            </section>
        </main>
    );
}

export default ProjectPage;