import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        if (location.hash) {
            const id = location.hash.replace("#", "");

            requestAnimationFrame(() => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
            });

            return;
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [location.pathname, location.hash]);

    return null;
}

export default ScrollToHash;