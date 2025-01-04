

const ContactForm = () => {
    return (
        <div className="min-h-screen bg-neutral flex items-center justify-center py-10">
            <div className="bg-neutral p-10  max-w-4xl px-4 lg:pl-24 w-full">
                <h1 className="text-3xl font-bold text-center text-white mb-4">
                    Let&apos;s Work <span className="text-green-500">Together!</span>
                </h1>
                <p className="text-center text-gray-400 mb-6">Md. Noushin Islam</p>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="input input-bordered w-full bg-gray-700 text-gray-300"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="input input-bordered w-full bg-gray-700 text-gray-300"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Phone (Optional)
                        </label>
                        <input
                            type="tel"
                            placeholder="Your phone number"
                            className="input input-bordered w-full bg-gray-700 text-gray-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            placeholder="Write your message here ..."
                            className="textarea textarea-bordered w-full bg-gray-700 text-gray-300"
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-full text-white font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
