import { FiLinkedin } from 'react-icons/fi';
import DP from '../assets/DP.JPG';
import { FaGithub } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';
import { BsTwitterX } from 'react-icons/bs';

const ContactCard = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="lg:fixed lg:top-1/2 lg:left-2 lg:transform lg:-translate-y-1/2 bg-gray-800 text-white w-full lg:w-1/4 p-6 rounded-lg shadow-lg min-h-[400px] mt-4 sm:mt-0 z-50">
            {/* Top Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Sa&apos;ad</h1>
                <span className="text-sm text-gray-400">Web Developer</span>
            </div>

            {/* Image */}
            <img
                src={DP}
                alt="Profile"
                className="w-full mx-auto rounded-md mb-4"
            />

            {/* Contact Info */}
            <div className="text-center">
                <p className="text-4xl font-medium">Md. Noushin Islam</p>
                <p className="text-2xl text-gray-400">Dhaka, Bangladesh</p>
            </div>

            {/* Footer Section */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                <p className="text-sm mb-4">&copy; 2024 Sa&apos;ad All Rights Reserved</p>
                <div className="flex justify-center gap-4 text-xl mb-4">
                    <a href="https://github.com/noushinsaad" className="hover:text-green-400">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/md-noushin-islam-sa-ad/" className="hover:text-green-400">
                        <FiLinkedin className="text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/noushinislam.saad0205/" className="hover:text-green-400">
                        <SlSocialFacebook className="text-2xl" />
                    </a>
                    <a href="https://x.com/SaAd96298" className="hover:text-green-400">
                        <BsTwitterX className="text-2xl" />
                    </a>
                </div>
                <button className="btn btn-success w-full" onClick={scrollToContact}>
                    📧 Hire Me!
                </button>
            </div>
        </div>
    );
};

export default ContactCard;


