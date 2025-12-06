import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../assets/data/projectsData";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectCards() {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main>
            <Header />
            <section key={location.pathname} className="py-20 bg-white" id="proyectos">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    {/* Título */}
                    <div className="section-header">
                        <div className="decorative-line"></div>
                        <h2 className="section-title">
                            {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
                        </h2>
                        <p className="section-subtitle">
                            {t('projects.subtitle')}
                        </p>
                    </div>

                    {/* Grid 2x2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-lg shadow-medium hover:shadow-strong transition-all duration-500 cursor-pointer overflow-hidden hover-lift border border-gray-100 hover:border-orange-200"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                {/* Imagen */}
                                <Link to={String(project.link)} className="block img-zoom-container">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-64 object-cover img-zoom"
                                    />
                                </Link>

                                {/* Info */}
                                <div className="p-6 bg-[#3C3C3C]">
                                    {project.location && (
                                        <p className="text-xs text-[#f9f9f9] opacity-70">{project.location}</p>
                                    )}
                                    <h3 className="text-xl font-semibold text-white mt-1">
                                        <Link to={String(project.link)}>{project.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
