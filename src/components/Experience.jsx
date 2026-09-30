const experiences = [
    {
        period: "2025 — Present",
        role: "Freelance Web Developer",
        company: "Independent",
        description:
            "Design and development of responsive websites for small businesses, with a focus on usability, performance and maintainability.",
    },
    {
        period: "2022 — 2025",
        role: "UX Designer",
        company: "Independent Projects",
        description:
            "Worked on user-centered digital experiences through research, user flows, wireframing, prototyping and usability-focused interface design.",
    },
    {
        period: "2020 — 2021",
        role: "Research Intern",
        company: "FBK",
        description:
            "Worked on High School Superhero, a game-based system for collecting hate-speech annotations, combining Human-Computer Interaction, gamification and data quality research.",
    },
    {
        period: "2019 — 2020",
        role: "3D & Interactive Project",
        company: "University of Trento",
        description:
            "Contributed to the development of interactive 3D environments using Unity and Blender within university research projects.",
    },
];

function Experience() {
    return (
        <section className="experience">
            <div className="experience__intro">
                <p className="section-label">Experience</p>

                <h2>
                    Building at the intersection of
                    <span> code, design and people.</span>
                </h2>
            </div>

            <div className="experience__list">
                {experiences.map((experience, index) => (
                    <article className="experience__item" key={experience.role}>
                        <span className="experience__number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="experience__role">
                            <h3>{experience.role}</h3>
                            <p>{experience.company}</p>
                        </div>

                        <p className="experience__description">
                            {experience.description}
                        </p>

                        <span className="experience__period">
                            {experience.period}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Experience;