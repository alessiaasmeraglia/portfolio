import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Projects />

                <section className="placeholder-section" id="about">
                    <p>About</p>
                </section>

                <section className="placeholder-section" id="contact">
                    <p>Contact</p>
                </section>
            </main>
        </>
    );
}

export default App;