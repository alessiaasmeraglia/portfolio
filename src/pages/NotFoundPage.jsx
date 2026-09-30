import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main className="not-found">
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