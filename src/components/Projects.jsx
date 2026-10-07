import { motion, useReducedMotion } from "motion/react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="projects" id="work">
            <div className="projects__intro">
                <motion.p
                    className="section-label"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Selected Work
                </motion.p>

                <div className="projects__title-mask">
                    <motion.h2
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      y: "110%",
                                      opacity: 0,
                                  }
                        }
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Projects where design
                        <span> meets development.</span>
                    </motion.h2>
                </div>

                <motion.div
                    className="projects__intro-line"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                        duration: 1.1,
                        delay: reduceMotion ? 0 : 0.15,
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