import ProjectCard from "./ProjectCard";

const projects = [
    {
        image: "https://i.postimg.cc/kXdqByjf/papertree.png",
        title: "Author-Paper Ranking",
        tools: ["Python", "NumPy Library", "Bibliometric Databases", "Ranking Algorithms"],
        liveLink: "https://www.researchgate.net/profile/Palash_Roy/publication/360815826_A_Study_on_Paper_and_Author_Ranking/links/6601d43cd3a08551424f7170/A-Study-on-Paper-and-Author-Ranking.pdf#",
        githubLink: "https://github.com/Roy101/Author-Ranking-IEEE-ICIEST"
    },
    {
        image: "https://i.ibb.co.com/DPWWgJ0D/Screenshot-2025-02-07-180649.png",
        title: "Pet Adoption System",
        tools: [
            "React.js", "Firebase Hosting", "Firebase Authentication", "Tailwind CSS", "Vite.js", "Axios/Fetch API", "Node.js",
            "Tanstack Query"
        ],
        liveLink: "https://furever-home-fb49c.web.app/",
        githubLink: "https://github.com/noushinsaad/pet-adoption-client"
    },
    {
        image: "https://i.postimg.cc/rmnMd6P4/Screenshot-4-1-2025-211637-service-review-7e78b-web-app.jpg",
        title: "Service Review System",
        tools: [
            "React.js", "Firebase Hosting", "Firebase Authentication", "Tailwind CSS", "Vite.js", "Axios/Fetch API", "Node.js"
        ],
        liveLink: "https://service-review-7e78b.web.app/",
        githubLink: "https://github.com/noushinsaad/service-review-client-site"
    },
    {
        image: "https://i.postimg.cc/gJkGkcNd/Screenshot-4-1-2025-211649-movie-portal-b3cb7-web-app.jpg",
        title: "Movie Portal",
        tools: [
            "React.js", "Firebase Hosting", "Firebase Authentication", "Tailwind CSS", "Vite.js", "Axios/Fetch API", "Node.js"
        ],
        liveLink: "https://movie-portal-b3cb7.web.app/",
        githubLink: "https://github.com/noushinsaad/movie-portal-client-site"
    },
    {
        image: "https://i.postimg.cc/pd1Prb7F/lfr.jpg",
        title: "Line Follower Robot",
        tools: ["Python", "WeBots", "Matplotlib", "OpenCV", "Numpy", "Robot Simulation", "PID Control", "Line Following Algorithm"],
        liveLink: "#",
        githubLink: "https://github.com/noushinsaad/LFR-WeBots"
    },
];

const FeaturedProjects = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl px-4">
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
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
