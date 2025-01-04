import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center mt-40 space-y-4">
            <h2 className="text-7xl">Error</h2>
            <p className="text-4xl">Page not found</p>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-accent"
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;