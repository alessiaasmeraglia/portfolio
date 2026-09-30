const projects = [
    {
        id: 1,
        slug: "climbcompare-ai",
        number: "01",
        title: "ClimbCompare AI",
        category: "Full-stack · AI",
        type: "Development",
        year: "2026",

        role: "Front-end & Full-stack Developer",
        timeline: "2026",
        status: "Personal project",

        description:
            "An AI-powered climbing shoe comparison platform designed to help climbers explore models, compare products and find shoes suited to their needs.",

        technologies: [
            "React",
            "JavaScript",
            "Vite",
            "Node.js",
            "Express",
            "OpenAI API",
            "CSS",
            "LocalStorage"
        ],

        image: "/images/climbcompare.jpg",

        github: "https://github.com/alessiaasmeraglia",
        live: null,

        overview:
            "ClimbCompare is a web application built around a climbing shoe catalogue and comparison experience. It combines product discovery, filtering, favorites, side-by-side comparison and an AI-assisted recommendation feature in a single interface.",

        challenge:
            "Choosing climbing shoes can be difficult because models differ in fit, stiffness, shape and intended use. Product information is often fragmented across different sources, making it hard to compare models directly and understand which shoe may be suitable for a specific climber.",

        solution:
            "I designed ClimbCompare as a centralized product experience where users can browse climbing shoes, search and filter the catalogue, save favorites, compare two models side by side and receive AI-assisted recommendations based on their preferences.",

        features: [
            "Search with debounce",
            "Category filtering",
            "Alphabetical sorting",
            "Detailed product pages",
            "Two-product comparison",
            "Favorites stored with LocalStorage",
            "Responsive interface",
            "Empty states and reset filters",
            "404 handling",
            "AI-assisted climbing shoe recommendations"
        ],

        learnings:
            "ClimbCompare helped me move beyond building isolated interface components and think more in terms of product architecture. I worked with shared state, reusable components, persistence, API integration and UX decisions across a complete user flow."
    },

    {
        id: 2,
        slug: "jsons-quest",
        number: "02",
        title: "JSON's Quest",
        category: "Full-stack · E-commerce",
        type: "Development",
        year: "2026",

        description:
            "A fantasy-inspired e-commerce experience featuring cart management, wishlist, checkout and product recommendations.",

        technologies: ["React", "Node.js", "Express", "MySQL"],

        image: "/images/jsons-quest.jpg",

        github: "#",
        live: "#",

        overview:
            "JSON's Quest is a team-developed fantasy e-commerce application combining product discovery, cart management and a themed interface.",

        challenge:
            "The project required coordinating front-end and back-end features while maintaining a consistent visual identity across a relatively complex e-commerce flow.",

        solution:
            "We created a modular React interface backed by Express and MySQL, with dedicated flows for product browsing, wishlist, cart, checkout and related products.",

        features: [
            "Product catalogue",
            "Product detail pages",
            "Shopping cart",
            "Wishlist",
            "Checkout flow",
            "Recommended products",
            "Newsletter subscription",
            "404 page",
        ],

        learnings:
            "Working in a team strengthened my understanding of component organization, Git workflows and coordinating front-end development with API and database requirements.",
    },

    {
        id: 3,
        slug: "alla-grotta",
        number: "03",
        title: "Alla Grotta",
        category: "Client project · Web Design",
        type: "Client Work",
        year: "2025",

        description:
            "Responsive restaurant website designed and developed for a real client, with a strong focus on usability and mobile experience.",

        technologies: ["WordPress", "Elementor", "UX", "Responsive Design"],

        image: "/images/alla-grotta.jpg",

        github: null,
        live: "#",

        overview:
            "A website project developed for a local restaurant, focused on creating a clear, responsive and easy-to-maintain digital presence.",

        challenge:
            "The website needed to communicate the restaurant identity while making essential information such as location, menu and booking options immediately accessible.",

        solution:
            "I created a mobile-first WordPress website with a simplified information architecture, responsive layouts and clear calls to action.",

        features: [
            "Responsive design",
            "Mobile-first layout",
            "Booking-oriented UX",
            "Content organization",
            "Performance optimization",
            "WordPress maintenance",
        ],

        learnings:
            "Working with a real client helped me balance design decisions, technical constraints and practical business requirements.",
    },

    {
        id: 4,
        slug: "ux-case-study",
        number: "04",
        title: "UX Case Study",
        category: "UX · Product Design",
        type: "UX / Product",
        year: "2026",

        description:
            "A user-centered design case study exploring research, interaction design and usability.",

        technologies: ["UX Research", "Figma", "Prototyping"],

        image: "/images/ux-case-study.jpg",

        github: null,
        live: null,

        overview:
            "A UX case study focused on understanding user needs and translating research findings into interface and interaction decisions.",

        challenge:
            "The project explored how usability issues could be identified through research and translated into clearer user flows.",

        solution:
            "The process combined research, synthesis, prototyping and iterative design decisions to improve the user experience.",

        features: [
            "User research",
            "Problem definition",
            "User flows",
            "Wireframing",
            "Prototyping",
            "Usability considerations",
        ],

        learnings:
            "The project strengthened my ability to connect qualitative insights with concrete interface decisions.",
    },
];

export default projects;