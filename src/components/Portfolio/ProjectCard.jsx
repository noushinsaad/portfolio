/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, tools, liveLink, githubLink, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.div
            className="bg-slate-800 rounded-xl shadow-lg pb-6 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tools.map((tool, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full  gap-2 bg-green-500 text-white px-4 py-2 
                        rounded-md text-sm hover:bg-green-600 transition-all duration-300"
                    >
                        <span>Live</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-md 
                        text-sm hover:bg-gray-600 transition-all duration-300"
                    >
                        <span>GitHub</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center w-full justify-center gap-2 bg-blue-500 text-white px-4 py-2 
                        rounded-md text-sm hover:bg-blue-600 transition-all duration-300"
                    >
                        <span>Details</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Project Details Modal */}
            {isModalOpen && (
                <ProjectDetails
                    title={title}
                    description={description}
                    githubLink={githubLink}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </motion.div>
    );
};

export default ProjectCard;