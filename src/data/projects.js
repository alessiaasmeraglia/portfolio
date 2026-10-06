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

        image: "/images/climbcompare-cover.jpg",

        github: "https://github.com/alessiaasmeraglia/progetto-finale-spec-frontend-front",
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
                alt: "ClimbCompare homepage introducing the climbing shoe comparison experience",
                label: "Homepage",
            },
            {
                src: "/images/climbcompare-catalogue.jpg",
                alt: "ClimbCompare catalogue with search, filters and climbing shoe cards",
                label: "Catalogue & filtering",
            },
            {
                src: "/images/climbcompare-compare.jpg",
                alt: "ClimbCompare side-by-side climbing shoe comparison",
                label: "Product comparison",
            },
            {
                src: "/images/climbcompare-ai.jpg",
                alt: "ClimbCompare AI-assisted climbing shoe recommendation",
                label: "AI recommendation",
            },
            {
                src: "/images/climbcompare-detail.jpg",
                alt: "ClimbCompare climbing shoe detail page",
                label: "Product detail",
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
            "A fantasy-inspired e-commerce platform developed as a team project, with a strong focus on product discovery, cart flows and a cohesive themed interface.",

        technologies: [
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "MySQL",
            "Bootstrap",
            "REST API",
            "Git"
        ],

        image: "/images/jsons-quest-cover.jpg",

        github: "https://github.com/alessiaasmeraglia/project-work-frontend",
        live: null,

        overview:
            "JSON's Quest is a full-stack e-commerce project developed in a team. The platform combines a fantasy-inspired visual identity with standard shopping flows such as catalogue browsing, product detail, cart, wishlist and checkout.",

        challenge:
            "The main challenge was building a relatively complex e-commerce experience while keeping the interface consistent across different pages and coordinating front-end work with the rest of the team.",

        solution:
            "We built the application with React on the front end and a Node.js, Express and MySQL stack on the back end. The interface was structured around reusable components and clear shopping flows, while preserving the fantasy theme across the experience.",

        contribution: [
            "Worked on the front-end architecture and React components",
            "Developed the homepage and product detail experience",
            "Worked on cart and wishlist interactions",
            "Contributed to the checkout flow",
            "Implemented recommended products",
            "Worked on header, footer and responsive styling",
            "Contributed to the product and category data structure",
            "Collaborated with the team using Git and shared repositories"
        ],

        featuresTitle: "Core experience.",

        features: [
            "Product catalogue",
            "Product detail pages",
            "Shopping cart",
            "Wishlist",
            "Checkout flow",
            "Recommended products",
            "Newsletter subscription",
            "Responsive interface",
            "404 page"
        ],

        learnings:
            "This project strengthened my ability to work in a shared codebase, coordinate front-end development with back-end requirements and maintain consistency across a multi-page e-commerce experience.",

        screenshots: [
            {
                src: "/images/jsons-quest-home.jpg",
                alt: "JSON's Quest fantasy e-commerce homepage",
                label: "Homepage"
            },
            {
                src: "/images/jsons-quest-product.jpg",
                alt: "JSON's Quest product detail page",
                label: "Product detail"
            },
            {
                src: "/images/jsons-quest-cart.jpg",
                alt: "JSON's Quest shopping cart",
                label: "Cart"
            },
            {
                src: "/images/jsons-quest-wishlist.jpg",
                alt: "JSON's Quest wishlist",
                label: "Wishlist"
            },
            {
                src: "/images/jsons-quest-checkout.jpg",
                alt: "JSON's Quest checkout flow",
                label: "Checkout"
            }
        ]
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
        slug: "monte-bondone-ski",
        number: "04",

        title: "Monte Bondone Ski",
        category: "UX Research · Service Design",
        type: "UX / Product",
        year: "2024",

        role: "UX Researcher & Designer",
        timeline: "Mar 2024 — Jun 2024",
        status: "University project · Collaboration with Trento Funivie",

        description:
            "An end-to-end UX Research and Service Design project focused on the ski pass experience, from user research to mobile-first digital flows.",

        technologies: [
            "UX Research",
            "Service Design",
            "Figma",
            "Miro",
            "Interviews",
            "Questionnaires",
            "User Journey",
            "Service Blueprint",
            "Information Architecture",
            "User Flow",
            "Wireframing",
        ],

        image: "/images/monte-bondone-cover.jpg",

        github: null,

        live:
            "https://www.figma.com/proto/LaSStNfrpadayNYshWtq2T/Monte-Bondone-Ski?node-id=62-2&starting-point-node-id=4%3A185",

        liveLabel: "View prototype ↗",

        galleryLabel: "Design process",
        
        galleryTitle: "From research to solution.",

        overview:
            "Monte Bondone Ski is a UX Research and Service Design project developed at the University of Trento in collaboration with Trento Funivie. The project explored the end-to-end ski pass experience across digital and physical touchpoints, with particular attention to mobile use.",

        challenge:
            "The ski pass experience involves multiple stages and channels, from searching for information and choosing the right option to purchasing, managing and using the pass on site. The challenge was to identify where friction occurred across the overall service, rather than focusing only on individual interface issues.",

        solution:
            "I combined qualitative and quantitative research to identify recurring user needs and pain points. The findings were translated into user journeys, a service blueprint, information architecture and simplified mobile-first user flows designed to make key decisions and actions clearer.",

        insights: [
            "Users need quick and easily scannable information when making decisions, especially on mobile.",
            "Friction often appears between orientation, selection and the final action rather than within a single screen.",
            "Information hierarchy and content clarity are essential to help users understand available options.",
            "The digital experience needs to reflect the operational reality of the wider service.",
        ],

        contribution: [
            "Contributed to qualitative and quantitative UX research",
            "Worked with interviews and questionnaires",
            "Synthesized research findings into recurring insights",
            "Mapped the end-to-end user journey",
            "Developed a service blueprint across customer and service touchpoints",
            "Worked on information architecture and user flows",
            "Designed mobile-first wireframes in Figma",
        ],

        featuresTitle: "The design process.",

        features: [
            "User research",
            "Interviews",
            "Questionnaires",
            "Insight synthesis",
            "User journey mapping",
            "Service blueprint",
            "Information architecture",
            "User flows",
            "Mobile wireframes",
        ],

        learnings:
            "This project strengthened my understanding that service experience problems are not always interface problems. Mapping the entire journey helped me connect user expectations, digital touchpoints and operational processes before moving into interface design.",

        screenshots: [
            {
                src: "/images/monte-bondone-research.jpg",
                alt: "Monte Bondone Ski UX research and insight synthesis",
                label: "Research & insights",
            },
            {
                src: "/images/monte-bondone-blueprint.jpg",
                alt: "Monte Bondone Ski service blueprint",
                label: "Service blueprint",
            },
            {
                src: "/images/monte-bondone-flow.jpg",
                alt: "Monte Bondone Ski information architecture and user flow",
                label: "Information architecture & flow",
            },
            {
                src: "/images/monte-bondone-wireframes.jpg",
                alt: "Monte Bondone Ski mobile wireframes",
                label: "Mobile wireframes",
            },
        ],

        fullCaseStudy: "/images/monte-bondone-full-case-study.svg",
    },
];

export default projects;