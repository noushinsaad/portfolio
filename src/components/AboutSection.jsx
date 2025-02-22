import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black z-0"></div>

            <div className="max-w-4xl px-4 lg:pl-24 my-10 z-10">
                {/* About Button */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white transition-all duration-300">
                        <span className="text-lg">👤</span> ABOUT
                    </button>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Every great design begins <br /> with an even{" "}
                    <span className="text-green-400">better story</span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-sm md:text-lg max-w-2xl"
                >
                    I am a passionate web developer with a strong command of both front-end and back-end development.
                    My skill set includes creating responsive user interfaces with React and building powerful server-side
                    applications with Node.js, Express.js, and MongoDB. Additionally,
                    I have a solid foundation in Python programming and experience working with Arduino for
                    robotics and hardware projects. I aim to apply my technical knowledge to meaningful projects,
                    collaborate with talented teams, and continuously refine my skills to deliver exceptional web solutions.
                </motion.p>

                {/* Animated Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8 flex gap-4"
                >
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </motion.div>
            </div>

            {/* Floating Circles Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(10)].map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
                        animate={{ y: "100vh", opacity: [0, 1, 0] }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "linear",
                        }}
                        className="absolute w-4 h-4 bg-green-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    ></motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;