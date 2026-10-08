import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Homepage normale → resta SEMPRE sulla hero
        if (location.pathname === "/" && !location.hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });

            return;
        }

        // Scrolla solo quando esiste davvero un hash
        if (location.hash) {
            const id = location.hash.replace("#", "");

            const timeout = setTimeout(() => {
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [location.pathname, location.hash]);

    return null;
}

export default ScrollToHash;