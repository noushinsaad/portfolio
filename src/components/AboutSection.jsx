
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
                    I am Noushin, graduated from the Computer Science and Engineering Department of BRAC University.
                    I am passionate about technology and robotics. I am a person who works hard and is enthused, motivated by myself,
                    dependable, and responsible. I am a responsible team player who can easily adjust to problematic circumstances.
                    I can operate well both independently and in a collaborative setting. I can stay on task and meet deadlines even
                    when under pressure.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;