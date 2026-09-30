function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__top">
                <p className="hero__eyebrow">
                    Full-stack Developer · UX-minded
                </p>

                <p className="hero__location">
                    Trento, Italy
                    <br />
                    Available for opportunities
                </p>
            </div>

            <div className="hero__content">
                <h1>
                    Full-stack developer
                    <span> with a UX mindset.</span>
                </h1>

                <div className="hero__bottom">
                    <p className="hero__description">
                        I design and build accessible, responsive digital products with
                        React, Node.js and modern web technologies, combining development
                        with a strong focus on usability and user experience.
                    </p>

                    <a href="#work" className="hero__cta">
                        View my work
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;