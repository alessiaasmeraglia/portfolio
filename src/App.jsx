import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>

            <ScrollToHash />
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/projects/:slug"
                    element={<ProjectPage />}
                />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;