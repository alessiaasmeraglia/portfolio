import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section className="projects" id="work">
            <div className="projects__intro">
                <p className="section-label">Selected Work</p>

                <h2>
                    Projects where design
                    <span> meets development.</span>
                </h2>
            </div>

            <div className="projects__list">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;