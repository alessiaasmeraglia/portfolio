import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    useEffect(() => {
        document.title = "404 — Alessia Smeraglia";

        return () => {
            document.title =
                "Alessia Smeraglia — Full-stack Developer & UX-minded";
        };
    }, []);

    return (
        <main className="not-found" id="main-content">
            <p className="section-label">404</p>

            <h1>Looks like this page got lost.</h1>

            <p className="not-found__text">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Link to="/" className="not-found__link">
                Back home →
            </Link>
        </main>
    );
}

export default NotFoundPage;