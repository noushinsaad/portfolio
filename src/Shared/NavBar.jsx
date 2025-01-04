/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";

const NavBar = ({ onNavigate, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home", icon: TiHomeOutline },
        { id: "about", label: "About", icon: FaRegUser },
        { id: "resume", label: "Resume", icon: CgWorkAlt },
        { id: "projects", label: "Projects", icon: GrProjects },
        { id: "contact", label: "Contact", icon: MdOutlineMailOutline },
    ];

    return (
        <>
            {/* Sidebar Toggle Button for Small Screens */}
            <button
                className="lg:hidden fixed top-8 right-6 z-50 p-2 bg-gray-800 text-white rounded-full shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>

            {/* Sidebar Navigation for Small Screens */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform lg:hidden w-64 z-40 shadow-lg`}
            >
                <nav className="flex flex-col items-start gap-4 p-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setIsOpen(false);
                                onNavigate(item.id);
                            }}
                            className={`flex items-center gap-4 p-3 w-full transition-colors ${activeSection === item.id
                                    ? "text-green-400 bg-gray-800 rounded-md"
                                    : "text-gray-300 hover:text-green-400"
                                }`}
                        >
                            <item.icon className="text-2xl" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Fixed Navigation for Large Screens */}
            <div className="hidden lg:block fixed lg:right-4 lg:top-1/2 transform -translate-y-1/2 z-50">
                <nav className="flex lg:flex-col items-center gap-6 p-2 bg-gray-900 rounded-full shadow-lg">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`p-3 transition-colors ${activeSection === item.id
                                    ? "text-green-400"
                                    : "text-gray-300 hover:text-green-400"
                                }`}
                        >
                            <item.icon className="text-2xl" />
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default NavBar;
