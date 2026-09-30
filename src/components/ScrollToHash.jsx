import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");

            setTimeout(() => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
}

export default ScrollToHash;