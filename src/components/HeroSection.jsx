

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-neutral text-white flex items-center justify-center">
            {/* Intro Section */}
            <div className="max-w-4xl px-4 lg:pl-24 my-10">
                {/* Introduce Badge */}
                <button className="text-gray-400 border-2 p-2 border-gray-600 rounded-full mb-4">
                    INTRODUCTION
                </button>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold leading-snug">
                    Say Hi from <span className="text-green-400">Sa&apos;ad</span>, <br />
                    Frontend Designer and Developer
                </h1>

                {/* Description */}
                <p className="text-gray-400 mt-4 text-lg">
                    I craft and code with a focus on simplicity and elegance, embracing every moment of the journey.
                    <br /> Just starting out, but loving every step!
                </p>

                <a
                    href="/resume.pdf"
                    download="My_Resume.pdf"
                    className="text-green-800  btn btn-wide rounded-full mt-6"
                >
                    Download Resume
                </a>

            </div>
        </div>
    );
};

export default HeroSection;
