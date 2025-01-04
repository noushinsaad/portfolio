import { useRef, useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import ContactCard from "../Shared/ContactCard";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EducationExperience from "../components/EducationExperience";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/ContactForm";

const Main = () => {
    const sections = {
        home: useRef(null),
        about: useRef(null),
        resume: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sectionRefs = Object.values(sections);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.getAttribute("id");
                        setActiveSection(sectionId);
                    }
                });
            },
            { root: null, threshold: 0.4 }
        );

        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const scrollToSection = (section) => {
        sections[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div>
            <NavBar
                onNavigate={scrollToSection}
                activeSection={activeSection}
            />
            <ContactCard></ContactCard>
            <div id="home" ref={sections.home}>
                <HeroSection />
            </div>
            <div id="about" ref={sections.about}>
                <AboutSection />
            </div>
            <div id="resume" ref={sections.resume}>
                <EducationExperience />
            </div>
            <div id="projects" ref={sections.projects}>
                <Portfolio />
            </div>
            <div id="contact" ref={sections.contact}>
                <ContactForm />
            </div>
        </div>
    );
};

export default Main;

