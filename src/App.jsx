import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <section className="placeholder-section" id="work">
                    <p>Selected work</p>
                </section>

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