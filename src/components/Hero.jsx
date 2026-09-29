function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__top">
                <p className="hero__eyebrow">Front-end Developer · UX-minded</p>

                <p className="hero__location">
                    Trento, Italy
                    <br />
                    Available for opportunities
                </p>
            </div>

            <div className="hero__content">
                <h1>
                    I build digital
                    <span> experiences.</span>
                </h1>

                <div className="hero__bottom">
                    <p className="hero__description">
                        Front-end developer with a background in UX and Human-Computer
                        Interaction. I build accessible, intuitive and user-centered web
                        experiences.
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