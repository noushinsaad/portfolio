import { motion } from "framer-motion";
import FeaturedProjects from "./FeaturedProjects";

const Portfolio = () => {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center text-white py-10 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black z-0"></div>

            <div className="max-w-4xl px-4 lg:pl-24 z-10">
                {/* Portfolio Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                >
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                     text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white transition-all duration-300">
                        <span>🎨</span> PORTFOLIO
                    </button>
                </motion.div>

                {/* Featured Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <FeaturedProjects />
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

export default Portfolio;