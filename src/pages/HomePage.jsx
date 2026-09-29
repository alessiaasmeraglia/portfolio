import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
    return (
        <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
        </main>
    );
}

export default HomePage;