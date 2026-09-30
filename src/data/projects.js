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
            "Bootstrap",
            "LocalStorage",
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
            "AI-assisted climbing shoe recommendations",
        ],

        learnings:
            "ClimbCompare helped me move beyond building isolated interface components and think more in terms of product architecture. I worked with shared state, reusable components, persistence, API integration and UX decisions across a complete user flow.",

        screenshots: [
            {
                src: "/images/climbcompare-home.jpg",
                alt: "ClimbCompare homepage",
                label: "Homepage",
            },
            {
                src: "/images/climbcompare-catalogue.jpg",
                alt: "ClimbCompare catalogue",
                label: "Catalogue",
            },
            {
                src: "/images/climbcompare-compare.jpg",
                alt: "ClimbCompare product comparison",
                label: "Comparison",
            },
        ],

        contribution: [
            "Designed the overall product experience and information architecture",
            "Built reusable React components and page layouts",
            "Implemented filtering, sorting, favorites and comparison flows",
            "Managed shared state and LocalStorage persistence",
            "Integrated the AI recommendation feature with an Express backend",
            "Worked on responsive behavior, empty states and UX details",
        ],
    },

    {
        id: 2,
        slug: "jsons-quest",
        number: "02",
        title: "JSON's Quest",
        category: "Full-stack · E-commerce",
        type: "Development",
        year: "2026",

        role: "Front-end Developer",
        timeline: "2026",
        status: "Team project",

        description:
            "A fantasy-inspired e-commerce experience featuring cart management, wishlist, checkout and product recommendations.",

        technologies: [
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "MySQL",
            "Bootstrap",
        ],

        image: "/images/jsons-quest.jpg",

        github: "#",
        live: null,

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
            "Responsive interface",
        ],

        learnings:
            "Working in a team strengthened my understanding of component organization, Git workflows and coordinating front-end development with API and database requirements.",

        screenshots: [
            {
                src: "/images/jsons-quest-home.jpg",
                alt: "JSON's Quest homepage",
                label: "Homepage",
            },
            {
                src: "/images/jsons-quest-product.jpg",
                alt: "JSON's Quest product detail page",
                label: "Product detail",
            },
            {
                src: "/images/jsons-quest-cart.jpg",
                alt: "JSON's Quest shopping cart",
                label: "Cart",
            },
        ],

        contribution: [
            "Worked on the front-end architecture and React components",
            "Developed key user flows including cart, wishlist and checkout",
            "Implemented recommended products in the product detail experience",
            "Contributed to responsive UI and visual consistency",
            "Collaborated with the team using Git and shared repositories",
            "Integrated front-end features with REST API endpoints",
        ],
    },

    {
        id: 3,
        slug: "alla-grotta",
        number: "03",
        title: "Alla Grotta",
        category: "Client project · UX/UI · Web Development",
        type: "Client Work",
        year: "2025",

        role: "UX/UI Designer & Web Developer",
        timeline: "Sep 2025 — Jan 2026",
        status: "Real client project",

        description:
            "A real-world restaurant website redesigned and rebuilt from scratch after a change in management, with a mobile-first focus on bookings, menu access and phone calls.",

        technologies: [
            "WordPress",
            "Elementor",
            "Figma",
            "GA4",
            "UX Research",
            "Information Architecture",
            "Responsive Design"
        ],

        image: "/images/alla-grotta-cover.jpg",

        github: null,
        live: "https://www.pizzeriaallagrotta-trento.it/",

        overview:
            "Alla Grotta is a real client project for a restaurant in Trento. Following a change in management, the previous website was no longer usable, so I redesigned and rebuilt the site from scratch with a mobile-first approach and a clear focus on the restaurant’s key user actions.",

        challenge:
            "Users needed to find essential information quickly, especially on mobile. The main challenge was balancing clarity for customers with a simple content structure that the restaurant could maintain over time.",

        solution:
            "I simplified the information architecture around three primary actions: Book, View Menu and Call. I designed the interface mobile-first, created clear and repeatable content patterns, and implemented the final website in WordPress while keeping usability, accessibility and maintainability in mind.",

        contribution: [
            "Collected stakeholder needs, priorities and operational constraints",
            "Defined the information architecture and main user flows",
            "Designed the interface with a mobile-first approach",
            "Built the website in WordPress and Elementor",
            "Improved accessibility, readability and CTA visibility",
            "Set up GA4 tracking for key user actions",
            "Used analytics insights to validate and refine priorities"
        ],

        featuresTitle: "What I delivered.",

        features: [
            "Mobile-first responsive website",
            "Clear booking, menu and call flows",
            "Simplified information architecture",
            "Accessible and readable interface",
            "Reusable WordPress content structure",
            "Google Analytics 4 event tracking",
            "Performance and image optimization"
        ],

        insights: [
            "Mobile users primarily need immediate access to booking, menu and phone actions.",
            "Content hierarchy must be highly scannable, with clear titles and visible CTAs.",
            "A maintainable structure is essential for a small business website to remain effective over time."
        ],

        metrics: [
            {
                label: "Tracked action",
                value: "Phone clicks"
            },
            {
                label: "Tracked action",
                value: "Booking clicks"
            },
            {
                label: "Tracked content",
                value: "Menu views"
            }
        ],

        results:
            "Analytics showed strong mobile usage, with phone clicks emerging as a frequent action and the Menu page among the most visited areas. These signals confirmed the importance of keeping contact actions and menu access highly visible in the mobile experience.",

        learnings:
            "This project reinforced that real-world UX is often about priorities and simplicity rather than adding features. It also strengthened my understanding of mobile-first information architecture, maintainable WordPress structures and using analytics to support design decisions.",

        screenshots: [
            {
                src: "/images/alla-grotta-home.jpg",
                alt: "Alla Grotta homepage",
                label: "Homepage"
            },
            {
                src: "/images/alla-grotta-mobile.jpg",
                alt: "Alla Grotta mobile experience",
                label: "Mobile experience"
            },
            {
                src: "/images/alla-grotta-menu.jpg",
                alt: "Alla Grotta menu page",
                label: "Menu"
            },
            {
                src: "/images/alla-grotta-contact.jpg",
                alt: "Alla Grotta booking and contact actions",
                label: "Booking & contact"
            }
        ]
    },

    {
        id: 4,
        slug: "ux-case-study",
        number: "04",
        title: "UX Case Study",
        category: "UX · Product Design",
        type: "UX / Product",
        year: "2026",

        role: "UX Designer",
        timeline: "2026",
        status: "Case study",

        description:
            "A user-centered design case study exploring research, interaction design and usability.",

        technologies: [
            "UX Research",
            "Figma",
            "Wireframing",
            "Prototyping",
            "Usability",
        ],

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

        screenshots: [
            {
                src: "/images/ux-case-study-overview.jpg",
                alt: "UX case study overview",
                label: "Overview",
            },
            {
                src: "/images/ux-case-study-wireframes.jpg",
                alt: "UX case study wireframes",
                label: "Wireframes",
            },
            {
                src: "/images/ux-case-study-prototype.jpg",
                alt: "UX case study prototype",
                label: "Prototype",
            },
        ],
        contribution: [
            "Defined the UX problem and research goals",
            "Analyzed user needs and pain points",
            "Created user flows and wireframes",
            "Designed interactive prototypes",
            "Evaluated usability and iterated on design decisions",
        ],
    },
];

export default projects;