import { motion } from "motion/react"
import './style.css'
import resume from '../assets/Resume_Md. _Noushin_Islam .pdf'

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
        <div className="min-h-screen bg-neutral text-white flex items-center justify-center">
            {/* Intro Section */}
            <div className="max-w-4xl px-4 lg:pl-24 my-10">
                {/* Introduce Badge */}
                <button className="text-gray-400 border-2 p-2 border-gray-600 rounded-full mb-4">
                    INTRODUCTION
                </button>

                {/* Title */}
                <div className="relative text-5xl md:text-7xl font-bold leading-snug">
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
                </div>


                {/* Description */}
                <p className="text-gray-400 mt-4 text-lg">
                    I craft and code with a focus on simplicity and elegance, embracing every moment of the journey.
                    <br /> Just starting out, but loving every step!
                </p>

                <a
                    onClick={onButtonClick}
                    className="text-green-800  btn btn-wide rounded-full mt-6"
                >
                    Download Resume
                </a>

            </div>
        </div>
    );
};

export default HeroSection;
