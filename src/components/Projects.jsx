import { motion, useReducedMotion } from "motion/react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="projects" id="work">
            <div className="projects__intro">
                <motion.p
                    className="section-label projects__label"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Selected Work
                </motion.p>

                <motion.h2
                    initial={reduceMotion ? false : { opacity: 0, y: 38 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.95,
                        delay: reduceMotion ? 0 : 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Projects where design
                    <span> meets development.</span>
                </motion.h2>

                <motion.div
                    className="projects__intro-line"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        delay: reduceMotion ? 0 : 0.12,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    aria-hidden="true"
                />
            </div>

            <div className="projects__list">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;