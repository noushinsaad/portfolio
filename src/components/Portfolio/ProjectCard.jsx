/* eslint-disable react/prop-types */


const ProjectCard = ({ image, title, tools }) => {
    return (
        <div className="bg-slate-700 rounded-lg shadow-md pb-4">
            <div className="border-4 rounded-xl border-t-0 border-red-700">
                <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover" />
            </div>
            <div className="p-4">
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
            </div>
        </div>
    );
};

export default ProjectCard;
