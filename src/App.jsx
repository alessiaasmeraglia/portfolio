import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/projects/:slug"
                    element={<ProjectPage />}
                />
            </Routes>
        </>
    );
}

export default App;