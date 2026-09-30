import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

function HomePage() {
    return (
        <main id="main-content">
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Contact />
        </main>
    );
}

export default HomePage;