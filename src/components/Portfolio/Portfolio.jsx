import FeaturedProjects from "./FeaturedProjects";



const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl px-4 lg:pl-24">
                <header className="p-8">
                    <h1 className="text-2xl uppercase font-bold">Portfolio</h1>
                </header>
                <FeaturedProjects />
            </div>
        </div>
    );
};

export default Portfolio;
