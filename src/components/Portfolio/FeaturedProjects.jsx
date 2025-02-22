import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaJsSquare } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <section className="py-16 bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}


            <div className="max-w-5xl px-4 mx-auto z-10">
                {/* Featured Projects Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Featured <span className="text-green-500">Projects</span>
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                tools={project.tools}
                                liveLink={project.liveLink}
                                githubLink={project.githubLink}
                                description={project.description}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Skilled In Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="text-green-500">Skilled</span> In
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {skill.icon}
                                <span className="mt-2 text-xl">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating Circles Animation */}

        </section>
    );
};

export default FeaturedProjects;