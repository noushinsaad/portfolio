import ProjectCard from "./ProjectCard";


const projects = [
    {
        image: "https://i.postimg.cc/kXdqByjf/papertree.png",
        title: "Author-Paper Ranking",
        tools: ["Python", "NumPy Library", "Bibliometric Databases", "Ranking Algorithms"]

    },
    {
        image: "https://i.postimg.cc/rmnMd6P4/Screenshot-4-1-2025-211637-service-review-7e78b-web-app.jpg",
        title: "Service Review System",
        tools: [
            "React.js",
            "Firebase Hosting",
            "Firebase Authentication",
            "Tailwind CSS",
            "Vite.js",
            "Axios/Fetch API",
            "GitHub",
            "Node.js",
        ]

    },
    {
        image: "https://i.postimg.cc/gJkGkcNd/Screenshot-4-1-2025-211649-movie-portal-b3cb7-web-app.jpg",
        title: "Movie Portal",
        tools: [
            "React.js",
            "Firebase Hosting",
            "Firebase Authentication",
            "Tailwind CSS",
            "Vite.js",
            "Axios/Fetch API",
            "GitHub",
            "Node.js",
        ]
    },
    {
        image: "https://i.postimg.cc/VNFY809D/Screenshot-4-1-2025-211658-eco-adventure-b6b97-web-app.jpg",
        title: "Eco Adventure Web App",
        tools: [
            "React.js",
            "Firebase Hosting",
            "Firebase Authentication",
            "Tailwind CSS",
            "Vite.js",
            "GitHub",
        ]

    },
    {
        image: "https://i.postimg.cc/pd1Prb7F/lfr.jpg",
        title: "Line Follower Robot",
        tools: [
            "Python",
            "WeBots",
            "Matplotlib",
            "OpenCV",
            "Numpy",
            "Robot Simulation",
            "PID Control",
            "Line Following Algorithm",
            "GitHub",
        ]
    },
    {
        image: "https://i.postimg.cc/8kvTpYb7/intro.png",
        title: "Library Management System",
        tools: [
            "Lists",
            "Dictionaries",
            "csv",
        ]
    },
    {
        image: "https://i.postimg.cc/W3Bjmmsp/Contact-App.png",
        title: "Contact App with flutter",
        tools: [
            "Flutter",
            "Dart",
            "SQLite (for database management)",
            "Dart packages (e.g., provider, sqflite)",
            "State management (Provider or similar)",
            "Material Design (Flutter widgets)",
            "TextFormField (for user input forms)",
            "Navigator (for page transitions)",
            "ListView (for displaying contact list)",
            "Flutter's pubspec.yaml (for dependency management)",
            "Flutter's App Lifecycle"
        ]

    },

];

const FeaturedProjects = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-accent mb-8">
                    Featured <span className="text-green-500">Projects</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            image={project.image}
                            title={project.title}
                            tools={project.tools}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
