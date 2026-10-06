import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectPage() {
    const { slug } = useParams();

    const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

    const project = projects.find((item) => item.slug === slug);

    useEffect(() => {
        if (project) {
            document.title = `${project.title} — Alessia Smeraglia`;
        }

        return () => {
            document.title =
                "Alessia Smeraglia — Full-stack Developer & UX-minded";
        };
    }, [project]);

    if (!project) {
        return (
            <main className="project-not-found" id="main-content">
                <p>404</p>

                <h1>Project not found.</h1>

                <Link to="/"><i className="bi bi-arrow-left" aria-hidden="true"></i> Back home</Link>
            </main>
        );
    }

    return (
        <main className="case-study" id="main-content">
            {/* HERO */}
            <section className="case-study__hero">
                <div className="case-study__back">
                    <Link to="/#work"><i className="bi bi-arrow-left" aria-hidden="true"></i> Back to work</Link>
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
                            {project.liveLabel || "Live project ↗"}
                        </a>
                    )}

                    {project.github && project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                        </a>
                    )}
                </div>
            </section>

            {/* HERO IMAGE */}
            <section className="case-study__visual">
                {project.image ? (
                    <div className="case-study__hero-image">
                        <img
                            src={project.image}
                            alt={`${project.title} interface preview`}
                        />
                    </div>
                ) : (
                    <div className="case-study__visual-placeholder">
                        <span>{project.title}</span>
                    </div>
                )}
            </section>

            {/* OVERVIEW */}
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

            {/* CHALLENGE / SOLUTION */}
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

            {/* INSIGHTS */}
            {project.insights && project.insights.length > 0 && (
                <section className="case-study__insights">
                    <div className="case-study__insights-heading">
                        <p className="section-label">
                            Research & Insights
                        </p>

                        <h2>
                            What shaped the
                            <span> experience.</span>
                        </h2>
                    </div>

                    <div className="case-study__insights-list">
                        {project.insights.map((insight, index) => (
                            <div
                                className="case-study__insight"
                                key={insight}
                            >
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p>{insight}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CONTRIBUTION */}
            {project.contribution &&
                project.contribution.length > 0 && (
                    <section className="case-study__contribution">
                        <div className="case-study__contribution-heading">
                            <p className="section-label">
                                My contribution
                            </p>

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

            {/* GALLERY */}
            {project.screenshots &&
                project.screenshots.length > 0 && (
                    <section className="case-study__gallery">
                        <div className="case-study__gallery-heading">
                            <p className="section-label">
                                {project.galleryLabel || "Interface"}
                            </p>

                            <h2>
                                {project.galleryTitle ? (
                                    project.galleryTitle
                                ) : (
                                    <>
                                        Designed around the
                                        <span> product experience.</span>
                                    </>
                                )}
                            </h2>
                        </div>

                        <div className="case-study__gallery-grid">
                            {project.screenshots.map(
                                (screenshot, index) => (
                                    <figure
                                        key={screenshot.src}
                                        className={`case-study__screenshot ${index === 0
                                            ? "case-study__screenshot--large"
                                            : ""
                                            }`}
                                    >
                                        <div className="case-study__screenshot-image">
                                            <img
                                                src={screenshot.src}
                                                alt={screenshot.alt}
                                                onError={(event) => {
                                                    event.currentTarget.style.display =
                                                        "none";

                                                    event.currentTarget.parentElement.classList.add(
                                                        "case-study__screenshot-placeholder"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <figcaption>
                                            <span>
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <p>{screenshot.label}</p>
                                        </figcaption>
                                    </figure>
                                )
                            )}
                        </div>
                        {/*FULL CASE STUDY */}
                        {project.fullCaseStudy && (
                            <button
                                type="button"
                                className="project-page__case-study-button"
                                onClick={() => setIsCaseStudyOpen(true)}
                            >
                                View full UX project <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                            </button>
                        )}
                        {isCaseStudyOpen && project.fullCaseStudy && (
                            <div
                                className="case-study-modal"
                                role="dialog"
                                aria-modal="true"
                                aria-label={`${project.title} full case study`}
                                onClick={() => setIsCaseStudyOpen(false)}
                            >
                                <div
                                    className="case-study-modal__content"
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <button
                                        type="button"
                                        className="case-study-modal__close"
                                        onClick={() => setIsCaseStudyOpen(false)}
                                        aria-label="Close full case study"
                                    >
                                        <i className="bi bi-x-lg" aria-hidden="true"></i>
                                    </button>

                                    <img
                                        src={project.fullCaseStudy}
                                        alt={`${project.title} complete UX case study`}
                                        className="case-study-modal__image"
                                    />
                                </div>
                            </div>
                        )}
                    </section>
                )}



            {/* FEATURES */}
            {project.features &&
                project.features.length > 0 && (
                    <section className="case-study__features">
                        <div>
                            <p className="section-label">
                                Key features
                            </p>

                            <h2>
                                {project.featuresTitle ||
                                    "What I built."}
                            </h2>
                        </div>

                        <div className="case-study__feature-list">
                            {project.features.map(
                                (feature, index) => (
                                    <div
                                        className="case-study__feature"
                                        key={feature}
                                    >
                                        <span>
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <p>{feature}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </section>
                )}

            {/* METRICS */}
            {project.metrics && project.metrics.length > 0 && (
                <section className="case-study__metrics">
                    <div className="case-study__metrics-heading">
                        <p className="section-label">
                            Measurement
                        </p>

                        <h2>
                            Tracking what
                            <span> matters.</span>
                        </h2>
                    </div>

                    <div className="case-study__metrics-grid">
                        {project.metrics.map((metric) => (
                            <article
                                className="case-study__metric"
                                key={`${metric.label}-${metric.value}`}
                            >
                                <span>{metric.label}</span>
                                <p>{metric.value}</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {/* RESULTS */}
            {project.results && (
                <section className="case-study__results">
                    <p className="section-label">Results</p>

                    <p className="case-study__large-copy">
                        {project.results}
                    </p>
                </section>
            )}

            {/* STACK */}
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


            {/* LEARNINGS */}
            <section className="case-study__learning">
                <p className="section-label">
                    What I learned
                </p>

                <p className="case-study__large-copy">
                    {project.learnings}
                </p>
            </section>

            {/* NEXT */}
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