import { motion } from "framer-motion";
import "./style.css";
import resume from "../assets/Resume_Md. _Noushin_Islam.pdf";

const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ResumeOfNoushin.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-neutral text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black z-0"></div>

            {/* Intro Section */}
            <div className="max-w-4xl px-4 lg:pl-24 my-10 z-10">
                {/* Introduce Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button className="text-gray-400 border-2 p-2 border-gray-600 rounded-full mb-4 hover:text-white hover:border-white transition-all duration-300">
                        INTRODUCTION
                    </button>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative text-5xl md:text-7xl font-bold leading-snug"
                >
                    Say Hi from
                    <div className="relative">
                        {/* Nickname Animation with Typewriter Effect */}
                        <motion.span
                            className="text-green-400 absolute left-0 top-0 blinking-cursor"
                            initial={{ opacity: 1, width: "0ch" }}
                            animate={{ opacity: 1, width: "5ch" }}
                            transition={{
                                opacity: { delay: 0, duration: 0.5, repeat: Infinity, repeatDelay: 5 },
                                width: { delay: 0, duration: 5, ease: "linear", repeat: Infinity, repeatDelay: 5 },
                            }}
                            style={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                borderRight: "2px solid #00ff00",
                                animation: "blink 1s step-end infinite",
                            }}
                        >
                            Sa&apos;ad,
                        </motion.span>
                    </div>
                    <br />
                    <span className="text-gray-300">
                        Frontend Designer and Developer
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mt-4 text-lg max-w-2xl"
                >
                    I craft and code with a focus on simplicity and elegance, embracing every moment of the journey.
                    <br /> Just starting out, but loving every step!
                </motion.p>

                {/* Download Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <a
                        onClick={onButtonClick}
                        className="inline-flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-full mt-6 hover:bg-green-500 transition-all duration-300 cursor-pointer"
                    >
                        <span>Download Resume</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
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
        </div>
    );
};

export default HeroSection;