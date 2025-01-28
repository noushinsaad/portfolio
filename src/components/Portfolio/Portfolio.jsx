import FeaturedProjects from "./FeaturedProjects";



const Portfolio = () => {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center text-white py-10">
            <div className="max-w-4xl px-4 lg:pl-24">
                <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white">
                         PORTFOLIO
                    </button>
                </div>
                <FeaturedProjects />
            </div>
        </section>
    );
};

export default Portfolio;
