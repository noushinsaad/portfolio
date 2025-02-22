import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center py-10 relative overflow-hidden pl-0 xl:pl-56">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-xl shadow-2xl max-w-4xl w-full mx-4 border border-gray-800 z-10"
            >
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-white mb-4">
                    Let&apos;s Work <span className="text-green-500">Together!</span>
                </h1>
                <p className="text-center text-gray-400 mb-8">Md. Noushin Islam</p>

                {/* Form */}
                <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone (Optional)
                        </label>
                        <input
                            type="tel"
                            placeholder="Your phone number"
                            className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            placeholder="Write your message here ..."
                            className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

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

export default ContactForm;