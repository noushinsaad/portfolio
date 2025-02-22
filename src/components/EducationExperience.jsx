import { motion } from "framer-motion";

const EducationExperience = () => {
    const education = [
        {
            title: "BSc in Computer Science and Engineering",
            institution: "Brac University, Dhaka, Bangladesh",
            duration: "April 2018 - May 2022",
            details: "CGPA: 3.72 (out of 4.00)",
        },
        {
            title: "HSC (Science)",
            institution: "Govt. Shah Sultan College, Bogura, Bangladesh",
            duration: "2016 - 2018",
            details: "GPA: 5.00 (out of 5.00)",
        },
        {
            title: "SSC (Science)",
            institution: "Karatoa Multimedia School and College, Bogura, Bangladesh",
            duration: "2014 - 2016",
            details: "GPA: 5.00 (out of 5.00)",
        },
    ];

    const experience = [
        {
            title: "Assistant Director of Event Management",
            organization: "Robotics Club of Brac University (ROBU)",
            location: "Brac University, Dhaka, Bangladesh",
            duration: "June 2020 - August 2021",
            details: [
                "Supervised national events (Odommo'50, Joyjatra Techfest, Traction2020).",
                "Planned events organized by the club.",
            ],
        },
        {
            title: "Senior Executive of Event Management",
            organization: "Brac University Adventure Club (BUAC)",
            location: "Brac University, Dhaka, Bangladesh",
            duration: "September 2019 - May 2020",
            details: [
                "Managed people during tours and events.",
                "Supervised club juniors during events.",
                "Planned recruitment processes, orientation programs, and club events.",
            ],
        },
    ];

    return (
        <section className="min-h-screen bg-neutral flex items-center justify-center text-white py-10 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black z-0"></div>

            <div className="flex flex-col gap-12 max-w-4xl px-4 lg:pl-24 z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                >
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white transition-all duration-300">
                        <span>📄</span> RESUME
                    </button>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Education & <span className="text-green-400">Experience</span>
                </motion.h1>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold mb-6">Education</h2>
                        <ul className="space-y-6">
                            {education.map((edu, index) => (
                                <li key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                                    <p className="text-gray-400 mt-2">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
                                    <p className="text-sm text-gray-300 mt-2">{edu.details}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold mb-6">Experience</h2>
                        <ul className="space-y-6">
                            {experience.map((exp, index) => (
                                <li key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-gray-400 mt-2">{exp.organization}</p>
                                    <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                                    <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
                                    <ul className="list-disc list-inside text-sm mt-2 text-gray-400">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
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

export default EducationExperience;