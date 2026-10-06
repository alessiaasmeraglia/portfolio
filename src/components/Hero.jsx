import { motion, useScroll, useTransform } from "motion/react";

function Hero() {
    const { scrollYProgress } = useScroll();

    const eyebrowOpacity = useTransform(
        scrollYProgress,
        [0, 0.08, 0.18],
        [1, 1, 0]
    );

    const eyebrowY = useTransform(
        scrollYProgress,
        [0, 0.18],
        [0, -10]
    );

    return (
        <section className="hero" id="home">
            <div className="hero__top">
                <motion.p
                    className="hero__eyebrow"
                    style={{
                        opacity: eyebrowOpacity,
                        y: eyebrowY,
                    }}
                >
                    Full-stack Developer · UX-minded
                </motion.p>

                <p className="hero__location">
                    Trento, Italy

                    <span className="hero__availability">
                        <span
                            className="hero__availability-dot"
                            aria-hidden="true"
                        ></span>
                        Available for opportunities
                    </span>
                </p>
            </div>

            <div className="hero__content">
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Full-stack developer
                    <span> with a UX mindset.</span>
                </motion.h1>

                <div className="hero__bottom">
                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        whileHover={{ x: 5 }}
                    >
                        View my work
                        <i
                            className="bi bi-arrow-down"
                            aria-hidden="true"
                        ></i>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Hero;