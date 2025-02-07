
const AboutSection = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="max-w-4xl px-4 lg:pl-24 my-10">
                {/* About Button */}
                <div className="mb-6">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white">
                        <span className="text-lg">👤</span> ABOUT
                    </button>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Every great design begins <br /> with an even{" "}
                    <span className="text-green-400">better story</span>
                </h1>

                {/* Paragraph */}
                <p className=" text-gray-400 text-sm md:text-lg max-w-2xl">
                    I am a passionate web developer with a strong command of both front-end and back-end development.
                    My skill set includes creating responsive user interfaces with React and building powerful server-side
                    applications with Node.js, Express.js, and MongoDB. Additionally,
                    I have a solid foundation in Python programming and experience working with Arduino for
                    robotics and hardware projects. I aim to apply my technical knowledge to meaningful projects,
                    collaborate with talented teams, and continuously refine my skills to deliver exceptional web solutions.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;