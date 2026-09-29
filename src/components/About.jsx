function About() {
    const skills = [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Node.js",
        "Express",
        "MySQL",
        "REST APIs",
        "Git",
        "GitHub",
        "WordPress",
        "Figma",
    ];

    return (
        <section className="about" id="about">
            <div className="about__header">
                <p className="section-label">About</p>
            </div>

            <div className="about__statement">
                <h2>
                    I combine development,
                    <span> UX and human-centered thinking</span>
                    <br />
                    to build better digital products.
                </h2>
            </div>

            <div className="about__grid">
                <div className="about__intro">
                    <p className="about__lead">
                        I&apos;m Alessia, a front-end developer with a background in
                        Human-Computer Interaction and UX.
                    </p>

                    <p>
                        I enjoy turning ideas into responsive, accessible and intuitive web
                        experiences. My approach combines technical development with
                        attention to usability, interaction and the people who actually use
                        the product.
                    </p>

                    <p>
                        I&apos;m particularly interested in projects where design and
                        development work closely together, from early product decisions to
                        the final interface.
                    </p>
                </div>

                <div className="about__details">
                    <div className="about__detail">
                        <span>Based in</span>
                        <p>Trento, Italy</p>
                    </div>

                    <div className="about__detail">
                        <span>Focus</span>
                        <p>Front-end · Web Development · UX</p>
                    </div>

                    <div className="about__detail">
                        <span>Currently</span>
                        <p>Open to new opportunities and collaborations</p>
                    </div>
                </div>
            </div>

            <div className="about__skills">
                <div className="about__skills-heading">
                    <p className="section-label">Toolkit</p>

                    <p>
                        Technologies and tools I use to design and build digital
                        experiences.
                    </p>
                </div>

                <div className="about__skills-list">
                    {skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;