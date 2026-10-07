import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const goToSection = (sectionId) => {
        if (location.pathname === "/") {
            document
                .getElementById(sectionId)
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <header className="navbar">
            <Link to="/" className="navbar__brand" aria-label="Alessia Smeraglia home">
                AS.
            </Link>

            <nav className="navbar__links" aria-label="Primary navigation">
                <button type="button" onClick={() => goToSection("work")}>
                    Work
                </button>

                <button type="button" onClick={() => goToSection("about")}>
                    About
                </button>

                <button type="button" onClick={() => goToSection("contact")}>
                    Contact
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
