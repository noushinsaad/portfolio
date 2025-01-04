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
        <section className="min-h-screen bg-neutral flex items-center justify-center text-white py-10">
            <div className="flex flex-col gap-12 max-w-4xl px-4 lg:pl-24">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full hover:text-white hover:border-white">
                        <span>📄</span> RESUME
                    </button>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold">
                    Education & <span className="text-green-400">Experience</span>
                </h1>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Education Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">Education</h2>
                        <ul className="space-y-6">
                            {education.map((edu, index) => (
                                <li key={index}>
                                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                                    <p className="text-gray-400">{edu.institution}</p>
                                    <p className="text-sm text-gray-500">{edu.duration}</p>
                                    <p className="text-sm">{edu.details}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">Experience</h2>
                        <ul className="space-y-6">
                            {experience.map((exp, index) => (
                                <li key={index}>
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-gray-400">{exp.organization}</p>
                                    <p className="text-sm text-gray-500">{exp.duration}</p>
                                    <p className="text-sm text-gray-400">{exp.location}</p>
                                    <ul className="list-disc list-inside text-sm mt-2 text-gray-400">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationExperience;
