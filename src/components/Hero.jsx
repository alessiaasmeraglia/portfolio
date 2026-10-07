import { motion, useReducedMotion } from "motion/react";

function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="hero" id="home">
            <div className="hero__top">
                <motion.p
                    className="hero__eyebrow"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Full-stack Developer · UX-minded
                </motion.p>

                <motion.p
                    className="hero__location"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.55,
                        delay: reduceMotion ? 0 : 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Trento, Italy

                    <span className="hero__availability">
                        <span
                            className="hero__availability-dot"
                            aria-hidden="true"
                        />
                        Available for opportunities
                    </span>
                </motion.p>
            </div>

            <div className="hero__content">
                <motion.h1
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.span
                        className="hero__title-line hero__title-line--main"
                        initial={{ x: "100vw" }}
                        animate={{ x: [0, -10, 0] }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Full-stack developer
                    </motion.span>

                    <motion.span
                        className="hero__title-line hero__title-line--accent"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{
                            x: [0, -8, 0],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.7,
                            delay: 0.2,
                            ease: [0.44, 1, 0.36, 1],
                        }}
                    >
                        with a UX mindset.
                    </motion.span>
                </motion.h1>

                <div className="hero__bottom">
                    <motion.p
                        className="hero__description"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: reduceMotion ? 0 : 0.18,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        I design and build accessible, responsive digital
                        products with React, Node.js and modern web
                        technologies, combining development with a strong focus
                        on usability and user experience.
                    </motion.p>

                    <motion.a
                        href="#work"
                        className="hero__cta"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: reduceMotion ? 0 : 0.28,
                        }}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                    >
                        View my work
                        <i className="bi bi-arrow-down" aria-hidden="true" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Hero;