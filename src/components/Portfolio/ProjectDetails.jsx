/* eslint-disable react/prop-types */


const ProjectDetails = ({ title, description, githubLink, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
                <p className="text-sm text-gray-700 mb-4">{description}</p>
                <p className="text-sm text-gray-500 mb-4">To know more <a className="text-blue-400"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    visit here.
                </a></p>
                <button
                    onClick={onClose}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;