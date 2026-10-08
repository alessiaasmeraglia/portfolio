import { motion, useReducedMotion } from "motion/react";

function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="hero" id="home">
            <div className="hero__top">
                

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
                <motion.h1>
                    <motion.span
                        className="hero__title-line"
                        initial={{
                            opacity: 0,
                            x: 140,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        Full-stack developer
                    </motion.span>

                    <motion.span
                        className="hero__title-line hero__title-line--accent"
                        initial={{
                            opacity: 0,
                            x: 140,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.4,
                            delay: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        with a UX mindset.
                    </motion.span>
                </motion.h1>

                <div className="hero__bottom">
                    <motion.p
                        className="hero__description"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        I design and build accessible, responsive digital products
                        with React, Node.js and modern web technologies, combining
                        development with a strong focus on usability and user
                        experience.
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