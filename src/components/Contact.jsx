function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__top">
                <p className="section-label">Contact</p>

                <p className="contact__availability">
                    Available for opportunities
                </p>
            </div>

            <div className="contact__main">
                <h2>
                    Let&apos;s build something
                    <span> worth using.</span>
                </h2>

                <a
                    href="mailto:alessia.smeraglia@gmail.com"
                    className="contact__email"
                >
                    Get in touch
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <footer className="footer">
                <div className="footer__left">
                    <p>Alessia Smeraglia</p>
                    <span>Full-stack Developer · UX-minded</span>
                </div>

                <div className="footer__links">
                    <a
                        href="https://github.com/alessiaasmeraglia"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alessia-smeraglia"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>
                </div>

                <p className="footer__copyright">
                    © {new Date().getFullYear()}
                </p>
            </footer>
        </section>
    );
}

export default Contact;