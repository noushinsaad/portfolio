import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaJsSquare } from "react-icons/fa";

const skills = [
    { name: 'Python', icon: <FaPython size={40} className="text-green-500" /> },
    { name: 'React', icon: <FaReact size={40} className="text-green-500" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'HTML', icon: <FaHtml5 size={40} className="text-green-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} className="text-green-500" /> },
    { name: 'Java', icon: <FaJava size={40} className="text-green-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-green-500" /> },
];

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    return (
        <section className="py-16">
            <div className="max-w-5xl px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
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
                            description={project.description}
                        />
                    ))}
                </div>
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold my-8">
                        <span className="text-green-500">Skilled</span> In
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center">
                                {skill.icon}
                                <span className="mt-2 text-xl">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
