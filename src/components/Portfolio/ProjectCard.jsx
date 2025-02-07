/* eslint-disable react/prop-types */

const ProjectCard = ({ image, title, tools, liveLink, githubLink }) => {
    return (
        <div className="bg-slate-700 rounded-lg shadow-md pb-4">
            <div className="border-4 rounded-xl border-t-0 border-red-700">
                <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-wrap">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tools.map((tool, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-sm bg-secondary text-white rounded-md"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 items-center mt-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-3 py-1 rounded-md text-sm btn"
                    >
                        Live Demo
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm btn"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
